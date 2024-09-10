import { IUser } from './userEntity.type';

export type AttendeeRegisterData = Pick<IUser, 'fullName' | 'email' | 'gender'> & {
	id: string;
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
