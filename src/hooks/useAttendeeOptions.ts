import { useEffect, useState } from 'react';
import { getAttendeeService } from '../common/services/attendee.service';
import { useAuthStationStore } from './useAuthStationStore';
import { Attendee } from '../common/types/attendee.type';

export const useAttendeeOptions = (attendeeId: string) => {
	const { event } = useAuthStationStore();
	const [attendee, setAttendee] = useState<Attendee>();
	const [isLoading, setIsLoading] = useState(true);

	const getAttendee = async () => {
		try {
			if (!attendeeId) return;
			setIsLoading(true);
			const attendee = await getAttendeeService(event.id, attendeeId);
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
