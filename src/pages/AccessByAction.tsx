import { Group, Paper, Stack, Text } from '@mantine/core';
import { IconMail, IconQrcode } from '@tabler/icons-react';
import { iconSizes } from '../common/styles/styleConstant';
import classes from '../common/styles/general.module.css';

interface Props {
	setAction: (action: string) => void;
}

export const AccessByAction = (props: Props) => {
	const { setAction } = props;

	return (
		<Group grow>
			<Paper
				h={{ base: '200', sm: 'auto' }}
				p={'xl'}
				shadow='md'
				className={classes.cursorPointer}
				onClick={() => setAction('email')}
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
				onClick={() => setAction('qr')}
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
	);
};
