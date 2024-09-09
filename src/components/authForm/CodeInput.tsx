import { Button, Stack, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { AuthView } from '../../store/auth/authViewSlice';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';

export const CodeInput = () => {
	const [code, setCode] = useState('');
	const dispatch = useAppDispatch();
	const { setAuthView } = useAuthViewStore();

	const { errorMessage } = useAuthStationStore();

	const startAuthorizationByCode = (code: string) => {
		dispatch(startAuth(code));
	};

	return (
		<Stack>
			<TextInput
				value={code}
				size='lg'
				label='Código de la estación'
				placeholder='Eje: 18172a10-092d-4b71-bdc1-c3787b86c5c2'
				onChange={({ target: { value } }) => setCode(value)}
			/>
			<Button
				onClick={() => {
					setAuthView(AuthView.initial);
				}}
			>
				Atrás
			</Button>
			<Button
				onClick={() => {
					startAuthorizationByCode(code);
				}}
			>
				Enviar
			</Button>
			{errorMessage && <Text c={'red'}>{errorMessage}</Text>}
		</Stack>
	);
};
