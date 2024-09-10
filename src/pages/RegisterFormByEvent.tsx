import { Button, Divider, Group, Select, Stack, TextInput } from '@mantine/core';
import { IconAt, IconId } from '@tabler/icons-react';
import { gendersLabel } from '../common/constants/gendersLabel';
import { useAuthStationStore } from '../hooks/useAuthStationStore';
import { useRegisterUserStore } from '../hooks/useRegisterUserStore';

export const RegisterFormByEvent = () => {
	const { event } = useAuthStationStore();
	const { resetRegisterProcess } = useRegisterUserStore();
	return (
		<Stack>
			<Divider label={'Campos fijos'} />
			<TextInput label='Nombre' placeholder='Nombre' leftSection={<IconId />} size='lg' withAsterisk />
			<TextInput
				label='Correo electrónico'
				placeholder='tucorreo@gmail.com'
				leftSection={<IconAt />}
				size='lg'
				withAsterisk
			/>
			<Select size='lg' required label='Género' placeholder='Seleccione su género' data={gendersLabel} clearable />
			<Group justify='end'>
				<Button
					variant='light'
					onClick={() => {
						resetRegisterProcess();
					}}
				>
					Cancelar
				</Button>
				<Button>{event.registrationFields ? 'Siguiente' : 'Registrarse'}</Button>
			</Group>
		</Stack>
	);
};
