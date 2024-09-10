import { useState } from 'react';
import { GetAttendeeEmailStatusResponse } from '../common/types/attendee.type';
import { checkEmailService } from '../common/services/attendee.service';
import { useAuthStationStore } from './useAuthStationStore';
import { useRegisterUserStore } from './useRegisterUserStore';
import { RegisterUserView } from '../store/types/registerUser.type';
import { isEmail } from '@mantine/form';

export const useCheckEmail = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isCheckingEmail, setIsCheckingEmail] = useState(false);
	const [emailStatus, setEmailStatus] = useState<GetAttendeeEmailStatusResponse>({} as GetAttendeeEmailStatusResponse);

	const { event } = useAuthStationStore();
	const { onSetRegisterView, onSetUserData } = useRegisterUserStore();

	const checkEmail = async (email: string) => {
		try {
			const isInvalidEmail = isEmail('1')(email) === '1';

			if (isInvalidEmail) return setErrorMessage('El correo no es valido');
			setIsCheckingEmail(true);

			const { data } = await checkEmailService(email, event.id);
			setEmailStatus(data);

			if (data.isCollaborator) {
				setIsCheckingEmail(false);
				setErrorMessage('El correo pertenece a un colaborador de la organización');
				return;
			}
			if (data.isRegisteredInEvent) {
				setIsCheckingEmail(false);
				setErrorMessage('El correo ya se encuentra registrado en el evento');
				return;
			}
			if (data.haveAccount) {
				onSetUserData({ email, fullName: 'Nombre despreciable', gender: 'other' });
				onSetRegisterView(RegisterUserView.attendeeData);
				return;
			}
			onSetUserData({ email, fullName: 'Nombre despreciable', gender: 'other' });
			onSetRegisterView(RegisterUserView.userData);
			setIsCheckingEmail(false);
		} catch (error) {
			setIsCheckingEmail(false);
		}
	};

	return { errorMessage, isCheckingEmail, emailStatus, setErrorMessage, checkEmail };
};
