import { lazy, Suspense, useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { useCheckAuthStation } from '../hooks/useCheckAuthStation';
import { AuthStatus } from '../store/types/auth.types';
import { useAuthStationStore } from '../hooks/useAuthStationStore';

const LazyAuthPage = lazy(() => import('../pages/authPage/AuthPage'));
const LazyAppPage = lazy(() => import('../pages/appPage/AppPage.tsx'));

export const AppRoutes = () => {
	useCheckAuthStation();
	const { status } = useAuthStationStore();

	const RenderRoutes = useMemo(() => {
		console.log('status', status)
		if (status == AuthStatus.notAuthenticated) {
			return (
				<>
					<Route path='/identifyStation/*' element={<LazyAuthPage />} />
					<Route path='/*' element={<Navigate to={'identifyStation'} />} />
				</>
			);
		} else {
			return <Route path='/*' element={<LazyAppPage />} />;
		}
	}, [status]);

	if (status === AuthStatus.checking) {
		return (
			<Center h={'100vh'}>
				<Loader size={'xl'} />
			</Center>
		);
	}

	return (
		<Suspense
			fallback={
				<Center h={'100vh'}>
					<Loader size={'xl'} />
				</Center>
			}
		>
			<Routes>{RenderRoutes}</Routes>
		</Suspense>
	);
};
