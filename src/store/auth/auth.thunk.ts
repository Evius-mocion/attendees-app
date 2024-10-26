import { AxiosError } from 'axios';
import { loginStationService } from '../../common/services/auth.service';
import { AppDispatch } from '../store';
import { StationType } from '../types/auth.types';
import { onSetLogin, onSetLogout, onStartAuth } from './authSlice';
import { saveItemInStorage } from '../../common/helpers/localStorage';
import { LocalStorageNames } from '../../../../data-hub/src/common/types';
import { setInputCode } from './authViewSlice';

export const startAuth = (qrToken: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(onStartAuth());

			const { station, access_token, event, user } = await loginStationService(qrToken);

			dispatch(
				onSetLogin({
					station,
					stationType: station.experienceId ? StationType.experience : StationType.event,
					event,
					user,
				})
			);
			dispatch(setInputCode(''));

			saveItemInStorage(LocalStorageNames.TOKEN, access_token);
		} catch (error) {
			const { response } = error as AxiosError;

			if (response?.status === 404) {
				return dispatch(onSetLogout('La estación no existe'));
			}
			if (response?.status === 401) {
				return dispatch(
					onSetLogout('El token o código no es valido o ha espirado, póngase en contacto con el administrador')
				);
			}
			dispatch(onSetLogout('Error desconocido'));
		}
	};
};
