import { useState } from 'react';
import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { checkInUser, getAttendeeServiceByIdentifier } from '../common/services/attendee.service';
import { TypeCheckIn } from '../common/types/attendee.type';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useAuthStationStore } from './useAuthStationStore';
import { useMyNavigation } from './useMyNavigation';
import { getNow, getStringInLocalTimeZone } from '../common/helpers/eviusDatesManager';

export const useCheckInUserService = () => {
	const { event, station } = useAuthStationStore();
	const { goToAttendeeActions } = useMyNavigation();
	const [isSaving, setIsSaving] = useState(false);

	const handleCheckInUser = async (attendeeId: string) => {
		try {
			setIsSaving(true);
			const result = await checkInUser({
				attendeeId: attendeeId,
				stationId: station.id,
				type: TypeCheckIn.station,
				date: getStringInLocalTimeZone(getNow()),
			});
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Se hizo correctamente',
				message: `El ingreso del asistente fue marcado con éxito"`,
			});
			setIsSaving(false);
		} catch (error) {
			setIsSaving(false);
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

	return { handleCheckInUser, identifyAttendee, isSaving };
};
