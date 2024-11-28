import { em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useGetDevice = () => {
	const MOBILE_DEVICE = 650;
	const TABLE_DEVICE = 1050;
	const isMobile = useMediaQuery(`(max-width: ${em(MOBILE_DEVICE)})`);
	const TabletMAx = useMediaQuery(`(max-width: ${em(TABLE_DEVICE)}`);
	const TabletMin = useMediaQuery(`(min-width: ${em(MOBILE_DEVICE + 1)})`);
	const isTablet = TabletMAx && TabletMin;
	return { isMobile, isTablet };
};
