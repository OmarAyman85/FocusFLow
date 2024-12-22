import express from "express";
import {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js"; // Import the controllers
import { authenticate } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Create a new task
router.post("/", authenticate, createTask);

// Get all tasks
router.get("/user/:userId", getTasks);

// Get task by ID
router.get("/:taskId", getTaskById);

// Update task by ID
router.put("/:taskId", updateTask);

// Delete task by ID
router.delete("/:taskId", adminMiddleware, deleteTask);

export default router;
