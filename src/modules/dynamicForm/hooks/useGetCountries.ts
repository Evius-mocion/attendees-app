import { CountryOption } from '../types/locations.type';
import countries from '../json/country.json';
export const useGetCountries = () => {
	/* const [countries, setCountries] = useState<CountryOption[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [haveError, setHaveError] = useState(false);

	const fetchCountries = async () => {
		try {
			setIsLoading(true);
			setHaveError(false);

			const { data } = await getAllCountryService();

			setCountries(data);

			setIsLoading(false);
		} catch (error) {
			setHaveError(true);
			setIsLoading(false);
		}
	};

	const getCountryById = async (countryId: string) => {
		const { data } = await getCountryByIdService(countryId);
		return data.country;
	};



	useEffect(() => {
		fetchCountries();
	}, []);

	return { countries, isLoading, haveError, getCountryById, reLoadCountry: fetchCountries }; */
	const countryList = countries as CountryOption[];

	const getCountryByIso = (iso2: string): CountryOption | undefined => {
		return countryList.find((country) => country.iso2 === iso2);
	};

	return { countryList, getCountryByIso };
};
