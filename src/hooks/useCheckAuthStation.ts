import { useEffect } from 'react';
import { useAuthStationStore } from './useAuthStationStore';
import { getItemInStorage, saveItemInStorage } from '../common/helpers/localStorage';
import { revalidateTokenService } from '../common/services/auth.service';
import { LocalStorageNames } from '../../../data-hub/src/common/types';

export const useCheckAuthStation = () => {
	const { handledLogin, handledLogout } = useAuthStationStore();

	const checkAuth = async () => {
		try {
			const token = getItemInStorage(LocalStorageNames.TOKEN);
			if (token && token.length > 0) {
				const { data } = await revalidateTokenService();
				handledLogin(data.station, data.access_token, data.event, data.user);
				saveItemInStorage(LocalStorageNames.TOKEN, data.access_token);
			} else {
				handledLogout();
			}
		} catch (error) {
			handledLogout();
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);
};
