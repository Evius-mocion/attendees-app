import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { AuthView } from '../../store/auth/authViewSlice';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';

export const CodeInput = () => {
	const dispatch = useAppDispatch();
	const { setAuthView, inputCode, onSetInputCode } = useAuthViewStore();

	const { errorMessage } = useAuthStationStore();

	const startAuthorizationByCode = (code: string) => {
		dispatch(startAuth(code));
	};

	return (
		<Stack>
			<TextInput
				value={inputCode}
				size='lg'
				label='Código de la estación'
				placeholder='Eje: 18172a10-092d-4b71-bdc1-c3787b86c5c2'
				onChange={({ target: { value } }) => onSetInputCode(value)}
			/>
			<Group justify='end'>
				<Button
					variant='light'
					onClick={() => {
						setAuthView(AuthView.initial);
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
	);
};
