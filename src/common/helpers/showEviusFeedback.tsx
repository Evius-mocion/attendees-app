import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { NOTIFICATION_DURATION } from '../constants/feedback.constant';
import { ShowFeedbackOfModalParams, ShowFeedbackParams } from '../types/eviusFeedback.type';

export const showFeedback = (options: ShowFeedbackParams) => {
	notifications.show({
		title: options.title,
		message: options.message,
		color: options.type,
		autoClose: NOTIFICATION_DURATION,
	});
};

export const showFeedbackOfModal = (options: ShowFeedbackOfModalParams) => {
	modals.openContextModal({
		modal: 'feedbackOfModal',
		withCloseButton: false,
		size: 'md',
		closeOnClickOutside: false,
		onClose: options.callback,
		innerProps: {
			title: options.title,
			description: options.message,
			type: options.type,
			// callback: options.callback,
		},
		centered: true,
		fullScreen: options.fullScreen,
	});
};
