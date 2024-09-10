import { Button, Divider, Group, Select, Stack, TextInput } from '@mantine/core';
import { IconAt, IconId } from '@tabler/icons-react';
import { gendersLabel } from '../common/constants/gendersLabel';
import { useAuthStationStore } from '../hooks/useAuthStationStore';
import { useRegisterUserStore } from '../hooks/useRegisterUserStore';
import { isEmail, useForm } from '@mantine/form';
import { UserBasicData, UserGenderType } from '../common/types/userEntity.type';
import { RegisterUserView } from '../store/types/registerUser.type';

export const RegisterFormByEvent = () => {
	const { event } = useAuthStationStore();
	const { resetRegisterProcess, onSetUserData, onSetRegisterView, onRegisterUserIntoEvent, isRegistering, userData } =
		useRegisterUserStore();

	const userForm = useForm<UserBasicData>({
		initialValues: {
			email: userData.email,
			fullName: '',
			gender: '' as UserGenderType,
		},
		validate: {
			email: isEmail('El correo no es valido'),
			fullName(value) {
				if (value.length === 0) {
					return 'El nombre es obligatorio';
				}
			},
			gender(value) {
				if (!value || value.length === 0) {
					return 'El genero es obligatorio';
				}
			},
		},
	});

	return (
		<form
			onSubmit={userForm.onSubmit((values) => {
				if (event.registrationFields && event.registrationFields?.length > 0) {
					onSetUserData(values);
					onSetRegisterView(RegisterUserView.attendeeData);
					return;
				}
				onRegisterUserIntoEvent(values);
			})}
		>
			<Stack>
				<Divider label={'Campos fijos'} />
				<TextInput
					label='Nombre'
					placeholder='Nombre'
					leftSection={<IconId />}
					size='lg'
					withAsterisk
					value={userForm.values.fullName}
					error={userForm.errors.fullName}
					onChange={({ target: { value: fullName } }) => userForm.setFieldValue('fullName', fullName)}
				/>
				<TextInput
				disabled
					label='Correo electrónico'
					placeholder='tucorreo@gmail.com'
					leftSection={<IconAt />}
					size='lg'
					withAsterisk
					value={userForm.values.email}
					error={userForm.errors.email}
					onChange={({ target: { value: email } }) => userForm.setFieldValue('email', email)}
				/>
				<Select
					size='lg'
					required
					label='Género'
					placeholder='Seleccione su género'
					data={gendersLabel}
					clearable
					value={userForm.values.gender}
					error={userForm.errors.gender}
					searchable={false}
					onChange={(gender) => userForm.setFieldValue('gender', (gender ?? 'other') as UserGenderType)}
				/>
				<Group justify='end'>
					<Button
						variant='light'
						onClick={() => {
							resetRegisterProcess();
						}}
					>
						Cancelar
					</Button>
					<Button type='submit' loading={isRegistering}>
						{event.registrationFields && event.registrationFields?.length > 0 ? 'Siguiente' : 'Registrarse'}
					</Button>
				</Group>
			</Stack>
		</form>
	);
};
