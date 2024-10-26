import { Navigate, Route, Routes } from 'react-router-dom';
import { ChoseLoginMethod } from '../components/authForm/ChoseLoginMethod';
import { QrCode } from '../components/authForm/QrCode';
import { CodeInput } from '../components/authForm/CodeInput';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path='choseMethod' element={<ChoseLoginMethod />} />
			<Route path='qr' element={<QrCode />} />
			<Route path='code' element={<CodeInput />} />
			<Route path='/*' element={<Navigate to={'choseMethod'} />} />
		</Routes>
	);
};
