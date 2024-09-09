import { onResetErrorMessage } from '../store/auth/authSlice';
import { AuthView, setCurrentAuthView, setInputCode } from '../store/auth/authViewSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const useAuthViewStore = () => {
	const { authView, inputCode } = useAppSelector((store) => store.authView);
	const dispatch = useAppDispatch();

	const setAuthView = (currentView: AuthView) => {
		dispatch(setCurrentAuthView(currentView));
		dispatch(onResetErrorMessage());
	};

	const onSetInputCode = (inputCode: string) => {
		dispatch(setInputCode(inputCode));
		if (inputCode.length > 0) dispatch(onResetErrorMessage());
	};

	return { authView, setAuthView, inputCode, onSetInputCode };
};
