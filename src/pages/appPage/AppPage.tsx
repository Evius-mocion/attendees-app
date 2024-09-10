import { Box, Center, Paper, Stack } from '@mantine/core';
import { ButtonOptions } from '../ButtonOptions';
import PrivateRoutes from '../../routes/PrivateRoutes';

const AppPage = () => {
	return (
		<Box h={'95vh'} w={'100vw'}>
			<Center h={'100%'}>
				<Paper w={{ base: '100%', sm: '70%', md: '35%' }}>
					<Stack gap={'xl'} p={'xl'} justify='center' align='center'>
						<PrivateRoutes />
					</Stack>
				</Paper>
			</Center>
			<ButtonOptions />
		</Box>
	);
};
export default AppPage;
