import { Avatar, Menu, rem } from "@mantine/core"
import { IconArrowsLeftRight, IconLogout, IconSettings } from "@tabler/icons-react"


export const ButtonOptions = () => {
  return (
    <Menu >
        <Menu.Target>
            <Avatar 
                src='/assets/MocionLogo.png' 
                alt='Mocion' 
                size='lg'
                style={{position:'absolute', bottom: 12, right: 12, cursor: 'pointer'}}
            />
            </Menu.Target>

            <Menu.Dropdown>
            <Menu.Label>Evento</Menu.Label>
            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                Ingreso de evento
            </Menu.Item>

            <Menu.Divider />
            
            <Menu.Label>Experiencia</Menu.Label>
            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                Ingreso de experiencia
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Estación (nombre de la estación)</Menu.Label>
            <Menu.Item
                leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
            >
                Asociar estación
            </Menu.Item>
            <Menu.Item
                color="red"
                leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
            >
                Cerrar estación
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}
