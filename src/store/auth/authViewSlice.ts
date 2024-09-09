import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthViewSlice = {
	authView: AuthView;
};

export enum AuthView {
	codeInput = 'code-input',
	qrCode = 'qr-code',
	initial = 'initial',
}

const initialState: AuthViewSlice = {
	authView: AuthView.initial,
};
export const authViewSlice = createSlice({
	name: 'authView',
	initialState,
	reducers: {
		setCurrentAuthView: (state, { payload }: PayloadAction<AuthView>) => {
			state.authView = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentAuthView } = authViewSlice.actions;
