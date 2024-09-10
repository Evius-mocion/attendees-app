import { Button, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useCheckEmail } from '../../hooks/useCheckEmail';
import { useRegisterUserStore } from '../../hooks/useRegisterUserStore';
import { RegisterUserView } from '../../store/types/registerUser.type';
import { RegisterFormByEvent } from '../RegisterFormByEvent';
import { DynamicForm } from '../../components/dynamicForm/DynamicForm';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';

export const RegisterUserPage = () => {
	const [email, setEmail] = useState('');
	const { checkEmail, errorMessage, isCheckingEmail, setErrorMessage } = useCheckEmail();
	const { currentView } = useRegisterUserStore();
	const { event } = useAuthStationStore();
	const renderView = () => {
		switch (currentView) {
			case RegisterUserView.initial:
				return (
					<>
						<TextInput
							name='email'
							label='Correo electrónico'
							placeholder='tucorreo@email.com'
							onChange={({ target: { value } }) => {
								setEmail(value);
								setErrorMessage('');
							}}
							error={errorMessage}
						/>
						<Button onClick={() => checkEmail(email)} loading={isCheckingEmail}>
							Siguiente
						</Button>
					</>
				);
			case RegisterUserView.userData:
				return <RegisterFormByEvent />;
			case RegisterUserView.attendeeData:
				return (
					<DynamicForm
						dynamicFields={event.registrationFields || []}
						onSubmit={(datos) => {
							console.log('datos', datos);
						}}
						footer={<Button>Enviar</Button>}
					/>
				);
			default:
				break;
		}
	};

	return (
		<Stack gap={'xl'} w={'80%'}>
			{renderView()}
		</Stack>
	);
};
