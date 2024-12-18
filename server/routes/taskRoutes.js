import express from "express";
import {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js"; // Import the controllers

const router = express.Router();

// Create a new task
router.post("/", createTask);

// Get all tasks
router.get("/", getTasks);

// Get task by ID
router.get("/:taskId", getTaskById);

// Update task by ID
router.put("/:taskId", updateTask);

// Delete task by ID
router.delete("/:taskId", deleteTask);

export default router;
