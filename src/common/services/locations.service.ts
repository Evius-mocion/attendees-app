import { mocionApi } from '../../api/mocion.api';
import { CountryOption, States, StateOptions, CitiesOptions, PhoneArea } from '../types/locations.type';

export const getAllCountryService = async () => {
	const data = await mocionApi.get<CountryOption[]>('api/location/countries');
	return data;
};
export const getStatesByCountryService = async (countryKeyP: string) => {
	const countryKey = encodeURIComponent(countryKeyP);

	const data = await mocionApi.get<{ states: States[] }>(`api/location/countries/${countryKey}/states`);
	return data;
};

export const getCitiesByStateAndCountryService = async (countryKeyP: string, stateKeyP: string) => {
	const countryKey = encodeURIComponent(countryKeyP);
	const stateKey = encodeURIComponent(stateKeyP);
	console.log('stateKey', stateKey);
	const data = await mocionApi.get<CitiesOptions[]>(`api/location/countries/${countryKey}/states/${stateKey}/cities`);
	return data;
};
export const getCountriesWithPhoneCodeService = async () => {
	const data = await mocionApi.get<PhoneArea[]>(`api/location/countries/phonecodes`);
	return data;
};
/* export const getCitiesByStateAndCountryService = async (countryIso2: string, stateIso2: string) => {
	const data = await countryApi.get<StateOptionsAll[]>(`/countries/${countryIso2}/states/${stateIso2}/cities`);
	return data;
}; */
