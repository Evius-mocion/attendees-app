import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { MyQRScanner } from '../../components/qrScanner/QRScanner';
import { checkInUserWithEmailService } from '../../common/services/attendee.service';

export const CheckInWithQr = () => {
	const { goToRegisterUser, goToInitialOptions } = useAppNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const handleCheckInUser = async (email: string) => {
		try {
			const result = await checkInUserWithEmailService(email);
		} catch (error) {
			setErrorMessage('');
		}
	};

	return (
		<Stack w={'80%'}>
			<Text fz={'lg'} fw={500}>
				Código QR
			</Text>
			<MyQRScanner
				onScan={(qrCode) => {
					if (qrCode) {
						handleCheckInUser(qrCode);
					}
				}}
			/>
			{errorMessage && (
				<Text ta='center' c={'red'}>
					No se encuentra registrado,{' '}
					<Anchor onClick={goToRegisterUser} underline='always'>
						Haz clic aquí para registrarte
					</Anchor>
				</Text>
			)}
			<Group justify='end' w={'80%'}>
				<Button size='lg' onClick={goToInitialOptions} variant='subtle'>
					Volver
				</Button>
			</Group>
		</Stack>
	);
};
