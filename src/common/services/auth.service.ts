import { LocalStorageNames } from '../../../../data-hub/src/common/types';
import { authApi } from '../../api/authApi';
import { getItemInStorage } from '../helpers/localStorage';
import { LoginStationResponse } from '../types/auth.type';

export const loginStationService = async (stationId: string) => {
	const { data } = await authApi.get<LoginStationResponse>(`api/stations/stationLogin/${stationId}`);
	return data;
};
export const revalidateTokenService = async () => {
	const token = getItemInStorage(LocalStorageNames.TOKEN);
	const data = await authApi.get<LoginStationResponse>(`api/stations/revalidateToken/${token}`);
	return data;
};
