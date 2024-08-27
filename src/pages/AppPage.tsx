import { Box, Center, Group, Paper, Stack, Text, Title } from "@mantine/core"
import { IconMail, IconQrcode } from "@tabler/icons-react"
import { iconSizes } from "../common/styleConstant"
import classes from '../common/general.module.css'

export const AppPage = () => {
  return (
    <Box h={'100vh'} w={'100vw'}>
        <Center h={'100%'}>
          <Paper w={{base: '100%', md: '35%'}}>
            <Stack gap={'xl'} p={'xl'} justify="center" align="center">
              <Title order={1} ta={'center'}>Ingreso en evento/experiencia</Title>

              <Group justify="space-between" grow>
                <Paper h={200} p={'xl'} shadow="md" className={classes.cursorPointer}>
                  <Stack gap={0} justify="center" align="center">
                    <IconMail size={iconSizes.xLarge}/>
                    <Text fz={'lg'} ta='center'>Correo</Text>
                    <Text fz='xs' c='dimmed' ta='center'>Ingresa al evento mediante el correo electrónico</Text>
                  </Stack>
                </Paper>
                <Paper h={200} p={'xl'} shadow="md" className={classes.cursorPointer}>
                  <Stack gap={0} justify="center" align="center">
                    <IconQrcode size={iconSizes.xLarge}/>
                    <Text fz={'lg'} ta='center'>Código QR</Text>
                    <Text fz='xs' c='dimmed' ta='center'>Ingresa al evento mediante el código QR</Text>
                  </Stack>
                </Paper>
              </Group>
            </Stack>
          </Paper>
        </Center>
      </Box>
  )
}
