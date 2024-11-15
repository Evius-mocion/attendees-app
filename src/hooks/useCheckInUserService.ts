import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { checkInUser, getAttendeeServiceByIdentifier } from '../common/services/attendee.service';
import { TypeCheckIn } from '../common/types/attendee.type';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useAuthStationStore } from './useAuthStationStore';
import { useMyNavigation } from './useMyNavigation';

export const useCheckInUserService = () => {
	const { event, station } = useAuthStationStore();
	const { goToAttendeeActions } = useMyNavigation();

	const handleCheckInUser = async (attendeeId: string) => {
		try {
			const result = await checkInUser({ attendeeId: attendeeId, stationId: station.id, type: TypeCheckIn.station });
			console.log('result', result);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Se hizo correctamente',
				message: `El ingreso del asistente fue marcado con éxito"`,
			});
		} catch (error) {
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Ups! Algo salio mal',
				message: `El ingreso del asistente no fue marcado, inténtelo de nuevo o contacte con un administrador."`,
			});
		}
	};

	const identifyAttendee = async (attendeeIdentify: string) => {
		try {
			const attendee = await getAttendeeServiceByIdentifier(event.id, attendeeIdentify);
			if (attendee) {
				goToAttendeeActions(attendee.id);
			} else {
				showFeedbackOfModal({
					type: TypeFeedback.info,
					title: 'UPS! No pudimos hacer eso',
					message: 'El usuario no se encuentra registrado en este evento',
				});
			}
		} catch (error) {}
	};

	return { handleCheckInUser, identifyAttendee };
};
