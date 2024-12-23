// src/pages/TasksPage.jsx
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import { getTasks, createTask } from '../services/taskService';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(fetchedTasks => setTasks(fetchedTasks));
  }, []);

  const addNewTask = (task) => {
    createTask(task).then(newTask => setTasks([...tasks, newTask]));
  };

  return (
    <div className="tasks-page">
      <h2>Your Tasks</h2>
      <AddTask addTask={addNewTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
