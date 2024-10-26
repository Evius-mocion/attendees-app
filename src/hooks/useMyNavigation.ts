import { useNavigate } from 'react-router-dom';

export const useMyNavigation = () => {
	const navigate = useNavigate();
	const goToInitialOptions = () => {
		navigate('/identifyAttendee');
	};
	const goToCheckInWithQrCode = () => {
		navigate('/options/checkInWithQrCode');
	};
	const goToCheckInWithEmail = () => {
		navigate('/options/checkInWithEmail');
	};
	const goToCheckInWithAccessCode = () => {
		navigate('/options/checkInWithAccessCode');
	};
	const goToRegisterUser = () => {
		navigate('/options/registerUser');
	};

	const goToLoginOptions = () => {
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
		goToLoginOptions,
		goToCheckInWithAccessCode,
	};
};
