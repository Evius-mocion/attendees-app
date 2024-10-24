import axios from 'axios';
import { LocalStorageNames } from '../../../data-hub/src/common/types';
import { getEnvVariables } from '../common/helpers/getEnvVariables';
import { getItemInStorage } from '../common/helpers/localStorage';

const { VITE_API_AUTH } = getEnvVariables();
export const authApi = axios.create({
	baseURL: VITE_API_AUTH,
});
authApi.interceptors.request.use((config) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	config.headers = {
		...config.headers,
		Authorization: `Bearer ${getItemInStorage(LocalStorageNames.TOKEN)}`,
	};
	return config;
});
