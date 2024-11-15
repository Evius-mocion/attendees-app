import { Avatar, Badge, Button, Group, Loader, Paper, Stack, Text } from '@mantine/core';
import { useAttendeeOptions } from '../../hooks/useAttendeeOptions';
import { useMyParams } from '../../hooks/useMyParams';
import styles from './attendeeOptions.module.css';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { useCheckInUserService } from '../../hooks/useCheckInUserService';

export const AttendeeOptions = () => {
	const { attendeeId } = useMyParams();
	const { attendee, isLoading } = useAttendeeOptions(attendeeId ?? '');
	const { station } = useAuthStationStore();

	const { handleCheckInUser } = useCheckInUserService();

	return (
		<Stack justify='center' h={'100%'}>
			<Group justify='center'>
				{isLoading ? (
					<Loader />
				) : (
					<Stack>
						<Paper p={'xl'} className={styles.paper}>
							<Stack>
								<Group gap={'xl'} justify='space-between'>
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
									<Badge color='gray'>No ha ingresado</Badge>
								</Group>
								<Group>
									<Button fullWidth>Marcar ingreso al evento</Button>
								</Group>
							</Stack>
						</Paper>
						{!station.experience && (
							<Paper p={'xl'} className={styles.paper}>
								<Stack>
									<Group gap={'xl'} justify='space-between'>
										<Text fw={500} fz={'h2'}>
											Totem interactivo
										</Text>
										<Badge color='gray'>No ha participado</Badge>
									</Group>
									<Group>
										<Button fullWidth>Marcar participación</Button>
									</Group>
								</Stack>
							</Paper>
						)}
					</Stack>
				)}
			</Group>

			{/* <Group justify='center'>
				<Avatar size={200} name={attendee?.fullName} color='initials' src={attendee?.avatar} />
			</Group>
			<Stack gap={0} align='center'>
				<Text fw={500}>{attendee?.fullName}</Text>
				<Text fw={500} c={'gray'}>
					{attendee?.email}
				</Text>
			</Stack>
			<Stack>
				<Group justify='center'>
					<Stack gap={0}>
						<Group justify='space-between'>
							<Text>Check In en evento</Text>
							<Group gap={'xs'}>
								<Checkbox />
								<ActionIcon variant='white'>
									<IconTriangleInverted color='gray' />
								</ActionIcon>
							</Group>
						</Group>
						<Group px={'md'}>
							<Text c={'gray'}>Ingreso 17/10/2024 4:10pm</Text>
						</Group>
					</Stack>
				</Group>
			</Stack> */}
			{/* <Group justify='center'>
				<Tabs variant='unstyled' defaultValue='participations' classNames={styles} w={400}>
					<Tabs.List grow>
						<Tabs.Tab value='participations' flex={1}>
							<Text fz={17}>Participaciones</Text>
						</Tabs.Tab>
						<Tabs.Tab value='journey' flex={1}>
							<Text fz={17}>Journey</Text>
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
			</Group> */}
		</Stack>
	);
};
