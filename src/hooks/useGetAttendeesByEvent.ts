import { useEviusPagination } from '@/common/hooks';
import { getAttendeesByEventService } from '@/modules/eventLanding/services/attendees.service';
import { useEffect, useState } from 'react';
import { AttendeeEntity } from '../common/types/attendee.type';
import { useAuthStationStore } from './useAuthStationStore';

export const useGetAttendeesByEvent = () => {
	const { event } = useAuthStationStore();
	const [attendeesByEvent, setAttendeesByEvent] = useState<AttendeeEntity[]>([]);
	const [isLoadingAttendees, setIsLoadingAttendees] = useState(true);
	const pagination = useEviusPagination();

	const getAttendeesByEvent = async () => {
		try {
			setIsLoadingAttendees(true);

			const { data } = await getAttendeesByEventService('organization.id', event.id, {
				limit: pagination.limit,
				offset: pagination.currentPage,
			});
			setAttendeesByEvent(data.attendees);
			pagination.onSetTotalElements(data.total);

			setIsLoadingAttendees(false);
		} catch (error) {
			console.error('Error fetching attendees by event:', error);
			setIsLoadingAttendees(false);
		}
	};

	useEffect(() => {
		getAttendeesByEvent();
	}, [pagination.currentPage, pagination.limit]);

	return {
		attendeesByEvent,
		isLoadingAttendees,
		attendeesPagination: pagination,
		reloadGetAttendees: getAttendeesByEvent,
	};
};
