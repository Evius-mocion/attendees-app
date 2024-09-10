import { Anchor, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { IconAt } from '@tabler/icons-react';
import { useMyNavigation } from '../../hooks/useMyNavigation';


type EmailForm = {
	email: string;
};

export const CheckInWithEmail = () => {
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	const emailForm = useForm<EmailForm>({
		initialValues: {
			email: '',
		},
		validate: {
			email: isEmail('El correo no es valido'),
		},
	});

	return (
		<Stack gap={'xl'} w={'80%'}>
			<TextInput
				label='Correo electrónico'
				placeholder='tucorreo@gmail.com'
				leftSection={<IconAt />}
				size='lg'
				withAsterisk
				error={
					emailForm.errors.email && (
						<Text ta='center'>
							No se encuentra registrado,{' '}
							<Anchor onClick={goToRegisterUser} underline='always'>
								Haz clic aquí para registrarte
							</Anchor>
						</Text>
					)
				}
			/>
			<Group justify='end' w={'80%'}>
				<Button size='lg' onClick={goToInitialOptions} variant='subtle'>
					Volver
				</Button>
				<Button size='lg' type='submit'>
					Ingresar
				</Button>
			</Group>
			{/* <Group justify='end'>
        <Button size='lg' onClick={()=> setAction('')} variant='subtle'>Volver</Button>
        <Button size='lg' onClick={()=> setAction('')} disabled={actionError}>Ingresar</Button>
    </Group> */}
		</Stack>
	);
};
