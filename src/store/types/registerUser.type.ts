import { UserBasicData } from '../../common/types/userEntity.type';

export enum RegisterUserView {
	initial = 'initial',
	userData = 'userData',
	attendeeData = 'attendeeData',
}
export type RegisterUserSlice = {
	currentView: RegisterUserView;
	userData: UserBasicData;
	isRegistering: boolean;
};
