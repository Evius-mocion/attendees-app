import { Box, Center, Paper, Stack } from '@mantine/core';
import { ButtonOptions } from '../ButtonOptions';
import { useState } from 'react';
import PrivateRoutes from '../../routes/PrivateRoutes';

const AppPage = () => {
	const [action, setAction] = useState(''); //'' | 'email' | 'qr' | 'register' | 'experience'

	return (
		<Box h={'95vh'} w={'100vw'}>
			<Center h={'100%'}>
				<Paper w={{ base: '100%', sm: '70%', md: '35%' }}>
					<Stack gap={'xl'} p={'xl'} justify='center' align='center'>
						<PrivateRoutes />
					</Stack>
				</Paper>
			</Center>
			{/* <ButtonOptions setAction={setAction} /> */}
		</Box>
	);
};
export default AppPage;
