import { mocionApi } from '../../api/mocion.api';
import {
	AttendeeRegisterData,
	GetAttendeeEmailStatusResponse,
	PostAttendeeRegisterResponse,
} from '../types/attendee.type';

export const checkInUserWithEmailService = async (email: string) => {};

export const checkEmailService = async (email: string, eventId: string) => {
	const data = await mocionApi.get<GetAttendeeEmailStatusResponse>(
		`/api/event/isAttendee/?email=${email}&eventId=${eventId}`
	);
	return data;
};

export const registerUserInEvent = async (attendeeRegisterData: AttendeeRegisterData, eventId: string) => {
	const data = await mocionApi.post<PostAttendeeRegisterResponse>(`/api/event/register`, {
		...attendeeRegisterData,
		eventId,
	});
	return data;
};
