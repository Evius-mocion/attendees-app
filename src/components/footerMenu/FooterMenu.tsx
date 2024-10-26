import { ActionIcon, Flex, Menu, rem, Stack } from '@mantine/core';
import {
	IconPointFilled,
	IconUsers,
	IconDotsCircleHorizontal,
	IconLogout,
	IconUserScan,
	IconSettings,
} from '@tabler/icons-react';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { useLocation } from 'react-router-dom';

export const FooterMenu = () => {
	const { handledLogout } = useAuthStationStore();
	const { goToRegisterUser, goToInitialOptions, goToAttendees } = useMyNavigation();
	const location = useLocation();

	return (
		<Flex h={'100%'} align='center' justify='space-around'>
			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home' onClick={goToInitialOptions}>
				<Stack gap={0} align='center'>
					<IconUserScan />
					{location.pathname.includes('identifyAttendee') && <IconPointFilled size={12} />}
				</Stack>
			</ActionIcon>
			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
				<Stack gap={0} align='center' onClick={goToAttendees}>
					<IconUsers />
					{location.pathname.includes('attendees') && <IconPointFilled size={12} />}
				</Stack>
			</ActionIcon>
			{/* 
			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
				<IconCalendarEvent />
			</ActionIcon> */}

			<Menu>
				<Menu.Target>
					<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
						<IconDotsCircleHorizontal />
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Acciones</Menu.Label>

					<Menu.Item
						leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
						onClick={goToRegisterUser}
					>
						Registro
					</Menu.Item>

					<Menu.Divider />

					<Menu.Item
						color='red'
						leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
						onClick={handledLogout}
					>
						Cerrar estación
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Flex>
	);
};
