import AddTask from "../Components/AddTask";
import TaskCard from "../Components/TaskCard";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";

function DashboardLayout() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const addNewTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  return (
    <>
      <h1 className="text-center">Welcome to your dashboard</h1>
      <div className="text-center">
        <button className="btn btn-primary" onClick={toggleAddTask}>
          {showAddTask ? "Hide" : "Add Task"}
        </button>
        <div className="text-start">
          {showAddTask && <AddTask addNewTask={addNewTask} />}
        </div>
        <div className="row">
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
