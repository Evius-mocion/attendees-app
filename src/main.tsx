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
import { ModalsProvider } from '@mantine/modals';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { FeedbackOfModal } from './components/feedbackOfModal/FeedbackOfModal';
import './config/dayjs';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<MantineProvider theme={theme} defaultColorScheme='light' forceColorScheme='light'>
				<ModalsProvider modals={{ feedbackOfModal: FeedbackOfModal }}>
					<Notifications position='bottom-right' zIndex={1000} limit={10} />
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</ModalsProvider>
			</MantineProvider>
		</Provider>
	</StrictMode>
);
