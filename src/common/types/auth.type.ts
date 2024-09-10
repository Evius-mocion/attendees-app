import { IEvent, Station } from './event.type';

export type LoginStationResponse = {
	station: Station;
	access_token: string;
	event: IEvent;
};
