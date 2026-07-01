import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import guardRoutes from "./routes/guardRoutes.js";


dotenv.config();

const app = express();

// Middlewares FIRST
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/guard", guardRoutes);
app.use("/template", express.static("template"));
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "JamVerse API Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});