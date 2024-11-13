import { Table } from '@mantine/core';

export const Attendees = () => {
	return (
		<div>
			<Table horizontalSpacing='lg' highlightOnHover>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Organización</Table.Th>
						<Table.Th>Rol</Table.Th>
						<Table.Th>Opciones</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody></Table.Tbody>
			</Table>
		</div>
	);
};
