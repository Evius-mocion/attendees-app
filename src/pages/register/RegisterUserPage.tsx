import { Button, Container, Group, Stack, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { RegisterUserView } from '../../store/types/registerUser.type';
import { RegisterFormByEvent } from '../RegisterFormByEvent';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { DynamicForm } from '../../modules/dynamicForm/components/DynamicForm.tsx';
import { useRegisterUserStore } from '../../hooks/useRegisterUserStore.ts';
import { useCheckEmail } from '../../hooks/useCheckEmail.ts';
import { useMyNavigation } from '../../hooks/useMyNavigation.ts';

export const RegisterUserPage = () => {
	const [email, setEmail] = useState('');
	const { checkEmail, errorMessage, isCheckingEmail, setErrorMessage } = useCheckEmail();
	const { currentView, handledClearRegisterPage, userData, onRegisterUserIntoEvent } = useRegisterUserStore();
	const { goToInitialOptions } = useMyNavigation();
	const { event } = useAuthStationStore();

	const renderView = () => {
		switch (currentView) {
			case RegisterUserView.initial:
				return (
					<>
						<TextInput
							size='lg'
							name='email'
							label='Correo electrónico'
							placeholder='tucorreo@email.com'
							onChange={({ target: { value } }) => {
								setEmail(value);
								setErrorMessage('');
							}}
							error={errorMessage}
						/>
						<Group justify='end'>
							<Button
								size='lg'
								variant='light'
								onClick={() => {
									goToInitialOptions();
								}}
							>
								Atrás
							</Button>
							<Button size='lg' onClick={() => checkEmail(email)} loading={isCheckingEmail}>
								Siguiente
							</Button>
						</Group>
					</>
				);
			case RegisterUserView.userData:
				return <RegisterFormByEvent />;
			case RegisterUserView.attendeeData:
				return (
					<DynamicForm
						dynamicFields={event.registrationFields || []}
						onSubmit={(datos) => {
							onRegisterUserIntoEvent({ ...userData, ...datos });
						}}
						footer={<Button type='submit'>Enviar</Button>}
					/>
				);
			default:
				break;
		}
	};

	useEffect(() => {
		return () => {
			handledClearRegisterPage();
		};
	}, []);

	return (
		<Container style={{ width: '100%', height: '100%' }}>
			<Stack gap='xl' style={{ height: '100%' }} justify='center'>
				{renderView()}
			</Stack>
		</Container>
	);
};
