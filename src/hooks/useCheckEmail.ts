import { useState } from 'react';
import { GetAttendeeEmailStatusResponse } from '../common/types/attendee.type';

export const useCheckEmail = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isCheckingEmail, setIsCheckingEmail] = useState(false);
	const [emailStatus, setEmailStatus] = useState<GetAttendeeEmailStatusResponse>({} as GetAttendeeEmailStatusResponse);

	const checkEmail = async (email: string) => {
		try {
		} catch (error) {}
	};

	return { errorMessage, isCheckingEmail, emailStatus, setErrorMessage, checkEmail };
};
