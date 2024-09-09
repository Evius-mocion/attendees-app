import { Button, Stack } from '@mantine/core';
import { useAuthViewStore } from '../../hooks/useAuthViewStore';
import { MyQRScanner } from '../qrScanner/QRScanner';
import { useAppDispatch } from '../../store/store';
import { startAuth } from '../../store/auth/auth.thunk';
import { AuthView } from '../../store/auth/authViewSlice';

export const QrCode = () => {
	const { setAuthView } = useAuthViewStore();
	const dispatch = useAppDispatch();

	const startAuthorizationByQR = (qrCode: string) => {
		dispatch(startAuth(qrCode));
	};

	return (
		<Stack>
			<MyQRScanner
				onScan={(result) => {
					if (result) {
						startAuthorizationByQR(result);
					}
				}}
			/>
			<Button
				onClick={() => {
					setAuthView(AuthView.initial);
				}}
			>
				Atrás
			</Button>
		</Stack>
	);
};
