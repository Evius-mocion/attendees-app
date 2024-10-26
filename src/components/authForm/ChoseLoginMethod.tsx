import { Button, Paper, rem, Stack, Title } from '@mantine/core';
import { useState } from 'react';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { MethodCard } from '../cardMethod/MethodCard';

export const ChoseLoginMethod = () => {
	const [methodSelected, setMethodSelected] = useState<'code' | 'qr' | ''>('');
	const { goToIdentifyStationFromCode, goToIdentifyStationFromQr } = useMyNavigation();

	const onNext = () => {
		methodSelected === 'code' ? goToIdentifyStationFromCode() : goToIdentifyStationFromQr();
	};

	return (
		<Paper p={'xl'} withBorder={false} shadow='0' mih={400} maw={600}>
			<Stack gap={rem(70)} mih={400}>
				<Title order={1} ta={'center'}>
					¡Bienvenido al App de asistentes!
				</Title>
				<Stack gap={'xl'}>
					<MethodCard
						image={'/public/assets/login/Station_Code.svg'}
						label='Token de acceso'
						onClic={() => {
							setMethodSelected('code');
						}}
						isActive={methodSelected === 'code'}
					/>
					<MethodCard
						image='/public/assets/login/Station_QR.svg'
						label='Leer código QR'
						onClic={() => {
							setMethodSelected('qr');
						}}
						isActive={methodSelected === 'qr'}
					/>
				</Stack>
				<Button onClick={onNext}>Siguiente</Button>
			</Stack>
		</Paper>
	);
};
