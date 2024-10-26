import { Box } from '@mantine/core';
import { AuthRoutes } from '../../routes/AuthRoutes';

const AuthPage = () => {
	return (
		<Box w={'100%'} h={'100vh'} display={'flex'} style={{ justifyContent: 'center', alignItems: 'center' }}>
			<AuthRoutes />
		</Box>
	);
};

export default AuthPage;
