import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
} from "../controllers/userController.js"; // Import the controllers
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login a user
router.post("/login", loginUser);

// Get user details by ID (with authentication middleware)
router.get("/:userId", authenticate, getUserProfile);

// Update user information (with authentication middleware)
router.put("/:userId", updateUser);

export default router;
