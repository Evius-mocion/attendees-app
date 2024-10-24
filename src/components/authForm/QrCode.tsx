import { Button, Paper, rem, Stack, Text, Title } from '@mantine/core';
import { MyQRScanner } from '../qrScanner/QRScanner';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { useEffect, useState } from 'react';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { useMyNavigation } from '../../hooks/useMyNavigation';

export const QrCode = () => {
	const { errorMessage, onSetResetErrorMessage } = useAuthStationStore();
	const { goToInitialOptions } = useMyNavigation();
	const [qrCodeResult, setQrCodeResult] = useState('');

	const dispatch = useAppDispatch();

	const startAuthorizationByQR = (qrCode: string) => {
		dispatch(startAuth(qrCode));
	};

	useEffect(() => {
		if (qrCodeResult.length > 0) {
			startAuthorizationByQR(qrCodeResult);
			setQrCodeResult('');
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
		<Paper p={'xl'} withBorder={false} shadow='0' mih={400} maw={600}>
			<Stack gap={rem(70)} mih={400}>
				<Title order={1} ta={'center'}>
					¡Leer Qr de estación!
				</Title>
				<Stack gap={'xl'}>
					{qrCodeResult.length === 0 && errorMessage.length === 0 ? (
						<MyQRScanner
							onScan={(result) => {
								if (result) {
									setQrCodeResult(result);
								}
							}}
						/>
					) : (
						loginError()
					)}
				</Stack>
				<Button
					onClick={() => {
						goToInitialOptions();
					}}
				>
					Cancelar
				</Button>
			</Stack>
		</Paper>
	);
};
