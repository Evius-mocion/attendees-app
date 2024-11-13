import { useState } from 'react';
import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { checkInUser } from '../common/services/attendee.service';
import { TypeFeedback } from '../common/types/eviusFeedback.type';

export const useCheckUserService = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const handleCheckInUser = async (email: string) => {
		try {
			const result = await checkInUser(email);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Check In con éxito',
				message: `El correo ${email} fue marcado como asistido correctamente`,
			});
		} catch (error) {
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Check In fallido',
				message: `El correo ${email} no pudo ser marcado como asistido`,
			});
			setErrorMessage('');
		}
	};

	const resetError = () => {
		setErrorMessage('');
	};
	return { errorMessage, resetError, handleCheckInUser };
};
