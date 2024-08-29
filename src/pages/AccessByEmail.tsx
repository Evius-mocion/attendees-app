import { Anchor, Stack, Text, TextInput } from "@mantine/core"
import { IconAt } from "@tabler/icons-react"

interface Props {
    actionError: boolean;
    setAction: (action: string) => void;
}

export const AccessByEmail = (props: Props) => {
    const { actionError, setAction } = props;

    return (
        <Stack gap={'xl'} w={'80%'}>
            <TextInput 
                label='Correo electrónico'
                placeholder='tucorreo@gmail.com'
                leftSection={<IconAt />}
                size='lg'
                withAsterisk
                error={actionError && <Text ta='center'>No se encuentra registrado, <Anchor onClick={()=>setAction('register')} underline="always">Haz clic aquí para registrarte</Anchor></Text>}
            />
            {/* <Group justify='end'>
                <Button size='lg' onClick={()=> setAction('')} variant='subtle'>Volver</Button>
                <Button size='lg' onClick={()=> setAction('')} disabled={actionError}>Ingresar</Button>
            </Group> */}
        </Stack>
    )
}
