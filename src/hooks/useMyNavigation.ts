import { useNavigate } from 'react-router-dom';

export const useMyNavigation = () => {
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
		navigate('/identifyStation');
	};

	const goToIdentifyStationFromQr = () => {
		navigate('/identifyStation/qr');
	};
	const goToIdentifyStationFromCode = () => {
		navigate('/identifyStation/code');
	};
	return {
		goToCheckInWithQrCode,
		goToCheckInWithEmail,
		goToRegisterUser,
		goToInitialOptions,
		goToIdentifyStationFromQr,
		goToIdentifyStationFromCode,
	};
};
