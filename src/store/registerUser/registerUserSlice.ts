import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserSlice, RegisterUserView } from '../types/registerUser.type';

const initialState: RegisterUserSlice = {
	currentView: RegisterUserView.initial,
};
export const registerUserSlice = createSlice({
	name: 'registerUser',
	initialState,
	reducers: {
		setRegisterUserView: (state, { payload }: PayloadAction<RegisterUserView>) => {
			state.currentView = payload;
		},
	},
});

export const { setRegisterUserView } = registerUserSlice.actions;
