import { Container, Stack, Text } from '@mantine/core';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';

export const AppHeader = () => {
	const { station, event } = useAuthStationStore();
	return (
		<Container>
			<Stack gap={0}>
				<Text fw={'500'} fz={'h1'} ta={'center'}>
					{station.name}
				</Text>
				<Text fw={'500'} fz={'h3'} ta={'center'} c={'gray'}>
					{event.name}
				</Text>
			</Stack>
		</Container>
	);
};
