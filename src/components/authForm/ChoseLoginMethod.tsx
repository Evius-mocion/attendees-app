import { AspectRatio, Button, Checkbox, Group, Image, Paper, rem, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { useMyNavigation } from '../../hooks/useMyNavigation';

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
					<MethodItem
						image={'/public/assets/login/Station_Code.svg'}
						label='Token de acceso'
						onClic={() => {
							setMethodSelected('code');
						}}
						isActive={methodSelected === 'code'}
					/>
					<MethodItem
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

const MethodItem = ({
	isActive,
	label,
	onClic,
	image,
}: {
	onClic: () => void;
	isActive: boolean;
	label: string;
	image: string;
}) => {
	return (
		<Paper miw={20} mih={20} style={{ cursor: 'pointer' }} onClick={onClic} shadow='0' withBorder>
			<Group pos={'relative'}>
				<Checkbox checked={isActive} pos={'absolute'} top={5} right={5} />
				<AspectRatio ratio={1} w={{ base: 100, md: 120, xl: 150 }}>
					<Stack justify='center'>
						<Image src={image} />
					</Stack>
				</AspectRatio>
				<Text fw={'500'} fz={'h3'}>
					{label}
				</Text>
			</Group>
		</Paper>
	);
};
