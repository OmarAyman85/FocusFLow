import Task from "../models/Task.js";
import User from "../models/User.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);
    const user = await User.findById(task.userId);
    if (!user || !user.isAdmin) {
      const error = new Error("Access denied. Admins only.");
      error.statusCode = 403;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};
