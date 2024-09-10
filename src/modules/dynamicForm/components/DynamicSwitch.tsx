import { MantineSize, rem, Switch } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useEffect } from 'react';
import { IDynamicFieldOptionsButton } from '../types/dynamicForm';

type Props = {
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
	dynamicField: IDynamicFieldOptionsButton;
	size?: MantineSize;
};

export const DynamicSwitch = (props: Props) => {
	const { dynamicForm, dynamicField, size } = props;
	const currentValue = dynamicForm.values[dynamicField.name] as boolean;

	useEffect(() => {
		dynamicForm.setFieldValue(dynamicField.name, false);
	}, []);

	return (
		<Switch
			size={size}
			checked={dynamicForm.values[dynamicField.name]}
			description={dynamicField.placeholder}
			onChange={(event) => dynamicForm.setFieldValue(dynamicField.name, event.currentTarget.checked)}
			color='teal'
			label={dynamicField.label}
			thumbIcon={
				currentValue ? (
					<IconCheck style={{ width: rem(12), height: rem(12) }} stroke={3} />
				) : (
					<IconX style={{ width: rem(12), height: rem(12) }} stroke={3} />
				)
			}
		/>
	);
};
