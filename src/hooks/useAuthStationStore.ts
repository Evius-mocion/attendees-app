import { LocalStorageNames } from '../../../data-hub/src/common/types';
import { removeItemInStorage, saveItemInStorage } from '../common/helpers/localStorage';
import { IEvent, Station } from '../common/types/event.type';
import { onResetErrorMessage, onSetLogin, onSetLogout } from '../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { StationType } from '../store/types/auth.types';

export const useAuthStationStore = () => {
	const { errorMessage, station, stationType, status, event } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	const handledLogin = (station: Station, token: string, event: IEvent) => {
		dispatch(
			onSetLogin({
				station,
				stationType: station.experienceId ? StationType.experience : StationType.event,
				event,
			})
		);

		saveItemInStorage(LocalStorageNames.TOKEN, token);
	};

	const handledLogout = () => {
		dispatch(onSetLogout());
		removeItemInStorage(LocalStorageNames.TOKEN);
	};

	const onSetResetErrorMessage = () => {
		dispatch(onResetErrorMessage());
	};
	return {
		errorMessage,
		station,
		stationType,
		status,
		handledLogout,
		handledLogin,
		onSetResetErrorMessage,
		event,
	};
};
