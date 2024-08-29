import { Divider, Select, Stack, TextInput } from "@mantine/core"
import { IconAt, IconId } from "@tabler/icons-react"
import { gendersLabel } from '../common/gendersLabel';

export const RegisterFormByEventAdditionalFields = () => {
    return (
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
    )
}
