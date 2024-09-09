import { Paper, Stack, Text } from '@mantine/core';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { AuthView } from '../../store/auth/authViewSlice';

export const ChoseLoginMethod = () => {
	const { setAuthView } = useAuthViewStore();
	return (
		<Stack>
			<Paper
				shadow='lg'
				miw={20}
				mih={20}
				p={'xl'}
				style={{ cursor: 'pointer' }}
				onClick={() => {
					setAuthView(AuthView.codeInput);
				}}
			>
				<Stack>
					<Text fw={'500'}>Código de acceso</Text>
				</Stack>
			</Paper>
			<Paper
				shadow='lg'
				miw={20}
				mih={20}
				p={'xl'}
				style={{ cursor: 'pointer' }}
				onClick={() => {
					setAuthView(AuthView.qrCode);
				}}
			>
				<Stack>
					<Text fw={'500'}>Leer código QR</Text>
				</Stack>
			</Paper>
		</Stack>
	);
};
