// src/components/EditTask.jsx
import React, { useState, useEffect } from 'react';

const EditTask = ({ task, updateTask }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  useEffect(() => {
    setUpdatedTask({ ...task });
  }, [task]);

  const handleChange = (e) => {
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-success">Update Task</button>
    </form>
  );
};

export default EditTask;
