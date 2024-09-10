import { Group, Paper, Stack, Text, Title } from '@mantine/core';
import classes from '../../common/styles/general.module.css';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { IconMail, IconQrcode } from '@tabler/icons-react';
import { iconSizes } from '../../common/styles/styleConstant';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { StationType } from '../../store/types/auth.types';

export const InitialOptions = () => {
	const { goToCheckInWithEmail, goToCheckInWithQrCode } = useAppNavigate();
	const { stationType } = useAuthStationStore();
	return (
		<Stack>
			<Title order={1} ta={'center'}>
				Ingreso en {stationType === StationType.event ? 'el evento' : 'la actividad'}
			</Title>
			<Group grow>
				<Paper
					h={{ base: '200', sm: 'auto' }}
					p={'xl'}
					shadow='md'
					className={classes.cursorPointer}
					onClick={() => goToCheckInWithEmail()}
				>
					<Stack gap={0} justify='center' align='center'>
						<IconMail size={iconSizes.xLarge} />
						<Text fz={'lg'} ta='center'>
							Correo
						</Text>
						<Text fz='xs' c='dimmed' ta='center'>
							Ingresa al evento mediante el correo electrónico
						</Text>
					</Stack>
				</Paper>
				<Paper
					h={{ base: '200', sm: 'auto' }}
					p={'xl'}
					shadow='md'
					className={classes.cursorPointer}
					onClick={() => goToCheckInWithQrCode()}
				>
					<Stack gap={0} justify='center' align='center'>
						<IconQrcode size={iconSizes.xLarge} />
						<Text fz={'lg'} ta='center'>
							Código QR
						</Text>
						<Text fz='xs' c='dimmed' ta='center'>
							Ingresa al evento mediante el código QR
						</Text>
					</Stack>
				</Paper>
			</Group>
		</Stack>
	);
};
