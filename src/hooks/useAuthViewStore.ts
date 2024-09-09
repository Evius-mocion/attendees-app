import { onResetErrorMessage } from '../store/auth/authSlice';
import { AuthView, setCurrentAuthView } from '../store/auth/authViewSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const useAuthViewStore = () => {
	const { authView } = useAppSelector((store) => store.authView);
	const dispatch = useAppDispatch();

	const setAuthView = (currentView: AuthView) => {
		dispatch(setCurrentAuthView(currentView));
		dispatch(onResetErrorMessage());
	};

	return { authView, setAuthView };
};
