import express from "express";
import equipmentRoutes from "./modules/equipment/ equipment.routes";
import cors from "cors"
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:4000", // Allow requests from your frontend
}));
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Test server running on port 3000");
});
app.use("/api/equipment", equipmentRoutes);

export default app;