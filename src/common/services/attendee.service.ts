import { mocionApi } from '../../api/mocion.api';
import {
	Attendee,
	AttendeeRegisterData,
	GetAttendeeEmailStatusResponse,
	PostAttendeeRegisterResponse,
} from '../types/attendee.type';

//------- Check In -----------------

export const getAttendeeService = async (eventId: string, attendeeIdentify: string): Promise<Attendee> => {
	return {
		id: 'fe26fef8ef48e4f',
		email: 'luisortiz@gmail.com',
		fullName: 'Luis Ortiz',
	};
};
export const checkInUser = async (email: string) => {
	return true;
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
