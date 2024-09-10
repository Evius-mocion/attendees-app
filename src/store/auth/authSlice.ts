import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSlice, AuthStatus, StationType } from '../types/auth.types';
import { IEvent, Station } from '../../common/types/event.type';

const initialState: AuthSlice = {
	station: {} as Station,
	event: {} as IEvent,
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
		onSetLogin: (state, { payload }: PayloadAction<{ station: Station; stationType: StationType; event: IEvent }>) => {
			state.station = payload.station;
			state.stationType = payload.stationType;
			state.status = AuthStatus.authenticated;
			state.event = payload.event;
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
		onSetEvent: (state, { payload }: PayloadAction<IEvent>) => {
			state.event = payload;
		},
		onSetUpdateEvent: (state, { payload }: PayloadAction<Partial<IEvent>>) => {
			state.event = { ...state.event, ...payload };
		},
	},
});

// Action creators are generated for each case reducer function
export const { onSetLogin, onStartAuth, onSetLogout, onResetErrorMessage, onSetEvent, onSetUpdateEvent } =
	authSlice.actions;
