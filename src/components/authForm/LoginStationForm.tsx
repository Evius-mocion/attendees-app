import { Box, Center, Container, Paper, rem, Stack, Title } from '@mantine/core';
import { paperSimpleFormShadow } from '../../common/styles/styleConstant';
import { CodeInput } from './CodeInput';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { AuthView } from '../../store/auth/authViewSlice';
import { QrCode } from './QrCode';
import { ChoseLoginMethod } from './ChoseLoginMethod';

export const LoginStationForm = () => {
	const { authView } = useAuthViewStore();

	return (
		<Container h={'100vh'}>
			<Center h={'100%'}>
				<Paper {...paperSimpleFormShadow} mih={400}>
					<Stack gap={rem(100)} mih={400}>
						<Title order={1} ta={'center'}>
							¡Bienvenido al App de asistentes!
						</Title>
						<Box>
							{authView === AuthView.initial && <ChoseLoginMethod />}
							{authView === AuthView.qrCode && <QrCode />}
							{authView === AuthView.codeInput && <CodeInput />}
						</Box>
					</Stack>
				</Paper>
			</Center>
		</Container>
	);
};
