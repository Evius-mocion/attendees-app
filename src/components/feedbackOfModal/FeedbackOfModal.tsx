import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { IconAlertTriangle, IconInfoCircle, IconRosetteDiscountCheck, IconXboxX } from '@tabler/icons-react';
import classes from './feedbackOfModal.module.css';
import { TypeFeedback } from '../../common/types/eviusFeedback.type';
import { iconSizes } from '../../common/styles/styleConstant';

type FeedbackOfModal = {
	title: string;
	description: string;
	type: TypeFeedback;
	callback?: () => void;
};

export const FeedbackOfModal = ({ context, id, innerProps }: ContextModalProps<FeedbackOfModal>) => {
	const { description, title, type, callback } = innerProps;
	const iconType = () => {
		switch (type) {
			case TypeFeedback.success:
				return <IconRosetteDiscountCheck size={iconSizes.xxLarge} className={classes.success} />;
			case TypeFeedback.info:
				return <IconInfoCircle size={iconSizes.xxLarge} className={classes.info} />;
			case TypeFeedback.warn:
				return <IconAlertTriangle size={iconSizes.xxLarge} className={classes.warn} />;
			default:
				return <IconXboxX size={iconSizes.xxLarge} className={classes.error} />;
		}
	};

	return (
		<Stack h={'100%'} align='center' justify='center' gap='lg'>
			{iconType()}
			<Title order={2} ta={'center'}>
				{title}
			</Title>
			<Text c={'dimmed'} ta={'center'} fz={'lg'}>
				{description}
			</Text>
			<Group justify='center'>
				<Button
					size='lg'
					onClick={() => {
						if (callback) callback();
						context.closeModal(id);
					}}
				>
					Aceptar
				</Button>
			</Group>
		</Stack>
	);
};
