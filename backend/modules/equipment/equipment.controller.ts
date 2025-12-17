import { Request, Response } from "express";
import * as equipmentService from "./equipment.service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const equipment = await equipmentService.getAllEquipment();
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipment = await equipmentService.getEquipmentById(id);

    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.json(equipment);
  } catch {
    res.status(500).json({ message: "Failed to fetch equipment" });
  }
};

export const create = async (req: Request, res: Response) => {
  console.log("Request body:", req.body);
  try {
    const equipment = await equipmentService.createEquipment(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    console.error("Error creating equipment:", error);
    res.status(400).json({ message: "Failed to create equipment" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updated = await equipmentService.updateEquipment(id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.json(updated);
  } catch {
    res.status(400).json({ message: "Failed to update equipment" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await equipmentService.deleteEquipment(id);

    if (!deleted) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(204).send();
  } catch {
    res.status(500).json({ message: "Failed to delete equipment" });
  }
};
