import { Button, Container, Group, Stack, Text } from '@mantine/core';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { MethodCard } from '../../components/cardMethod/MethodCard';
import { useState } from 'react';

enum OptionSelected {
	email = 'email',
	code = 'code',
	qr = 'qr',
	notSelected = 'not-selected',
}

export const InitialOptions = () => {
	const { goToCheckInWithEmail, goToCheckInWithQrCode, goToCheckInWithUserCode } = useMyNavigation();
	const [optionSelected, setOptionSelected] = useState<OptionSelected>(OptionSelected.notSelected);

	const onNext = () => {
		switch (optionSelected) {
			case 'code':
				goToCheckInWithUserCode();
				break;
			case 'qr':
				goToCheckInWithQrCode();
				break;
			case 'email':
				goToCheckInWithEmail();
				break;
		}
	};

	return (
		<Container w={'100%'}>
			<Stack gap={'xl'}>
				<Stack>
					<Text ta={'center'} fz={'lg'} fw={500}>
						Identificación del usuario
					</Text>
					<Stack>
						<MethodCard
							image={'/public/assets/login/email_input.svg'}
							label='Correo o código de acceso'
							isActive={optionSelected === OptionSelected.email}
							onClic={() => {
								setOptionSelected(OptionSelected.email);
							}}
						/>
						{/* <MethodCard
							image={'/public/assets/login/Station_Code.svg'}
							label='Código de acceso'
							isActive={optionSelected === OptionSelected.code}
							onClic={() => {
								setOptionSelected(OptionSelected.code);
							}}
						/> */}
						<MethodCard
							image={'/public/assets/login/Station_QR.svg'}
							label='QR'
							isActive={optionSelected === OptionSelected.qr}
							onClic={() => {
								setOptionSelected(OptionSelected.qr);
							}}
						/>
					</Stack>
				</Stack>
				<Group justify='end'>
					<Button onClick={onNext} disabled={optionSelected === OptionSelected.notSelected}>
						Siguiente
					</Button>
				</Group>
			</Stack>
		</Container>
	);
	/* return (
		<Stack>
			<Title order={1} ta={'center'}>
				Ingreso en {stationType === StationType.event ? 'el evento' : 'la actividad'}
			</Title>
			<Group grow>
				<Paper
					h={{ base: '200', sm: 'auto' }}
					p={'xl'}
					shadow='md'
					className={classes.cursorPointer}
					onClick={() => goToCheckInWithEmail()}
				>
					<Stack gap={0} justify='center' align='center'>
						<IconMail size={iconSizes.xLarge} />
						<Text fz={'lg'} ta='center'>
							Correo
						</Text>
						<Text fz='xs' c='dimmed' ta='center'>
							Ingresa al evento mediante el correo electrónico
						</Text>
					</Stack>
				</Paper>
				<Paper
					h={{ base: '200', sm: 'auto' }}
					p={'xl'}
					shadow='md'
					className={classes.cursorPointer}
					onClick={() => goToCheckInWithQrCode()}
				>
					<Stack gap={0} justify='center' align='center'>
						<IconQrcode size={iconSizes.xLarge} />
						<Text fz={'lg'} ta='center'>
							Código QR
						</Text>
						<Text fz='xs' c='dimmed' ta='center'>
							Ingresa al evento mediante el código QR
						</Text>
					</Stack>
				</Paper>
			</Group>
		</Stack>
	); */
};
