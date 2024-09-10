import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appSlice } from './app/slices/appSlice';
import { authSlice } from './auth/authSlice';
import { authViewSlice } from './auth/authViewSlice';
import { registerUserSlice } from './registerUser/registerUserSlice';

export const store = configureStore({
	reducer: {
		name: appSlice.reducer,
		auth: authSlice.reducer,
		authView: authViewSlice.reducer,
		registerUser: registerUserSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
