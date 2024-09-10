import { MantineSize, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useEffect } from 'react';
import { IDynamicFieldSelect } from '../types/dynamicForm';
import { useGetStatesIntoDynamicForm } from '../hooks/useGetStatesIntoDynamicForm';

type Props = {
	dynamicField: IDynamicFieldSelect;
	size?: MantineSize;
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
};

export const DepartmentField = (props: Props) => {
	const { dynamicField, dynamicForm, size } = props;
	const { departments, getStatesByCountry, isLoading } = useGetStatesIntoDynamicForm();
	// const { getCountryByIso } = useGetCountries();

	const countrySelected = dynamicForm.values[dynamicField.dependsOn ?? ''];
	const departmentSelected = dynamicForm.values[dynamicField.name];

	const fetchDepartments = async () => {
		if (dynamicField.dependsOn) {
			if (countrySelected) {
				const departments = await getStatesByCountry(countrySelected);
				if (departments?.length === 0) {
					dynamicForm.setFieldValue(dynamicField.name, countrySelected);
				}
			}
			return;
		}
	};

	useEffect(() => {
		dynamicForm.setFieldValue(dynamicField.name, null);
		fetchDepartments();
	}, [countrySelected]);

	const isReadOnly = countrySelected && departmentSelected === countrySelected;

	const haveCountryDependence = !!dynamicField.dependsOn;

	return (
		<Select
			value={isReadOnly ? countrySelected : departmentSelected}
			readOnly={isReadOnly}
			disabled={(haveCountryDependence && !countrySelected) || isLoading}
			searchable={!isReadOnly && dynamicField.enableSearchSelect}
			size={size}
			required={dynamicField.isRequerid}
			label={dynamicField.label}
			placeholder={dynamicField.placeholder}
			onChange={(event) => {
				dynamicForm.setFieldValue(dynamicField.name, event);
			}}
			error={dynamicForm.errors[dynamicField.name]}
			data={isReadOnly ? [countrySelected] : departments.map((stateOrDepartment) => stateOrDepartment.name)}
		/>
	);
};
