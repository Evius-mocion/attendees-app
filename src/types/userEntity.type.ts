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

export type UserGenderType = 'male' | 'female';

export type TypeAccount = 'client' | 'assistant';

export type UserBasicData = Pick<IUser, 'fullName' | 'email' | 'gender'>;
