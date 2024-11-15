import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { useCheckInUserService } from '../../hooks/useCheckInUserService';
import { useState } from 'react';

type EmailOrUserCodeForm = {
	termOfSearch: string;
};

export const CheckInWithEmail = () => {
	const { goToInitialOptions } = useMyNavigation();
	const { identifyAttendee } = useCheckInUserService();
	const [isSearching, setIsSearching] = useState(false);

	const valueForm = useForm<EmailOrUserCodeForm>({
		initialValues: {
			termOfSearch: '',
		},
		validate: {
			termOfSearch(value, values, path) {
				if (!value || value.length === 0) {
					return 'Debe ingresar un termino de busqueda';
				}
			},
		},
	});

	return (
		<Stack gap={'xl'} justify='center' flex={1}>
			<form
				onSubmit={valueForm.onSubmit(async ({ termOfSearch }) => {
					setIsSearching(true);
					await identifyAttendee(termOfSearch);
					setIsSearching(false);
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
							Atrás
						</Button>
						<Button size='lg' type='submit' loading={isSearching}>
							Continuar
						</Button>
					</Group>
				</Stack>
			</form>
		</Stack>
	);
};
