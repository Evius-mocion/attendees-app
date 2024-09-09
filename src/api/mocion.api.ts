import axios from 'axios';
import { getEnvVariables } from '../common/helpers/getEnvVariables';
import { getItemInStorage } from '../common/helpers/localStorage';
import { LocalStorageNames } from '../../../data-hub/src/common/types';

const { VITE_API_EVIUS } = getEnvVariables();
export const mocionApi = axios.create({
	baseURL: VITE_API_EVIUS,
});
mocionApi.interceptors.request.use((config) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	config.headers = {
		...config.headers,
		// Authorization: `Bearer ${getItemInStorage(LocalStorageNames.TOKEN)}`,
	};
	return config;
});
