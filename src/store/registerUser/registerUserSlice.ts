import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserSlice, RegisterUserView } from '../types/registerUser.type';
import { UserBasicData } from '../../common/types/userEntity.type';

const initialState: RegisterUserSlice = {
	currentView: RegisterUserView.initial,
	userData: {} as UserBasicData,
	isRegistering: false,
};
export const registerUserSlice = createSlice({
	name: 'registerUser',
	initialState,
	reducers: {
		setRegisterUserView: (state, { payload }: PayloadAction<RegisterUserView>) => {
			state.currentView = payload;
		},
		setUserData: (state, { payload }: PayloadAction<UserBasicData>) => {
			state.userData = payload;
		},
		setIsRegistering: (state, { payload }: PayloadAction<boolean>) => {
			state.isRegistering = payload;
		},
	},
});

export const { setRegisterUserView, setUserData, setIsRegistering } = registerUserSlice.actions;
