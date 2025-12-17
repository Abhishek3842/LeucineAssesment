// EquipmentForm.tsx
import { useEffect, useState } from "react";
import { Equipment, EquipmentStatus, EquipmentType } from "../types/equipment";
import {
  Button,
  Input,
  Select,
  FormRow,
  Field,
  Label,
} from "../styles/common";

interface Props {
  selected?: Equipment | null;
  onSubmit: (data: Omit<Equipment, "id">) => void;
  
}


const initialState: Omit<Equipment, "id"> = {
  name: "",
  type: "Machine" as EquipmentType,
  status: "Active" as EquipmentStatus,
  lastCleaned: "",
};

const EquipmentForm = ({ selected, onSubmit }: Props) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selected) {
      const { id, ...rest } = selected;
      setForm(rest);
    } else {
      setForm(initialState);
    }
  }, [selected]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.lastCleaned) return;
    onSubmit(form);
  };

  return (
    <FormRow onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Input
          name="name"
          placeholder="e.g. Mixer A1"
          value={form.name}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label>Type</Label>
        <Select name="type" value={form.type} onChange={handleChange}>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </Select>
      </Field>

      <Field>
        <Label>Status</Label>
        <Select name="status" value={form.status} onChange={handleChange}>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </Select>
      </Field>

      <Field>
        <Label>Last cleaned</Label>
        <Input
          type="date"
          name="lastCleaned"
          value={form.lastCleaned}
          onChange={handleChange}
          required
        />
      </Field>

      <Button type="submit">
        {selected ? "Update equipment" : "Save equipment"}
      </Button>
    </FormRow>
  );
};

export default EquipmentForm;
