import { LocalStorageNames } from '../../../data-hub/src/common/types';
import {
	removeItemInStorage,
	saveItemInStorage,
} from '../common/helpers/localStorage';
import { onSetLogin, onSetLogout } from '../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { StationType } from '../store/types/auth.types';
import { Station } from '../types/event.type';

export const useAuthStationStore = () => {
	const { errorMessage, station, stationType, status } = useAppSelector(
		(store) => store.auth
	);
	const dispatch = useAppDispatch();

	const handledLogin = (station: Station, token: string) => {
		dispatch(
			onSetLogin({
				station,
				stationType: station.experienceId
					? StationType.experience
					: StationType.event,
			})
		);

		saveItemInStorage(LocalStorageNames.TOKEN, token);
	};

	const handledLogout = () => {
		dispatch(onSetLogout());
		removeItemInStorage(LocalStorageNames.TOKEN);
	};
	return {
		errorMessage,
		station,
		stationType,
		status,
		handledLogout,
		handledLogin,
	};
};
