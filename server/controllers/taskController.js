import Task from "../models/Task.js"; // Import the Task model

// Create a new task
export const createTask = async (req, res) => {
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
      status: status || "Pending", // Default to 'Pending' if not provided
      priority,
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
    res.status(500).json({ message: "Server error", error });
  }
};
//---------------------------------------------------------------------------------------------------
// Get all tasks of a user
export const getTasks = async (req, res) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({ userId });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//---------------------------------------------------------------------------------------------------
// Get task by ID
export const getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//---------------------------------------------------------------------------------------------------
// Update task
export const updateTask = async (req, res) => {
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
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//---------------------------------------------------------------------------------------------------
// Delete task
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
