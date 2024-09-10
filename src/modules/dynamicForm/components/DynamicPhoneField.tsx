import { Group, MantineSize, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import { SelectAreaCode } from './SelectAreaCode';
import { IDynamicFieldPhone, StatesSpecialsAux } from '../types/dynamicForm';
type Props = {
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
	dynamicField: IDynamicFieldPhone;
	size?: MantineSize;
};

export const DynamicPhoneField = (props: Props) => {
	const { dynamicField, dynamicForm, size } = props;
	const value = dynamicForm.values[dynamicField.name] || '';
	const [countrySelected, setCountrySelected] = useState<string>(StatesSpecialsAux.defaultPhoneAreaSelected);

	if (dynamicField.whitAreaCode) {
		return (
			<Group grow>
				<SelectAreaCode
					setCountrySelected={setCountrySelected}
					countrySelected={countrySelected}
					dynamicForm={dynamicForm}
					dynamicField={dynamicField}
				/>
				<TextInput
					value={value.replace(`${countrySelected} `, '')}
					size={size}
					required={dynamicField.isRequerid}
					label={dynamicField.label}
					placeholder={dynamicField.placeholder}
					onChange={(event) => {
						dynamicForm.setFieldValue(dynamicField.name, `${countrySelected} ${event.target.value}`);
					}}
					error={dynamicForm.errors[dynamicField.name]}
					maw={'70%'}
				/>
			</Group>
		);
	}
	return (
		<TextInput
			value={value}
			size={size}
			required={dynamicField.isRequerid}
			label={dynamicField.label}
			placeholder={dynamicField.placeholder}
			onChange={(event) => {
				console.log('event', event.target.value);
				dynamicForm.setFieldValue(dynamicField.name, event.target.value);
			}}
			error={dynamicForm.errors[dynamicField.name]}
		/>
	);
};
