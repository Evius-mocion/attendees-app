import { setRegisterUserView } from '../store/registerUser/registerUserSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { RegisterUserView } from '../store/types/registerUser.type';

export const useRegisterUserStore = () => {
	const { currentView } = useAppSelector((store) => store.registerUser);
	const dispatch = useAppDispatch();

	const onSetRegisterView = (registerUserView: RegisterUserView) => {
		dispatch(setRegisterUserView(registerUserView));
	};

	const resetRegisterProcess = () => {
		dispatch(setRegisterUserView(RegisterUserView.initial));
	};

	return { currentView, onSetRegisterView, resetRegisterProcess };
};
