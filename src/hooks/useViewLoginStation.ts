import { useState } from 'react';

export const useViewLoginStation = () => {
	const [methodToAuth, setMethodToAuth] = useState<'qr' | 'code'>();
	return { methodToAuth, setMethodToAuth };
};
