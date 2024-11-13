import { IUser } from './userEntity.type';

export type AttendeeRegisterData = Pick<IUser, 'fullName' | 'email' | 'gender'> & {
	[key: string]: any;
};

export type Attendee = Pick<IUser, 'fullName' | 'email'> & {
	id: string;
	[key: string]: any;
};

export interface GetAttendeeEmailStatusResponse {
	haveAccount: boolean;
	havePassword: boolean;
	isRegisteredInEvent: boolean;
	isCollaborator: boolean;
}

export interface PostAttendeeRegisterResponse {
	access_token: string;
	user: Pick<IUser, 'email' | 'fullName' | 'id' | 'gender' | 'type_account'>;
}

export type AttendeeEntity = Pick<IUser, 'fullName'> & EventAttendeeData;

export type EventAttendeeData = {
	id: string;
	checkIn: boolean;
	checkInAt: string;
	registerAt: string;
} & DynamicEventAttendeeData;

export type DynamicEventAttendeeData = Record<string, any>;
