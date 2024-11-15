import { useEffect, useState } from 'react';
import { getAttendeeService } from '../common/services/attendee.service';
import { Attendee } from '../common/types/attendee.type';
import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useMyNavigation } from './useMyNavigation';

export const useAttendeeOptions = (attendeeId: string) => {
	const [attendee, setAttendee] = useState<Attendee>();
	const [isLoading, setIsLoading] = useState(true);
	const { goToInitialOptions } = useMyNavigation();

	const getAttendee = async () => {
		try {
			if (!attendeeId) return;
			setIsLoading(true);
			const attendee = await getAttendeeService(attendeeId);
			if (!attendee) {
				showFeedbackOfModal({
					type: TypeFeedback.error,
					title: 'Error inesperado',
					message: 'No pudimos encontrar los datos del asistente, contacte con un administrador de la plataforma.',
				});
				goToInitialOptions();
				return;
			}
			setAttendee(attendee);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getAttendee();
	}, [attendeeId]);

	return { attendee, isLoading };
};
