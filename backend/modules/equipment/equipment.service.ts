import { AppDataSource } from "../../config/data-source";
import { Equipment } from "./equipment.entity";

const equipmentRepository = AppDataSource.getRepository(Equipment);

export const getAllEquipment = async (): Promise<Equipment[]> => {
  return equipmentRepository.find();
};

export const getEquipmentById = async (
  id: number
): Promise<Equipment | null> => {
  return equipmentRepository.findOneBy({ id });
};

export const createEquipment = async (
   data:Partial<Equipment>
): Promise<Equipment> => {
  console.log("Creating equipment with ", data);
  const equipment = equipmentRepository.create(data);
  return equipmentRepository.save(equipment);
};


export const updateEquipment = async (
  id: number,
  data: Partial<Equipment>
): Promise<Equipment | null> => {
  const equipment = await equipmentRepository.findOneBy({ id });
  if (!equipment) return null;

  equipmentRepository.merge(equipment, data);
  return equipmentRepository.save(equipment);
};

export const deleteEquipment = async (id: number): Promise<boolean> => {
  const result = await equipmentRepository.delete(id);
  return result.affected === 1;
};
