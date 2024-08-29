import { Anchor, Button, Group, Paper, Stack, Text } from "@mantine/core"

interface Props {
    actionError: boolean;
    setAction: (action: string) => void;
}

export const AccessByQR = (props: Props) => {
    const { actionError, setAction } = props;
    
    return (
        <Stack gap={'xl'} w={'80%'}>
            <Text fz={'lg'} fw={500}>Código QR</Text>
            <Paper withBorder h={{base: 300, sm: 350}}></Paper>
            {actionError && <Text ta='center' c={'red'}>No se encuentra registrado, <Anchor onClick={()=>setAction('register')} underline="always">Haz clic aquí para registrarte</Anchor></Text>}
            
            <Group justify='end'>
                <Button size='lg' onClick={()=> setAction('')} variant='subtle'>Volver</Button>
                <Button size='lg' onClick={()=> setAction('')} disabled={actionError}>Ingresar</Button>
            </Group>
        </Stack>
    )
}
