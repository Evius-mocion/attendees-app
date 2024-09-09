import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthViewSlice = {
	authView: AuthView;
	inputCode: string;
};

export enum AuthView {
	codeInput = 'code-input',
	qrCode = 'qr-code',
	initial = 'initial',
}

const initialState: AuthViewSlice = {
	authView: AuthView.initial,
	inputCode: '',
};
export const authViewSlice = createSlice({
	name: 'authView',
	initialState,
	reducers: {
		setCurrentAuthView: (state, { payload }: PayloadAction<AuthView>) => {
			state.authView = payload;
		},
		setInputCode: (state, { payload }: PayloadAction<string>) => {
			state.inputCode = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentAuthView, setInputCode } = authViewSlice.actions;
