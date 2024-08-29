import { Title } from "@mantine/core"

interface Props {
    action: string;
}

export const TitleAction = (props: Props) => {
    const { action } = props;

    return (
        <Title order={1} ta={'center'}>
            {action === 'register' ? 'Registro en el evento' : 'Ingreso en evento'}
        </Title>
    )
}
