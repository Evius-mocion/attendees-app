import { Button, Group, Paper, Stack, Text, TextInput } from '@mantine/core';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { useMyNavigation } from '../../hooks/useMyNavigation';

export const CodeInput = () => {
	const dispatch = useAppDispatch();
	const { inputCode, onSetInputCode } = useAuthViewStore();
	const { goToLoginOptions } = useMyNavigation();
	const { errorMessage } = useAuthStationStore();

	const startAuthorizationByCode = (code: string) => {
		dispatch(startAuth(code));
	};

	return (
		<Paper p={'xl'} withBorder={false} shadow='0'>
			<Stack gap={'xl'} w={{ base: 500 }}>
				<TextInput
					value={inputCode}
					size='lg'
					label='Token de la estación'
					placeholder='Ingrese el token de inicio'
					onChange={({ target: { value } }) => onSetInputCode(value)}
				/>
				<Stack gap={0}>
					<Group justify='end'>
						<Button
							variant='light'
							onClick={() => {
								goToLoginOptions();
							}}
						>
							Atrás
						</Button>
						<Button
							onClick={() => {
								startAuthorizationByCode(inputCode);
							}}
						>
							Enviar
						</Button>
					</Group>
					{errorMessage && <Text c={'red'}>{errorMessage}</Text>}
				</Stack>
			</Stack>
		</Paper>
	);
};
