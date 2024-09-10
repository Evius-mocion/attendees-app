import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
	const navigate = useNavigate();

	const goToCheckInWithQrCode = () => {
		navigate('/options/checkInWithQrCode');
	};
	const goToCheckInWithEmail = () => {
		navigate('/options/checkInWithEmail');
	};
	const goToRegisterUser = () => {
		navigate('/options/registerUser');
	};
	const goToInitialOptions = () => {
		navigate('/options/checkInWithQrCode');
	};

	return { goToCheckInWithQrCode, goToCheckInWithEmail, goToRegisterUser, goToInitialOptions };
};
