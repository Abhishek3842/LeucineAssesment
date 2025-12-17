import { DataSource } from "typeorm";
import { Equipment } from "../modules/equipment/equipment.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "Leucine",
  synchronize: true,
  entities: [Equipment],
});
