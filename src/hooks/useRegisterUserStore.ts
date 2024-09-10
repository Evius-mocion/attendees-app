import { useAppSelector } from '../store/store';

export const useRegisterUserStore = () => {
	const { currentView } = useAppSelector((store) => store.registerUser);
	return { currentView };
};
