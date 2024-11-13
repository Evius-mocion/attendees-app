import { AppShell, Container, Stack } from '@mantine/core';
import { ButtonOptions } from '../ButtonOptions';
import PrivateRoutes from '../../routes/PrivateRoutes';
import { FooterMenu } from '../../components/footerMenu/FooterMenu';
import { AppHeader } from '../../components/header/AppHeader';

const AppPage = () => {
	return (
		<AppShell footer={{ height: 60 }}>
			<AppShell.Main>
				<Container w={'100%'} p={'lg'} pos={'relative'} h={'100vh'}>
					<Stack gap={'xl'} h={'100%'}>
						<AppHeader />
						<PrivateRoutes />
					</Stack>
				</Container>
				{/* <ButtonOptions /> */}
			</AppShell.Main>
			<AppShell.Footer withBorder={false}>
				<Container>
					<FooterMenu />
				</Container>
			</AppShell.Footer>
		</AppShell>
	);
};
export default AppPage;
