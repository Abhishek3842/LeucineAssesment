import { useEffect, useState } from "react";
import { Page, Card, Heading, Subheading } from "./styles/common";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentForm from "./components/EquipmentForm";
import { Equipment } from "./types/equipment";
import * as api from "./api/equipment.api";

function App() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [selected, setSelected] = useState<Equipment | null>(null);

  const loadData = async () => {
    setEquipment(await api.getAllEquipment());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data: Omit<Equipment, "id">) => {
    if (selected) {
      await api.updateEquipment(selected.id, data);
      setSelected(null);
    } else {
      await api.createEquipment(data);
    }
    loadData();
  };
  const handleEdit = (item: Equipment) => {
    setSelected(item);
  };


  const handleDelete = async (id: number) => {
    await api.deleteEquipment(id);
    loadData();
  };

  return (
    <Page>
    <Card>
      <Heading>Equipment Tracker</Heading>
      <Subheading>
        Track equipment type, status, and cleaning dates in one place.
      </Subheading>

      <EquipmentForm selected={selected} onSubmit={handleSubmit} />
      <EquipmentTable
        equipment={equipment}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Card>
  </Page>
  );
}

export default App;
