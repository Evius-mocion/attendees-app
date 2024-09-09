import { Center, Container, Paper, Stack, Text, Title } from '@mantine/core';
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
					<Stack gap={'xl'} mih={400}>
						<Title order={1} ta={'center'}>
							¡Bienvenido a{' '}
							<Text span inherit fz={'bolder'}>
								Data hub
							</Text>
							!
						</Title>
						{authView === AuthView.initial && <ChoseLoginMethod />}
						{authView === AuthView.qrCode && <QrCode />}
						{authView === AuthView.codeInput && <CodeInput />}
					</Stack>
				</Paper>
			</Center>
		</Container>
	);
};
