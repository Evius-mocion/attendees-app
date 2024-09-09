import { mocionApi } from '../../api/mocion.api';
import { Station } from '../../types/event.type';

export const loginStationService = async (stationId: string) => {
	const { data } = await mocionApi.get<{ station: Station; token: string }>(
		`api/stations/stationLogin/${stationId}`
	);
	return data;
};
export const revalidateTokenService = async () => {
	const data = await mocionApi.get<{ station: Station; token: string }>(
		`api/stations/revalidateToken`
	);
	return data;
};
