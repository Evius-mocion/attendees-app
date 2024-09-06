import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<MantineProvider
				theme={theme}
				defaultColorScheme='light'
				forceColorScheme='light'
			>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</MantineProvider>
		</Provider>
	</StrictMode>
);
