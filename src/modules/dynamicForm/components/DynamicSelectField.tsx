import { MantineSize, MultiSelect, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IDynamicFieldSelect } from '../types/dynamicForm';

type Props = {
  dynamicField: IDynamicFieldSelect;
  size?: MantineSize;
  dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
};

export const DynamicSelectInput = ({ dynamicField, size, dynamicForm }: Props) => {
  const handleChange = (value: any) => {
    dynamicForm.setFieldValue(dynamicField.name, value);
  };

  return dynamicField.enabledMultiSelect ? (
    <MultiSelect
      size={size}
      required={dynamicField.isRequerid}
      label={dynamicField.label}
      placeholder={dynamicField.placeholder}
      onChange={handleChange}
      error={dynamicForm.errors[dynamicField.name]}
      data={dynamicField.options}
    />
  ) : (
    <Select
      size={size}
      required={dynamicField.isRequerid}
      label={dynamicField.label}
      placeholder={dynamicField.placeholder}
      onChange={handleChange}
      error={dynamicForm.errors[dynamicField.name]}
      data={dynamicField.options}
    />
  );
};
