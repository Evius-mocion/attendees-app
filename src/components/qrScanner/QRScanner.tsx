import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { Stack } from '@mantine/core';

type Props = {
	onScan: (result: string | undefined) => void;
	width?: number;
	height?: number;
};

export const MyQRScanner = (props: Props) => {
	const { onScan, width = 500, height = 500 } = props;
	const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
	return (
		<Stack gap={0}>
			{/* <Group justify='center'>
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
			</Group> */}
			<QrReader
				videoContainerStyle={{ width, height /* backgroundColor:alpha('#8d1529',1) */ }}
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
