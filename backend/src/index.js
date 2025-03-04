import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import Connection from "./shared/db.js";
import authRouting from "./modules/routes/auth.js";
import adminRouting from "./modules/routes/adminRoutes.js";
import userRouting from "./modules/routes/userRoutes.js";
import taskRouting from "./modules/routes/taskRoutes.js";
import leaderboardRouting from "./modules/routes/leaderboardRoutes.js";

// Config
dotenv.config();
const app = express();

// to handle cors
const corsOptions = {
  origin: ["http://192.168.1.79:5173", ""],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200,
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routing
app.use("/api/auth", authRouting);
app.use("/api/admin", adminRouting);
app.use("/api/user", userRouting);
app.use("/api/tasks", taskRouting);
app.use("/api/leaderboard", leaderboardRouting);

app.listen(process.env.PORTNUMBER || 5000, async () => {
  await Connection();
  console.log("server is running")
});