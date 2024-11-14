import { useState } from 'react';
import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { checkInUser, getAttendeeService } from '../common/services/attendee.service';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useAuthStationStore } from './useAuthStationStore';
import { useMyNavigation } from './useMyNavigation';

export const useCheckInUserService = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const { event } = useAuthStationStore();
	const { goToAttendeeActions } = useMyNavigation();

	const handleCheckInUser = async (emailOrCode: string) => {
		try {
			const result = await checkInUser(emailOrCode);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Check In con éxito',
				message: `El correo ${emailOrCode} fue marcado como asistido correctamente`,
			});
		} catch (error) {
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Check In fallido',
				message: `El correo ${emailOrCode} no pudo ser marcado como asistido`,
			});
			setErrorMessage('');
		}
	};

	const identifyAttendee = async (attendeeIdentify: string) => {
		try {
			const attendee = await getAttendeeService(event.id, attendeeIdentify);
			if (attendee) {
				goToAttendeeActions(attendee.id);
			}
		} catch (error) {}
	};

	const resetError = () => {
		setErrorMessage('');
	};
	return { errorMessage, resetError, handleCheckInUser, identifyAttendee };
};
