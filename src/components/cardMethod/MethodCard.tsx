import { AspectRatio, Checkbox, Group, Image, Paper, Stack, Text } from '@mantine/core';

type Props = {
	onClic: () => void;
	isActive: boolean;
	label: string;
	image: string;
};
export const MethodCard = ({ isActive, label, onClic, image }: Props) => {
	return (
		<Paper miw={20} mih={20} style={{ cursor: 'pointer' }} onClick={onClic} shadow='0' withBorder>
			<Group pos={'relative'}>
				<Checkbox checked={isActive} pos={'absolute'} top={5} right={5} />
				<AspectRatio ratio={1} w={{ base: 100, md: 120, xl: 150 }}>
					<Stack justify='center'>
						<Image src={image} />
					</Stack>
				</AspectRatio>
				<Text fw={'500'} fz={'h3'}>
					{label}
				</Text>
			</Group>
		</Paper>
	);
};
