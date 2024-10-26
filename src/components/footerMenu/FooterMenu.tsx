import { ActionIcon, Flex, Menu, rem } from '@mantine/core';
import {
	IconCalendarEvent,
	IconUsers,
	IconDotsCircleHorizontal,
	IconLogout,
	IconUserScan,
	IconSettings,
} from '@tabler/icons-react';
import { useAuthStationStore } from '../../hooks/useAuthStationStore';
import { useMyNavigation } from '../../hooks/useMyNavigation';

export const FooterMenu = () => {
	const { handledLogout } = useAuthStationStore();
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	return (
		<Flex h={'100%'} align='center' justify='space-around'>
			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
				<IconUserScan />
			</ActionIcon>
			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
				<IconUsers />
			</ActionIcon>

			<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
				<IconCalendarEvent />
			</ActionIcon>

			<Menu>
				<Menu.Target>
					<ActionIcon variant='subtle' size='xl' radius='md' aria-label='Home'>
						<IconDotsCircleHorizontal />
						{/* <Avatar name={user.fullName} color='initials' src={user.avatar} /> */}
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Evento</Menu.Label>
					<Menu.Item
						leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
						onClick={goToInitialOptions}
					>
						Ingreso
					</Menu.Item>
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
