import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { getAttendeeServiceByIdentifier } from '../common/services/attendee.service';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useAuthStationStore } from './useAuthStationStore';
import { useMyNavigation } from './useMyNavigation';

export const useCheckInUserService = () => {
	const { event } = useAuthStationStore();
	const { goToAttendeeActions } = useMyNavigation();

	const identifyAttendee = async (attendeeIdentify: string) => {
		try {
			const attendee = await getAttendeeServiceByIdentifier(event.id, attendeeIdentify);
			if (attendee) {
				goToAttendeeActions(attendee.id);
			} else {
				showFeedbackOfModal({
					type: TypeFeedback.info,
					title: 'Usuario no registrado',
					message: 'El usuario no se encuentra registrado en este evento.',
				});
			}
		} catch (error) {
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Ocurrió un error inesperado',
				message: 'Si el error persiste, contacte a un administrador.',
			});
		}
	};

	return { identifyAttendee };
};
