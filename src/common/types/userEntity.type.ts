export type IUser = {
	id: string;
	fullName: string;
	email: string;
	avatar?: string;
	gender: UserGenderType;
	phoneNumber?: string;
	birthDate?: string;
	residenceCountry?: string;
	type_account: TypeAccount;
};

export type TypeAccount = 'client' | 'attendee';
export type UserGenderType = 'male' | 'female' | 'other';

export type UserBasicData = Pick<IUser, 'fullName' | 'email' | 'gender'>;
