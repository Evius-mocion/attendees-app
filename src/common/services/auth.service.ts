import { LocalStorageNames } from '../../../../data-hub/src/common/types';
import { mocionApi } from '../../api/mocion.api';
import { Station } from '../../types/event.type';
import { getItemInStorage } from '../helpers/localStorage';

export const loginStationService = async (stationId: string) => {
	const { data } = await mocionApi.get<{ station: Station; access_token: string }>(
		`api/stations/stationLogin/${stationId}`
	);
	return data;
};
export const revalidateTokenService = async () => {
	const token = getItemInStorage(LocalStorageNames.TOKEN)
	const data = await mocionApi.get<{ station: Station; access_token: string }>(`api/stations/revalidateToken/${token}`);
	return data;
};
