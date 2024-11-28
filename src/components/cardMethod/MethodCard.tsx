import { AspectRatio, Checkbox, Group, Image, Paper, Text } from '@mantine/core';
import { useGetDevice } from '../../hooks/useGetDevice';

type Props = {
	onClic: () => void;
	isActive: boolean;
	label: string;
	image: string;
};

export const MethodCard = ({ isActive, label, onClic, image }: Props) => {
	const { isMobile } = useGetDevice();

	return (
		<Paper miw={20} mih={20} style={{ cursor: 'pointer' }} onClick={onClic} shadow='0' withBorder>
			<Group pos={'relative'} gap={isMobile ? 'xl' : 100} wrap='nowrap'>
				<Checkbox checked={isActive} pos={'absolute'} top={10} right={10} radius={'lg'} size={isMobile ? 'md' : 'lg'} />
				<AspectRatio ratio={1} w={{ base: 100, md: 120, xl: 150 }}>
					{/* <Stack justify='center'> */}
						<Image src={image} fit='fill' ml={{base: 'xs', md: 'md'}}/>
					{/* </Stack> */}
				</AspectRatio>
				<Text fw={'500'} fz={isMobile? 'xl' : 'h3'} ta={'center'} >
					{label}
				</Text>
			</Group>
		</Paper>
	);
};
