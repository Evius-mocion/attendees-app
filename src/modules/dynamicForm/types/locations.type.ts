export interface CountryOption {
	id: string;
	name: string;
	iso2: string;
	iso3: string;
	phonecode: string;
	capital: string;
	currency: string;
	native: string;
	emoji: string;
}

export interface States {
	id: number;
	name: string;
	iso2: string;
}

export interface StateOptions {
	id: number;
	name: string;
	country_id: number;
	country_code: string;
	iso2: string;
	type: null;
	latitude: string;
	longitude: string;
}

export interface CitiesOptions {
	id: number;
	name: string;
}

export type PhoneArea = {
	id: string;
	name: string;
	phonecode: string;
	flagPng: string;
	flagSvg: string;
};
