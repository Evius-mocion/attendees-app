import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import { MyQRScanner } from '../../components/qrScanner/QRScanner';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { useCheckUserService } from '../../hooks/useCheckUserService';

export const CheckInWithQr = () => {
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	const { handleCheckInUser, errorMessage, resetError } = useCheckUserService();

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
