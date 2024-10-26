import { AppShell, Container } from '@mantine/core';
import { ButtonOptions } from '../ButtonOptions';
import PrivateRoutes from '../../routes/PrivateRoutes';
import { FooterMenu } from '../../components/footerMenu/FooterMenu';
import { AppHeader } from '../../components/header/AppHeader';

const AppPage = () => {
	return (
		<AppShell footer={{ height: '80' }} header={{ height: 100 }}>
			<AppShell.Header withBorder={false}>
				<AppHeader />
			</AppShell.Header>
			<AppShell.Main>
				<Container w={'100%'} p={'lg'} pos={'relative'}>
					<PrivateRoutes />
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
