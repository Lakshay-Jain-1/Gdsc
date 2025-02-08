import { Router } from "express";
import { createTask, deleteTask, updateTask } from "../controller/taskController.js";
import { adminOnly, protect } from "../middleware/auth.js";

const adminRouting = Router();

adminRouting.post("/tasks", protect, adminOnly, createTask);
adminRouting.put("/tasks/:taskId", protect, adminOnly, updateTask);
adminRouting.delete("/tasks/:taskId", protect, adminOnly, deleteTask);

export default adminRouting;