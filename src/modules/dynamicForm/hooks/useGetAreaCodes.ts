import { useEffect, useState, useCallback } from 'react';
import { PhoneArea } from '../types/locations.type';
import { getCountriesWithPhoneCodeService } from '../../../common/services/locations.service';

export const useGetAreaCodes = () => {
	const [phoneAreas, setPhoneAreas] = useState<PhoneArea[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);
	const [filteredCountry, setFilteredCountry] = useState<PhoneArea[]>([]);

	const fetchAreaCodes = useCallback(async () => {
		try {
			setIsLoading(true);
			const { data } = await getCountriesWithPhoneCodeService();
			setPhoneAreas(data);
		} catch (error) {
			console.error('Error fetching area codes:', error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchAreaCodes();
	}, [fetchAreaCodes]);

	useEffect(() => {
		if (!searchValue) {
			setFilteredCountry([]);
		} else {
			setFilteredCountry(phoneAreas.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase())));
		}
	}, [searchValue, phoneAreas]);

	return { phoneAreas, setSearchValue, searchValue, isLoading, filteredCountry };
};
