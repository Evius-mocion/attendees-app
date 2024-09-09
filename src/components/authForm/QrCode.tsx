import { Button, Stack, Text } from '@mantine/core';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { MyQRScanner } from '../qrScanner/QRScanner';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { AuthView } from '../../store/auth/authViewSlice';
import { useEffect, useState } from 'react';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';

export const QrCode = () => {
	const { setAuthView } = useAuthViewStore();
	const { errorMessage, onSetResetErrorMessage } = useAuthStationStore();

	const [qrCodeResult, setRrCodeResult] = useState('');

	const dispatch = useAppDispatch();

	const startAuthorizationByQR = (qrCode: string) => {
		dispatch(startAuth(qrCode));
	};

	useEffect(() => {
		if (qrCodeResult.length > 0) {
			startAuthorizationByQR(qrCodeResult);
			setRrCodeResult('');
		}
	}, [qrCodeResult]);

	const loginError = () => {
		return (
			<Stack>
				<Button onClick={() => onSetResetErrorMessage()}>Volver a leer</Button>
				{errorMessage && <Text c={'red'}>{errorMessage}</Text>}
			</Stack>
		);
	};

	return (
		<Stack>
			{qrCodeResult.length === 0 && errorMessage.length === 0 ? (
				<MyQRScanner
					onScan={(result) => {
						if (result) {
							setRrCodeResult(result);
						}
					}}
				/>
			) : (
				loginError()
			)}
			<Button
				onClick={() => {
					setAuthView(AuthView.initial);
				}}
			>
				Atrás
			</Button>
		</Stack>
	);
};
