import { useNavigate } from 'react-router-dom';

export const useMyNavigation = () => {
	const navigate = useNavigate();
	const goToInitialOptions = () => {
		navigate('/identifyAttendee');
	};
	const goToCheckInWithQrCode = () => {
		navigate('/identifyAttendee/checkInWithQrCode');
	};
	const goToCheckInWithEmail = () => {
		navigate('/identifyAttendee/byEmailOrUserCode');
	};
	const goToCheckInWithAccessCode = () => {
		navigate('/options/checkInWithAccessCode');
	};
	const goToRegisterUser = () => {
		navigate('/registerUser');
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
	const goToAttendees = () => {
		navigate('/attendees');
	};

	const goToCheckInWithUserCode = () => {
		navigate('/identifyAttendee/userCode');
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
		goToAttendees,
		goToCheckInWithUserCode,
	};
};
