import User from "../models/User.js"; // Import the User model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      profilePicture,
      bio,
      socialLinks,
    } = req.body;

    // Check if user already exists by email or username
    const existingUser = await User.findOne({
      $or: [{ email }, { userName }],
    });

    if (existingUser) {
      //return res.status(400).json({ message: "User already exists" });
      const error = new Error("User already exists");
      error.statusCode = 400;
      throw error;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      profilePicture,
      bio,
      socialLinks,
      isActive: true,
      isAdmin: false,
      tasks: [],
    });

    // Save the user
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    next(error);
  }
};

//----------------------------------------------------------------------------------------------
// Login user with either email or username
export const loginUser = async (req, res, next) => {
  try {
    const { emailOrUsername, password } = req.body;

    // Find the user by email or username
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { userName: emailOrUsername }],
    });

    if (!user || !user.isActive) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }

    // Compare the entered password with the hashed password stored in the DB
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
//----------------------------------------------------------------------------------------------
// Update user profile
export const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const {
      firstName,
      lastName,
      userName,
      email,
      profilePicture,
      bio,
      socialLinks,
      isAdmin,
      isActive,
    } = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        userName,
        email,
        profilePicture,
        bio,
        socialLinks,
        isAdmin,
        isActive,
      },
      { new: true }
    );
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    next(error);
  }
};

//----------------------------------------------------------------------------------------------
// Get user profile
export const getUserProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("tasks");
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
//----------------------------------------------------------------------------------------------
