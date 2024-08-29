import { Button, Group, Stack } from '@mantine/core'
import { AccessByAction } from './AccessByAction';
import { AccessByEmail } from './AccessByEmail';
import { AccessByQR } from './AccessByQR';
import { RegisterFormByEvent } from './RegisterFormByEvent';
import { RegisterFormByEventAdditionalFields } from './RegisterFormByEventAdditionalFields';

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
        <Stack w={'100%'} justify='center' align='center' h={'100%'}>
            {action === '' &&
                <AccessByAction setAction={setAction} />
            }
            {action === 'email' &&
                <AccessByEmail actionError={actionError} setAction={setAction} />
            }
            {action === 'qr' &&
                <AccessByQR actionError={actionError} setAction={setAction} />
            }
            {action === 'register' &&
                <Stack gap={'xl'} w={'80%'}>
                    {additionalFields ?
                        <RegisterFormByEvent />
                        :
                        <RegisterFormByEventAdditionalFields />
                    }
                </Stack>
            }
            {action !== '' &&
                <Group justify='end' w={'80%'}>
                    <Button size='lg' onClick={()=> {setAdditionalFields(true); setAction('')}} variant='subtle'>Volver</Button>
                    {additionalFields && action === 'register' ?
                        <Button size='lg' onClick={()=> setAdditionalFields(false)} /* disabled={actionError} */>Siguiente</Button>
                        :
                        <Button 
                            size='lg' 
                            onClick={()=> {setAdditionalFields(true); setAction('')}} 
                            disabled={actionError && action !== 'register'}>
                                {action === 'register' ? 'Registrar' : 'Ingresar'}
                            </Button>
                    }
                </Group>
            }
        </Stack>
    )
}
