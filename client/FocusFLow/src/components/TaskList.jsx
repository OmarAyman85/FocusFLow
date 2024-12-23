// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
