import { Box } from '@mantine/core';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChoseLoginMethod } from '../../components/authForm/ChoseLoginMethod';
import { QrCode } from '../../components/authForm/QrCode';
import { CodeInput } from '../../components/authForm/CodeInput';

const AuthPage = () => {
	return (
		<Box w={'100%'} h={'100vh'} display={'flex'} style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Routes>
				<Route path='choseMethod' element={<ChoseLoginMethod />} />
				<Route path='qr' element={<QrCode />} />
				<Route path='code' element={<CodeInput />} />
				<Route path='/*' element={<Navigate to={'choseMethod'} />} />
			</Routes>
		</Box>
	);
};

export default AuthPage;
