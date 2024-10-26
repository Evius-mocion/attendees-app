import { IEvent, Station } from './event.type';
import { IUser } from './userEntity.type';

export type LoginStationResponse = {
	station: Station;
	access_token: string;
	event: IEvent;
	user: IUser;
};
