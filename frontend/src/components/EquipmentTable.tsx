// EquipmentTable.tsx
import { Equipment } from "../types/equipment";
import { Button } from "../styles/common";
import styled from "styled-components";

interface Props {
  equipment: Equipment[];
  onEdit: (item: Equipment) => void;
  onDelete: (id: number) => void;
}

const TableWrapper = styled.div`
  border-radius: 14px;
  border: 1px solid #111827;
  overflow: hidden;
  background: radial-gradient(circle at top left, #0b1120 0, #020617 45%);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  color: #e5e7eb;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px 12px;
  background: rgba(15, 23, 42, 0.98);
  border-bottom: 1px solid #111827;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Tr = styled.tr`
  transition: background-color 0.18s ease, transform 0.18s ease;

  &:nth-child(even) {
    background: rgba(15, 23, 42, 0.9);
  }

  &:nth-child(odd) {
    background: rgba(15, 23, 42, 0.75);
  }

  &:hover {
    background: #020617;
    transform: translateY(-1px);
  }
`;

const Td = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #020617;
`;

const TypeBadge = styled.span`
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
  border: 1px solid rgba(96, 165, 250, 0.7);
  background: rgba(15, 23, 42, 0.9);
  color: #bfdbfe;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: ${({ status }) =>
    status === "Active"
      ? "rgba(34,197,94,0.16)"
      : status === "Inactive"
      ? "rgba(148,163,184,0.16)"
      : "rgba(249,115,22,0.18)"};
  color: ${({ status }) =>
    status === "Active"
      ? "#4ade80"
      : status === "Inactive"
      ? "#9ca3af"
      : "#fdba74"};
`;

const SmallButton = styled(Button)`
  padding: 4px 10px;
  font-size: 12px;
  box-shadow: none;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.8);

  &:hover {
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.6);
  }
`;

const DangerButton = styled(SmallButton)`
  background: rgba(127, 29, 29, 0.4);
  border-color: rgba(248, 113, 113, 0.9);

  &:hover {
    box-shadow: 0 6px 18px rgba(248, 113, 113, 0.7);
  }
`;

const EmptyState = styled.div`
  margin-top: 10px;
  padding: 18px;
  border-radius: 12px;
  border: 1px dashed #374151;
  background: rgba(15, 23, 42, 0.8);
  color: #9ca3af;
  font-size: 13px;
`;

const EquipmentTable = ({ equipment, onEdit, onDelete }: Props) => {
  if (equipment.length === 0) {
    return (
      <EmptyState>
        No equipment yet. Add your first item using the form above.
      </EmptyState>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Status</Th>
            <Th>Last cleaned</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(item => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>
                <TypeBadge>{item.type}</TypeBadge>
              </Td>
              <Td>
                <StatusBadge status={item.status}>{item.status}</StatusBadge>
              </Td>
              <Td>{item.lastCleaned}</Td>
              <Td style={{ whiteSpace: "nowrap" }}>
                <SmallButton onClick={() => onEdit(item)}>Edit</SmallButton>{" "}
                <DangerButton onClick={() => onDelete(item.id)}>
                  Delete
                </DangerButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default EquipmentTable;
