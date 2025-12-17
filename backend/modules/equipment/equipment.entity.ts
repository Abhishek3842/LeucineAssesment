import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum EquipmentType {
  MACHINE = "Machine",
  VESSEL = "Vessel",
  TANK = "Tank",
  MIXER = "Mixer",
}

export enum EquipmentStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  MAINTENANCE = "Under Maintenance",
}

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "enum", enum: EquipmentType })
  type!: EquipmentType;

  @Column({ type: "enum", enum: EquipmentStatus })
  status!: EquipmentStatus;

  @Column({ type: "date" })
  lastCleaned!: string;
}
