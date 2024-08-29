import { Box, Center, Paper, Stack } from "@mantine/core"
import { EventCheckin } from "./EventCheckin"
import { ButtonOptions } from "./ButtonOptions"
import { TitleAction } from "./TitleAction"
import { useState } from "react"

export const AppPage = () => {
  const [ action, setAction ] = useState(''); //'' | 'email' | 'qr' | 'register' | 'experience'
  const actionError = true;
  const [ additionalFields, setAdditionalFields ] = useState(false);

  return (
    <Box h={'95vh'} w={'100vw'}>
        <Center h={'100%'}>
          <Paper w={{base: '100%', sm: '70%', md: '35%'}}>
            <Stack gap={'xl'} p={'xl'} justify="center" align="center">
              <TitleAction action={action} />

              <EventCheckin 
                action={action} 
                setAction={setAction} 
                actionError={actionError}
                additionalFields={additionalFields}
                setAdditionalFields={setAdditionalFields}
              />
            </Stack>
          </Paper>
        </Center>
        <ButtonOptions setAction={setAction} />
      </Box>
  )
}
