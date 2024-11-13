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
			case OptionSelected.code:
				goToCheckInWithUserCode();
				break;
			case OptionSelected.qr:
				goToCheckInWithQrCode();
				break;
			case OptionSelected.email:
				goToCheckInWithEmail();
				break;
		}
	};

	return (
		<Container style={{ width: '100%', height: '100%' }}>
			<Stack gap='xl' style={{ height: '100%' }} justify='center'>
				<Stack gap='md'>
					<Text ta='center' size='lg' fw={500}>
						Identificación del usuario
					</Text>
					<Stack gap='sm'>
						<MethodCard
							image='/public/assets/login/email_input.svg'
							label='Correo o código de acceso'
							isActive={optionSelected === OptionSelected.email}
							onClic={() => setOptionSelected(OptionSelected.email)}
						/>
						<MethodCard
							image='/public/assets/login/Station_QR.svg'
							label='QR'
							isActive={optionSelected === OptionSelected.qr}
							onClic={() => setOptionSelected(OptionSelected.qr)}
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
};
