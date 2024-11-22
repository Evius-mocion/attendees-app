import { mocionApi } from '../../api/mocion.api';
import {
	Attendee,
	AttendeeRegisterData,
	CheckIn,
	GetAttendeeEmailStatusResponse,
	PostAttendeeRegisterResponse,
	TypeCheckIn,
} from '../types/attendee.type';

export const getAttendeeService = async (attendeeId: string): Promise<Attendee | null> => {
	const { data } = await mocionApi.get<{ attendee: Attendee | null }>(`api/attendee/find/${attendeeId}`);
	return data.attendee;
};

//------- Check In -----------------

export const getAttendeeServiceByIdentifier = async (
	eventId: string,
	attendeeIdentify: string
): Promise<Attendee | null> => {
	const { data } = await mocionApi.get<{ attendee: Attendee | null }>(
		`api/attendee/find/eventId/${eventId}/identify/${attendeeIdentify}`
	);
	return data.attendee;
};
export const checkInUser = async ({
	attendeeId,
	stationId,
	type,
	date,
}: {
	attendeeId: string;
	stationId: string;
	type: TypeCheckIn;
	date: string;
}) => {
	const { data } = await mocionApi.patch<{ attendee: Attendee }>(`api/attendee/checkIn/${attendeeId}`, {
		stationID: stationId,
		type,
		date,
	} as CheckIn);
	return data;
};

//----------------Register -----------------
export const registerUserInEvent = async (attendeeRegisterData: AttendeeRegisterData, eventId: string) => {
	const data = await mocionApi.post<PostAttendeeRegisterResponse>(`/api/event/register`, {
		...attendeeRegisterData,
		eventId,
	});
	return data;
};

export const checkEmailService = async (email: string, eventId: string) => {
	const data = await mocionApi.get<GetAttendeeEmailStatusResponse>(
		`/api/event/isAttendee/?email=${email}&eventId=${eventId}`
	);
	return data;
};
