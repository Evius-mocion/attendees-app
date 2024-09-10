import { MantineSize, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { DynamicCountryField } from './DynamicCountryField';
import { DepartmentField } from './DepartmentField';
import { DynamicCityByDepartmentField } from './DynamicCityByDepartmentField';
import { DynamicSwitch } from './DynamicSwitch';
import { DynamicPhoneField } from './DynamicPhoneField';
import { DynamicSelectInput } from './DynamicSelectField';
import { DynamicField, FieldSpecialType, IDynamicFieldSelect, TypeDynamicField } from '../types/dynamicForm';

type Props = {
	dynamicField: DynamicField;
	dynamicFields: DynamicField[];
	size?: MantineSize;
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
};

const renderTextInput = (dynamicField: DynamicField, size: MantineSize | undefined, dynamicForm: Props['dynamicForm']) => (
	<TextInput
		size={size}
		type={dynamicField.type === TypeDynamicField.number ? 'number' : undefined}
		required={dynamicField.isRequerid}
		label={dynamicField.label}
		placeholder={dynamicField.placeholder}
		onChange={(event) => dynamicForm.setFieldValue(dynamicField.name, event.target.value)}
		error={dynamicForm.errors[dynamicField.name]}
	/>
);

const renderSpecialField = (
	dynamicField: IDynamicFieldSelect,
	size: MantineSize | undefined,
	dynamicForm: Props['dynamicForm'],
	dynamicFields: DynamicField[]
) => {
	switch (dynamicField.specialField) {
		case FieldSpecialType.country:
			return <DynamicCountryField dynamicField={dynamicField} dynamicForm={dynamicForm} size={size} />;
		case FieldSpecialType.stateAndDepartment:
			return <DepartmentField dynamicField={dynamicField} dynamicForm={dynamicForm} size={size} />;
		case FieldSpecialType.cityByState:
			return <DynamicCityByDepartmentField dynamicField={dynamicField} dynamicForm={dynamicForm} size={size} dynamicFields={dynamicFields} />;
		default:
			return null;
	}
};

export const DynamicInput = ({ dynamicField, size, dynamicForm, dynamicFields }: Props) => {
	const renderField = () => {
		switch (dynamicField.type) {
			case TypeDynamicField.text:
			case TypeDynamicField.number:
				return renderTextInput(dynamicField, size, dynamicForm);
			case TypeDynamicField.select:
				return dynamicField.specialField ? (
					renderSpecialField(dynamicField, size, dynamicForm, dynamicFields)
				) : (
					<DynamicSelectInput dynamicField={dynamicField} size={size} dynamicForm={dynamicForm} />
				);
			case TypeDynamicField.optionsButton:
				return <DynamicSwitch dynamicField={dynamicField} dynamicForm={dynamicForm} size={size} />;
			case TypeDynamicField.phone:
				return <DynamicPhoneField dynamicField={dynamicField} dynamicForm={dynamicForm} size={size} />;
			default:
				return null;
		}
	};

	return <>{renderField()}</>;
};
