import { Anchor, Button, Divider, Group, Paper, Select, Stack, Text, TextInput } from '@mantine/core'
import { IconAt, IconId, IconMail, IconQrcode } from '@tabler/icons-react'
import { iconSizes } from '../common/styleConstant'
import classes from '../common/general.module.css'
import { gendersLabel } from '../common/gendersLabel';

interface Props {
    action: string;
    setAction: (action: string) => void; 
    actionError: boolean;
    additionalFields: boolean;
    setAdditionalFields: (additionalFields: boolean) => void;
}

export const EventCheckin = (props: Props) => {
    const { action, setAction, actionError, additionalFields, setAdditionalFields } = props;

    return (
        <>
            {action === '' &&
                <Group grow>
                    <Paper h={{base: '200', sm: 'auto'}} p={'xl'} shadow="md" className={classes.cursorPointer} onClick={()=> setAction('email')}>
                        <Stack gap={0} justify="center" align="center">
                            <IconMail size={iconSizes.xLarge}/>
                            <Text fz={'lg'} ta='center'>Correo</Text>
                            <Text fz='xs' c='dimmed' ta='center'>Ingresa al evento mediante el correo electrónico</Text>
                        </Stack>
                    </Paper>
                    <Paper h={{base: '200', sm: 'auto'}} p={'xl'} shadow="md" className={classes.cursorPointer} onClick={()=> setAction('qr')}>
                        <Stack gap={0} justify="center" align="center">
                            <IconQrcode size={iconSizes.xLarge}/>
                            <Text fz={'lg'} ta='center'>Código QR</Text>
                            <Text fz='xs' c='dimmed' ta='center'>Ingresa al evento mediante el código QR</Text>
                        </Stack>
                    </Paper>
                </Group>
            }
            {action === 'email' &&
                <Stack gap={'xl'} w={'80%'}>
                    <TextInput 
                        label='Correo electrónico'
                        placeholder='tucorreo@gmail.com'
                        leftSection={<IconAt />}
                        size='lg'
                        withAsterisk
                        error={actionError && <Text ta='center'>No se encuentra registrado, <Anchor onClick={()=>setAction('register')} underline="always">Haz clic aquí para registrarte</Anchor></Text>}
                    />
                    <Group justify='end'>
                        <Button size='lg' onClick={()=> setAction('')} variant='subtle'>Volver</Button>
                        <Button size='lg' onClick={()=> setAction('')} disabled={actionError}>Ingresar</Button>
                    </Group>
                </Stack>
            }
            {action === 'qr' &&
                <Stack gap={'xl'} w={'80%'}>
                    <Text fz={'lg'} fw={500}>Código QR</Text>
                    <Paper withBorder h={{base: 300, sm: 350}}></Paper>
                    {actionError && <Text ta='center' c={'red'}>No se encuentra registrado, <Anchor onClick={()=>setAction('register')} underline="always">Haz clic aquí para registrarte</Anchor></Text>}
                    
                    <Group justify='end'>
                        <Button size='lg' onClick={()=> setAction('')} variant='subtle'>Volver</Button>
                        <Button size='lg' onClick={()=> setAction('')} disabled={actionError}>Ingresar</Button>
                    </Group>
                </Stack>
            }
            {action === 'register' &&
                <Stack gap={'xl'} w={'80%'}>
                    {additionalFields ?
                        <Stack>
                            <Divider label={'Campos fijos'} />
                            <TextInput 
                                label='Nombre'
                                placeholder='Nombre'
                                leftSection={<IconId />}
                                size='lg'
                                withAsterisk
                            />
                            <TextInput 
                                label='Correo electrónico'
                                placeholder='tucorreo@gmail.com'
                                leftSection={<IconAt />}
                                size='lg'
                                withAsterisk
                            />
                            <Select
                                size='lg'
                                required
                                label='Género'
                                placeholder='Seleccione su género'
                                data={gendersLabel}
                                clearable
                            />
                        </Stack>
                        :
                        <Stack>
                            <Divider label={'Campos adicionales'} />
                            <TextInput 
                                label='Nombre'
                                placeholder='Nombre'
                                leftSection={<IconId />}
                                size='lg'
                            />
                            <TextInput 
                                label='Correo electrónico'
                                placeholder='tucorreo@gmail.com'
                                leftSection={<IconAt />}
                                size='lg'
                                withAsterisk
                            />
                            <Select
                                size='lg'
                                required
                                label='Género'
                                placeholder='Seleccione su género'
                                data={gendersLabel}
                                clearable
                            />
                        </Stack>
                    }
                    <Group justify='end'>
                        <Button size='lg' onClick={()=> {setAdditionalFields(true); setAction('')}} variant='subtle'>Volver</Button>
                        {additionalFields ?
                            <Button size='lg' onClick={()=> setAdditionalFields(false)} /* disabled={actionError} */>Siguiente</Button>
                            :
                            <Button size='lg' onClick={()=> {setAdditionalFields(true); setAction('')}} /* disabled={actionError} */>Registrar</Button>
                        }
                    </Group>
                </Stack>
            }
        </>
    )
}
