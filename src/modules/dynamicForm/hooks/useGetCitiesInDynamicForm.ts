import { useState } from 'react';
import { CitiesOptions } from '../types/locations.type';
import { getCitiesByStateAndCountryService } from '../../../common/services/locations.service';

export const useGetCitiesInDynamicForm = () => {
	const [cities, setCities] = useState<CitiesOptions[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getCitiesByStateAndCountry = async (countryKey: string, stateKey: string) => {
		try {
			setIsLoading(true);
			const { data } = await getCitiesByStateAndCountryService(countryKey, stateKey);
			setCities(data);
			setIsLoading(false);
			return data;
		} catch (error) {
			setIsLoading(false);
		}
	};

	/* 	const getCitiesByOnlyCountry = async (countryIso2: string) => {
		try {
			setIsLoading(true);
			const { data } = await getCitiesByCountry(countryIso2);
			setCities(data);
			setIsLoading(false);
			return data;
		} catch (error) {
			setIsLoading(false);
		}
	}; */

	return { cities, getCitiesByStateAndCountry, isLoading, /* getCitiesByOnlyCountry,  */ setIsLoading };
};
