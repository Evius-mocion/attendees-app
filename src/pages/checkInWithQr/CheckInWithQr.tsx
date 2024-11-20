import { Button, Group, Stack, Text } from '@mantine/core';
import { MyQRScanner } from '../../components/qrScanner/QRScanner';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { useCheckInUserService } from '../../hooks/useCheckInUserService';
import { useEffect, useState } from 'react';

export const CheckInWithQr = () => {
	const { goToInitialOptions } = useMyNavigation();
	const { identifyAttendee } = useCheckInUserService();
	const [qrCode, setQrCode] = useState('');

	useEffect(() => {
		if (qrCode) {
			identifyAttendee(qrCode);
		}
	}, [qrCode]);

	return (
		<Stack>
			<Text fz={'lg'} fw={500} ta={'center'}>
				Código QR
			</Text>
			<Group justify='center'>
				<MyQRScanner
					onScan={(qrCodeAux) => {
						if (qrCodeAux && !qrCode) {
							setQrCode(qrCodeAux);
						}
					}}
				/>
			</Group>

			<Group justify='end' w={'80%'}>
				<Button size='lg' onClick={goToInitialOptions} variant='subtle'>
					Atrás
				</Button>
			</Group>
		</Stack>
	);
};
