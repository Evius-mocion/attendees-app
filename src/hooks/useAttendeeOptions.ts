import { useEffect, useState } from 'react';
import { checkInUser, getAttendeeService } from '../common/services/attendee.service';
import { Attendee, TypeCheckIn } from '../common/types/attendee.type';
import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { useMyNavigation } from './useMyNavigation';
import { useAuthStationStore } from './useAuthStationStore';
import { getNow, getStringInLocalTimeZone } from '../common/helpers/eviusDatesManager';

export const useAttendeeOptions = (attendeeId: string) => {
	const [attendee, setAttendee] = useState<Attendee>({} as Attendee);
	const [isLoading, setIsLoading] = useState(true);
	const { goToInitialOptions } = useMyNavigation();
	const [isMarking, setIsMarking] = useState(false);
	const { station } = useAuthStationStore();

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

	const handleCheckInUser = async (attendeeId: string) => {
		try {
			setIsMarking(true);
			const { attendee } = await checkInUser({
				attendeeId: attendeeId,
				stationId: station.id,
				type: TypeCheckIn.station,
				date: getStringInLocalTimeZone(getNow()),
			});
			setAttendee(attendee);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Se hizo correctamente',
				message: `El ingreso del asistente fue marcado con éxito"`,
			});
			setIsMarking(false);
		} catch (error) {
			setIsMarking(false);
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Ups! Algo salio mal',
				message: `El ingreso del asistente no fue marcado, inténtelo de nuevo o contacte con un administrador."`,
			});
		}
	};

	useEffect(() => {
		getAttendee();
	}, [attendeeId]);

	return { attendee, isLoading, getAttendee, handleCheckInUser, isMarking };
};
