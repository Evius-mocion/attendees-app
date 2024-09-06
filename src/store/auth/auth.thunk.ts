import { AxiosError } from 'axios';
import { loginStationService } from '../../common/services/auth.service';
import { AppDispatch } from '../store';
import { StationType } from '../types/auth.types';
import { onSetLogin, onSetLogout, onStartAuth } from './authSlice';
import { saveItemInStorage } from '../../common/helpers/localStorage';
import { LocalStorageNames } from '../../../../data-hub/src/common/types';

export const startAuth = (stationId: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(onStartAuth());

			const { station, token } = await loginStationService(stationId);
			dispatch(
				onSetLogin({
					station,
					stationType: station.experienceId
						? StationType.experience
						: StationType.event,
				})
			);
			saveItemInStorage(LocalStorageNames.TOKEN, token);
		} catch (error) {
			const { response } = error as AxiosError;

			if (response?.status === 404) {
				return dispatch(onSetLogout('La estación no existe'));
			}
			if (response?.status === 401) {
				return dispatch(
					onSetLogout('La estación no esta autorizada para funcionar')
				);
			}
		}
	};
};
