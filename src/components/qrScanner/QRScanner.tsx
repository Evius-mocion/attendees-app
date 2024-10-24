import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { ActionIcon, Group, Stack, Tooltip } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
type Props = {
	onScan: (resul: string | undefined) => void;
};
export const MyQRScanner = (props: Props) => {
	const { onScan } = props;
	const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
	return (
		<Stack gap={0} w={'100%'} h={'100%'}>
			<Group justify='center'>
				<Tooltip
					withinPortal={false}
					label={facingMode === 'user' ? 'Cambiar a frontal' : 'Cambiar a lateral'}
					transitionProps={{ transition: 'fade-right', duration: 300 }}
					offset={5}
					openDelay={500}
				>
					<ActionIcon
						bg={facingMode === 'user' ? 'white' : 'dark.8'}
						c={facingMode === 'user' ? 'dark.8' : 'white'}
						variant='subtle'
						size={'lg'}
						onClick={() => {
							if (facingMode === 'environment') return setFacingMode('user');
							setFacingMode('environment');
						}}
					>
						{facingMode == 'user' ? <IconSun size={20} /> : <IconMoonStars size={20} />}
					</ActionIcon>
				</Tooltip>
			</Group>
			<QrReader
				scanDelay={1000}
				constraints={{ facingMode }}
				onResult={(result, error) => {
					const resultString = result?.getText();
					onScan(resultString);
				}}
			/>
		</Stack>
	);
};
