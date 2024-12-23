// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="btn btn-danger">Delete</button>
      <button className="btn btn-warning">Edit</button>
    </div>
  );
};

export default TaskItem;
