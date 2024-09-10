import { MantineSize, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useEffect, useMemo } from 'react';
import { DynamicField, IDynamicFieldSelect } from '../types/dynamicForm';
import { useGetCitiesInDynamicForm } from '../hooks/useGetCitiesInDynamicForm';

type Props = {
	dynamicField: IDynamicFieldSelect;
	size?: MantineSize;
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
	dynamicFields: DynamicField[];
};

export const DynamicCityByDepartmentField = (props: Props) => {
	const { dynamicField, dynamicForm, size, dynamicFields } = props;
	const { cities, getCitiesByStateAndCountry, isLoading, setIsLoading } = useGetCitiesInDynamicForm();
	// const { getCountryByIso } = useGetCountries();

	const departmentDependenceName = dynamicField.dependsOn;

	//*---------------Campos padre--------------------------------
	const departmentField = useMemo(() => dynamicFields.find((field) => field.name === dynamicField.dependsOn), []);
	const countryField = useMemo(
		() => dynamicFields.find((field) => field.name === departmentField?.dependsOn) as DynamicField,
		[]
	);

	//*---------------Valores seleccionados--------------------------------
	const countrySelected = dynamicForm.values[countryField?.name];
	const departmentSelected = dynamicForm.values[dynamicField.dependsOn ?? ''];
	const citySelected = dynamicForm.values[dynamicField.name];

	//*---------------Obtener ciudades--------------------------------

	const fetchCities = async () => {
		if (!departmentSelected) return;

		if (countrySelected === departmentSelected) {
			setIsLoading(false);
			dynamicForm.setFieldValue(dynamicField.name, countrySelected);
			return;
		}

		const cities = await getCitiesByStateAndCountry(countrySelected, departmentSelected);
		if (cities?.length === 0) {
			setIsLoading(false);
			dynamicForm.setFieldValue(dynamicField.name, departmentSelected);
		}
	};

	useEffect(() => {
		dynamicForm.setFieldValue(dynamicField.name, null);
		fetchCities();
	}, [departmentSelected]);

	useEffect(() => {
		dynamicForm.setFieldValue(dynamicField.name, null);
	}, [countrySelected]);

	const notDepartment = countrySelected && departmentSelected === countrySelected;
	const notCities = departmentSelected && departmentSelected === citySelected;

	return (
		<Select
			readOnly={notDepartment || notCities}
			value={citySelected}
			disabled={(!!departmentDependenceName && !departmentSelected) || isLoading}
			searchable={dynamicField.enableSearchSelect}
			size={size}
			required={dynamicField.isRequerid}
			label={dynamicField.label}
			placeholder={dynamicField.placeholder}
			onChange={(event) => {
				dynamicForm.setFieldValue(dynamicField.name, event);
			}}
			error={dynamicForm.errors[dynamicField.name]}
			data={
				notDepartment || notCities ? [departmentSelected] : cities.map((stateOrDepartment) => stateOrDepartment.name)
			}
		/>
	);
};
