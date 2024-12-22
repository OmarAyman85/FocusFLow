import Task from "../models/Task.js"; // Import the Task model

// Create a new task
export const createTask = async (req, res, next) => {
  try {
    const {
      userId,
      title,
      description,
      status,
      priority,
      dueDate,
      tags,
      reminder,
      attachments,
      isRecurring,
      recurrenceRule,
      comments,
      isArchived,
    } = req.body;

    const task = new Task({
      userId,
      title,
      description,
      status: status || "pending", // Default to 'Pending' if not provided
      priority: priority || "low",
      dueDate,
      tags,
      reminder,
      attachments,
      isRecurring: isRecurring || false, // Default to false if not provided
      recurrenceRule,
      comments,
      isArchived: isArchived || false, // Default to false if not archived
    });

    await task.save();

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    next(error);
  }
};
//---------------------------------------------------------------------------------------------------
// Get all tasks of a user
export const getTasks = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({ userId });

    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

//---------------------------------------------------------------------------------------------------
// Get task by ID
export const getTaskById = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

//---------------------------------------------------------------------------------------------------
// Update task
export const updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const {
      title,
      description,
      status,
      priority,
      dueDate,
      tags,
      reminder,
      attachments,
      isRecurring,
      recurrenceRule,
      comments,
      isArchived,
    } = req.body;

    // Update the task with the provided fields
    const task = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        status,
        priority,
        dueDate,
        tags,
        reminder,
        attachments,
        isRecurring,
        recurrenceRule,
        comments,
        isArchived,
      },
      { new: true } // Return the updated task
    );

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    next(error);
  }
};

//---------------------------------------------------------------------------------------------------
// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
