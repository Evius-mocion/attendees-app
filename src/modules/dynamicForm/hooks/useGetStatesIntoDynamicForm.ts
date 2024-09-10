import { useState } from 'react';
import { States } from '../types/locations.type';
import { getStatesByCountryService } from '../../../common/services/locations.service';

export const useGetStatesIntoDynamicForm = () => {
	const [departments, setDepartments] = useState<States[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getStatesByCountry = async (countryKey: string) => {
		try {
			setIsLoading(true);
			const { data } = await getStatesByCountryService(countryKey);

			setDepartments(data.states);

			setIsLoading(false);
			return data.states;
		} catch (error) {
			setIsLoading(false);
		}
	};

	return { getStatesByCountry, departments, isLoading };
};
