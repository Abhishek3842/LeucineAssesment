import express from "express";
import equipmentRoutes from "./modules/equipment/ equipment.routes";

const app = express();
app.use(express.json());


app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Test server running on port 3000");
});
app.use("/api/equipment", equipmentRoutes);

export default app;