import { ReactNode } from 'react';
import { MantineSize, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DynamicInput } from './DynamicInput';
import { validateNumberField, validatePhoneField, validateSelectField, validateTextField } from './validateFuncionts';
import { DynamicField, DynamicFormValidateFunction, TypeDynamicField } from '../types/dynamicForm';

type DynamicFormProps = {
	dynamicFields: DynamicField[];
	onSubmit: (values: Record<string, any>) => void;
	footer: ReactNode;
	size?: MantineSize;
};

export const DynamicForm = (props: DynamicFormProps) => {
	const { dynamicFields, onSubmit, footer, size } = props;

	const validateField = (field: DynamicField, value: any): string | undefined => {
		if (field.isRequerid && !value) return `Este campo es obligatorio`;

		switch (field.type) {
			case TypeDynamicField.number:
				return validateNumberField(field, value);
			case TypeDynamicField.text:
				return validateTextField(field, value);
			case TypeDynamicField.select:
				return validateSelectField(field, value);
			case TypeDynamicField.phone:
				return validatePhoneField(field, value);
			default:
				return undefined;
		}
	};

	const validationFunctions = dynamicFields.reduce<{ [key: string]: DynamicFormValidateFunction }>((acc, field) => {
		if (field.rules) {
			acc[field.name] = (value) => validateField(field, value);
		}
		return acc;
	}, {});

	// Construir valor inicial
	const dynamicForm = useForm<Record<string, any>>({ initialValues: {}, validate: validationFunctions });

	return (
		<form
			onSubmit={dynamicForm.onSubmit((values) => {
				onSubmit(values);
			})}
		>
			<Stack gap={'xl'}>
				{dynamicFields.map((dynamicField) => (
					<DynamicInput
						dynamicField={dynamicField}
						dynamicForm={dynamicForm}
						key={dynamicField.name}
						size={size}
						dynamicFields={dynamicFields}
					/>
				))}
				{footer}
			</Stack>
		</form>
	);
};
