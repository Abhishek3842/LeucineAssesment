import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/data-source";
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);