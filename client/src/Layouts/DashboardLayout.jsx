import AddTask from "../Components/AddTask";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import ActiveDashboard from "../Screens/Dashboard/ActiveDashboard";

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
      </div>
      <ActiveDashboard tasks={tasks} />
    </>
  );
}

export default DashboardLayout;
