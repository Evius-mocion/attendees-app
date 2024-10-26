import { IEvent, Station } from '../../common/types/event.type';
import { IUser } from '../../common/types/userEntity.type';

export type AuthSlice = {
	status: AuthStatus;
	station: Station;
	stationType: StationType;
	errorMessage: string;
	event: IEvent;
	user: IUser;
};

export enum AuthStatus {
	checking = 'checking',
	notAuthenticated = 'not-authenticated',
	authenticated = 'authenticated',
}

export enum StationType {
	event = 'event',
	experience = 'experience',
}
