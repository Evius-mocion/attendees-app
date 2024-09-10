import { MantineSize, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IDynamicFieldSelect } from '../types/dynamicForm';
import { useGetCountries } from '../hooks/useGetCountries';

type Props = {
	dynamicField: IDynamicFieldSelect;
	size?: MantineSize;
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
};
export const DynamicCountryField = (props: Props) => {
	const { dynamicField, size, dynamicForm } = props;
	const { countryList } = useGetCountries();

	return (
		<Select
			value={dynamicForm.values[dynamicField.name]}
			size={size}
			searchable={dynamicField.enableSearchSelect}
			required={dynamicField.isRequerid}
			label={dynamicField.label}
			placeholder={dynamicField.placeholder}
			onChange={(event) => {
				dynamicForm.setFieldValue(dynamicField.name, event);
			}}
			error={dynamicForm.errors[dynamicField.name]}
			data={countryList.map((country) => country.name)}
			/* data={countryList.map((country) => ({ label: country.name, value: country.iso2, ...country }))} */
		/>
	);
};
