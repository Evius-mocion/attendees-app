import { Avatar, Badge, Button, Group, Paper, Stack, Tabs, Text, useMantineTheme } from '@mantine/core';
import { useAttendeeOptions } from '../../hooks/useAttendeeOptions';
import { useMyParams } from '../../hooks/useMyParams';
import styles from './attendeeOptions.module.css';
export const AttendeeOptions = () => {
	const { attendeeId } = useMyParams();
	const { attendee, isLoading } = useAttendeeOptions(attendeeId ?? '');
	const theme = useMantineTheme();
	return (
		<Stack align='center'>
			<Paper p={'xl'} className={styles.paper}>
				<Stack>
					<Group gap={'xl'}>
						<Group>
							<Stack>
								<Avatar size={100} name={attendee?.fullName} color='initials' src={attendee?.avatar} />
							</Stack>
							<Stack gap={0}>
								<Text fw={500}>{attendee?.fullName}</Text>
								<Text fw={500} c={'gray'}>
									{attendee?.email}
								</Text>
							</Stack>
						</Group>
						<Badge color='gray'>Not Check In</Badge>
					</Group>
					<Group>
						<Button fullWidth>Marcar Check In</Button>
					</Group>
				</Stack>
			</Paper>

			{/* <Tabs variant="unstyled" styles={{ list: { padding: 4, backgroundColor: theme.colors.gray[1] } }} defaultValue='participations'>
				<Tabs.List>
					<Tabs.Tab value='participations'>Participaciones</Tabs.Tab>
					<Tabs.Tab value='journey'>Journey</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value='gallery'>Gallery tab content</Tabs.Panel>

				<Tabs.Panel value='messages'>Messages tab content</Tabs.Panel>
			</Tabs> */}
			<Tabs variant='unstyled' defaultValue='settings' classNames={styles} w={400}>
				<Tabs.List grow>
					<Tabs.Tab value='participations' flex={1}>
						<Text fz={17}>Participaciones</Text>
					</Tabs.Tab>
					<Tabs.Tab value='journey' flex={1}>
						<Text fz={17}>Journey</Text>
					</Tabs.Tab>
				</Tabs.List>
			</Tabs>
		</Stack>
	);
};
