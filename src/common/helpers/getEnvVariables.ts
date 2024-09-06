export const getEnvVariables = () => {
	return {
		VITE_API_AUTH: import.meta.env.VITE_API_AUTH,
		VITE_API_EVIUS: import.meta.env.VITE_API_EVIUS,
		VITE_API_EMAIL: import.meta.env.VITE_API_EMAIL,
		// ...import.meta.env
	};
};
