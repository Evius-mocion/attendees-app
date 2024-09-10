export enum RegisterUserView {
	initial = 'initial',
	userData = 'userData',
	attendeeData = 'attendeeData',
}
export type RegisterUserSlice = {
	currentView: RegisterUserView;
};