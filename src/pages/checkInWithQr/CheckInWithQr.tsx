import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import { MyQRScanner } from '../../components/qrScanner/QRScanner';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { useCheckInUserService } from '../../hooks/useCheckInUserService';

export const CheckInWithQr = () => {
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	const { handleCheckInUser, errorMessage, resetError } = useCheckInUserService();

	return (
		<Stack>
			<Text fz={'lg'} fw={500} ta={'center'}>
				Código QR
			</Text>
			<Group justify='center'>
				<MyQRScanner
					onScan={(qrCode) => {
						if (qrCode) {
							handleCheckInUser(qrCode);
						}
					}}
				/>
			</Group>
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
					Atrás
				</Button>
			</Group>
		</Stack>
	);
};
