import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppPage } from './pages/AppPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<MantineProvider theme={theme} defaultColorScheme='light'>
				<AppPage />
			</MantineProvider>
		</Provider>
	</StrictMode>
);
