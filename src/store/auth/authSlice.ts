import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSlice, AuthStatus, StationType } from '../types/auth.types';
import { Station } from '../../types/event.type';

const initialState: AuthSlice = {
	station: {} as Station,
	stationType: '' as StationType,
	status: AuthStatus.checking,
	errorMessage: '',
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		onStartAuth: (state /* action */) => {
			state.status = AuthStatus.checking;
			state.errorMessage = '';
		},
		onSetLogin: (state, { payload }: PayloadAction<{ station: Station; stationType: StationType }>) => {
			state.station = payload.station;
			state.stationType = payload.stationType;
			state.status = AuthStatus.authenticated;
			state.errorMessage = '';
		},
		onSetLogout: (state, { payload = '' }: PayloadAction<string | undefined>) => {
			state.station = {} as Station;
			state.stationType = {} as StationType;
			state.status = AuthStatus.notAuthenticated;
			state.errorMessage = payload || '';
		},
		onResetErrorMessage: (state) => {
			state.errorMessage = '';
		},
	},
});

// Action creators are generated for each case reducer function
export const { onSetLogin, onStartAuth, onSetLogout, onResetErrorMessage } = authSlice.actions;
