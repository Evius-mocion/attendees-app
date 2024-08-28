import { Box, Center, Paper, Stack } from "@mantine/core"
import { EventCheckin } from "./EventCheckin"
import { ButtonOptions } from "./ButtonOptions"
import { TitleAction } from "./TitleAction"

export const AppPage = () => {
  
  return (
    <Box h={'95vh'} w={'100vw'}>
        <Center h={'100%'}>
          <Paper w={{base: '100%', sm: '70%', md: '35%'}}>
            <Stack gap={'xl'} p={'xl'} justify="center" align="center">
              <TitleAction />

              <EventCheckin />
            </Stack>
          </Paper>
        </Center>
        <ButtonOptions />
      </Box>
  )
}
