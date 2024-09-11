import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { MyQRScanner } from '../../components/qrScanner/QRScanner';
import { checkInUserWithEmailService } from '../../common/services/attendee.service';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { showFeedbackOfModal } from '../../common/helpers/showEviusFeedback';
import { TypeFeedback } from '../../common/types/eviusFeedback.type';

export const CheckInWithQr = () => {
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	const [errorMessage, setErrorMessage] = useState('');

	const handleCheckInUser = async (email: string) => {
		try {
			const result = await checkInUserWithEmailService(email);
			showFeedbackOfModal({
				type: TypeFeedback.success,
				title: 'Check In con éxito',
				message: `El correo ${email} fue marcado como asistido correctamente`,
			});
		} catch (error) {
			showFeedbackOfModal({
				type: TypeFeedback.error,
				title: 'Check In fallido',
				message: `El correo ${email}No pudo ser marcado como asistido`,
			});
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
