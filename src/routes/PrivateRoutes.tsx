import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckInWithEmail } from '../pages/checkInWithEmail/CheckInWithEmail';
import { InitialOptions } from '../pages/initialOptions/InitialOptions';
import { CheckInWithQr } from '../pages/checkInWithQr/CheckInWithQr';
import { RegisterUserPage } from '../pages/register/RegisterUserPage';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/options' element={<InitialOptions />} />
			<Route path='/options/checkInWithEmail' element={<CheckInWithEmail />} />
			<Route path='/options/checkInWithQrCode' element={<CheckInWithQr />} />
			<Route path='/options/registerUser' element={<RegisterUserPage />} />
			<Route path='/*' element={<Navigate to={'/options'} />} />
		</Routes>
	);
};
export default PrivateRoutes;
