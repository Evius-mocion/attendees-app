import { Box, Center, Paper, Stack, Title } from '@mantine/core';
import { EventCheckin } from '../EventCheckin';
import { ButtonOptions } from '../ButtonOptions';
import { TitleAction } from '../TitleAction';
import { useState } from 'react';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { StationType } from '../../store/types/auth.types';
import { InitialOptions } from '../initialOptions/InitialOptions';
import PrivateRoutes from '../../routes/PrivateRoutes';

const AppPage = () => {
	const [action, setAction] = useState(''); //'' | 'email' | 'qr' | 'register' | 'experience'
	const actionError = true;
	const [additionalFields, setAdditionalFields] = useState(false);
	const { stationType } = useAuthStationStore();
	
	return (
		<Box h={'95vh'} w={'100vw'}>
			<Center h={'100%'}>
				<Paper w={{ base: '100%', sm: '70%', md: '35%' }}>
					<Stack gap={'xl'} p={'xl'} justify='center' align='center'>
						<PrivateRoutes />
					</Stack>
				</Paper>
			</Center>
			<ButtonOptions setAction={setAction} />
		</Box>
	);
};
export default AppPage;
