import { AppShell, Box, Container, Stack } from '@mantine/core';
import PrivateRoutes from '../../routes/PrivateRoutes';
import { FooterMenu } from '../../components/footerMenu/FooterMenu';
import { AppHeader } from '../../components/header/AppHeader';

const AppPage = () => {
	return (
		<AppShell>
			<AppShell.Main>
				<Container w={'100%'} p={'lg'} pos={'relative'} h={'100vh'}>
					<Stack gap={'xl'} h={'90vh'}>
						<AppHeader />
						<PrivateRoutes />
					</Stack>
					<Box h={'10vh'} pos={'absolute'} w={'100%'} bottom={0}>
						<FooterMenu />
					</Box>
				</Container>
				{/* <ButtonOptions /> */}
			</AppShell.Main>
		</AppShell>
	);
};
export default AppPage;
