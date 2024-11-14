import { useParams } from 'react-router-dom';

export enum TMyParams {
	attendeeId = 'attendeeId',
}

export const useMyParams = useParams<TMyParams>;
