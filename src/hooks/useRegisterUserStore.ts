import { showFeedbackOfModal } from '../common/helpers/showEviusFeedback';
import { registerUserInEvent } from '../common/services/attendee.service';
import { AttendeeRegisterData } from '../common/types/attendee.type';
import { TypeFeedback } from '../common/types/eviusFeedback.type';
import { IUser, UserBasicData } from '../common/types/userEntity.type';
import {
	setClearRegisterPage,
	setIsRegistering,
	setRegisterUserView,
	setUserData,
} from '../store/registerUser/registerUserSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { RegisterUserView } from '../store/types/registerUser.type';
import { useAuthStationStore } from './useAuthStationStore';

export const useRegisterUserStore = () => {
	const { currentView, isRegistering, userData } = useAppSelector((store) => store.registerUser);
	const { event } = useAuthStationStore();
	const dispatch = useAppDispatch();

	const onSetRegisterView = (registerUserView: RegisterUserView) => {
		dispatch(setRegisterUserView(registerUserView));
	};

	const onSetUserData = (userData: UserBasicData) => {
		dispatch(setUserData(userData));
	};

	const resetRegisterProcess = () => {
		dispatch(setRegisterUserView(RegisterUserView.initial));
	};

	const onRegisterUserIntoEvent = async (userAntAttendeeData: AttendeeRegisterData) => {
		try {
			dispatch(setIsRegistering(true));
			await registerUserInEvent(userAntAttendeeData, event.id);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Registro exitoso',
				message: 'El usuario ha sido registrado con éxito',
			});
			dispatch(setIsRegistering(false));
		} catch (error) {
			dispatch(setIsRegistering(false));
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Ups! No pudimos hacerlo',
				message: 'El usuario no se registro.',
			});
		}
	};

	const handledClearRegisterPage = () => {
		dispatch(setClearRegisterPage());
	};
	return {
		currentView,
		onSetRegisterView,
		resetRegisterProcess,
		onSetUserData,
		isRegistering,
		userData,
		onRegisterUserIntoEvent,
		handledClearRegisterPage,
	};
};
