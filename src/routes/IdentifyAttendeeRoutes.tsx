import { Navigate, Route, Routes } from 'react-router-dom';
import { InitialOptions } from '../pages/initialOptions/InitialOptions';
import { CheckInWithEmail } from '../pages/checkInWithEmail/CheckInWithEmail';
import { CheckInWithQr } from '../pages/checkInWithQr/CheckInWithQr';

export const IdentifyAttendeeRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<InitialOptions />} />
			<Route path='/byEmailOrUserCode' element={<CheckInWithEmail />} />
			<Route path='/checkInWithQrCode' element={<CheckInWithQr />} />
			<Route path='/*' element={<Navigate to={'/'} />} />
		</Routes>
	);
};
