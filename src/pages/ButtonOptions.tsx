import { Avatar, Menu, rem } from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { useAuthStationStore } from '../hooks/useAuthStationStore';
import { StationType } from '../store/types/auth.types';
import { useMyNavigation } from '../hooks/useMyNavigation';

export const ButtonOptions = () => {
	const { stationType, station, handledLogout } = useAuthStationStore();
	const { goToRegisterUser, goToInitialOptions } = useMyNavigation();
	return (
		<Menu>
			<Menu.Target>
				<Avatar
					src='/assets/MocionLogo.png'
					alt='Mocion'
					size='lg'
					style={{ position: 'absolute', bottom: 12, right: 12, cursor: 'pointer' }}
				/>
			</Menu.Target>

			<Menu.Dropdown>
				{stationType === StationType.event && (
					<>
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
					</>
				)}

				{stationType === StationType.experience && (
					<>
						<Menu.Label>Experiencia</Menu.Label>
						<Menu.Item
							leftSection={
								<IconSettings style={{ width: rem(14), height: rem(14) }} />
							} /* onClick={() => setAction('experience')} */
						>
							Ingreso
						</Menu.Item>
					</>
				)}

				<Menu.Divider />

				<Menu.Label>Estación: {station.name}</Menu.Label>
				{/* <Menu.Item leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}>
					Asociar estación
				</Menu.Item> */}
				<Menu.Item
					color='red'
					leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
					onClick={handledLogout}
				>
					Cerrar estación
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
