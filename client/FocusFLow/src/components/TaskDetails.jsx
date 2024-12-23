// src/components/TaskDetails.jsx
import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
};

export default TaskDetails;
