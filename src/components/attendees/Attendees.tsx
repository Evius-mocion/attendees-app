import { Table } from "@mantine/core";

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
				<Table.Tbody>
					{invitationsToCollaborate.map((element) => (
						<UserInvitationToCollaborateItem
							key={element.id}
							invitationToCollaborate={element}
							onAcceptInvitation={onAcceptInvitation}
							onRejectInvitation={onRejectInvitation}
						/>
					))}
				</Table.Tbody>
			</Table>
		</div>
	);
};
