import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMyNavigation } from '../../hooks/useMyNavigation';

type EmailOrUserCodeForm = {
	termOfSearch: string;
};

export const CheckInWithEmail = () => {
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();

	const valueForm = useForm<EmailOrUserCodeForm>({
		initialValues: {
			termOfSearch: '',
		},
	});

	return (
		<Stack gap={'xl'} justify='center' flex={1}>
			<form
				onSubmit={valueForm.onSubmit(({ termOfSearch }) => {
					console.log('termOfSearch', termOfSearch);
				})}
			>
				<Stack>
					<TextInput
						label='Correo electrónico o código '
						placeholder='Ingrese el correo o el código'
						size='lg'
						withAsterisk
						onChange={({ target: { value } }) => valueForm.setFieldValue('termOfSearch', value)}
						error={valueForm.errors.termOfSearch}
					/>
					<Group justify='end'>
						<Button size='lg' onClick={goToInitialOptions} variant='subtle'>
							Volver
						</Button>
						<Button size='lg' type='submit'>
							Continuar
						</Button>
					</Group>
				</Stack>
			</form>
		</Stack>
	);
};
