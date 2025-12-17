import { Equipment } from "../types/equipment";

const BASE_URL = "http://localhost:3000/api/equipment";

export const getAllEquipment = async (): Promise<Equipment[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createEquipment = async (
  data: Omit<Equipment, "id">
) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateEquipment = async (
  id: number,
  data: Omit<Equipment, "id">
) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteEquipment = async (id: number) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
