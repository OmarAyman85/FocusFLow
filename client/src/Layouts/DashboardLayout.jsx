import AddTask from "../Components/AddTask";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import ActiveDashboard from "../Screens/Dashboard/ActiveDashboard";
import AddedDashboard from "./../Screens/Dashboard/AddedDashboard";
import DoneDashboard from "./../Screens/Dashboard/DoneDashboard";
import DashboardNavbar from "./../Components/DashboardNavbar";
import axios from "axios";

function DashboardLayout() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [addedTasks, setAddedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const addNewTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log("Catched error:", err));
  }, []);

  const selectDestination = useCallback(() => {
    let addedTasksTemp = [];
    let activeTasksTemp = [];
    let doneTasksTemp = [];

    tasks.forEach((task) => {
      const si = task.status;
      switch (si) {
        case "pending":
          addedTasksTemp.push(task);
          break;
        case "in-progress":
          activeTasksTemp.push(task);
          break;
        case "completed":
          doneTasksTemp.push(task);
          break;
        default:
          break;
      }
    });

    setAddedTasks(addedTasksTemp);
    setActiveTasks(activeTasksTemp);
    setDoneTasks(doneTasksTemp);
  }, [tasks]);

  useEffect(() => {
    selectDestination();
  }, [tasks, selectDestination]);

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
      <DashboardNavbar />
      <Routes>
        <Route
          path="Active"
          element={
            activeTasks.length > 0 ? (
              <ActiveDashboard tasks={activeTasks} />
            ) : (
              <p>No Active Tasks</p>
            )
          }
        />
        <Route
          path="Added"
          element={
            addedTasks.length > 0 ? (
              <AddedDashboard tasks={addedTasks} />
            ) : (
              <p>No Added Tasks</p>
            )
          }
        />
        <Route
          path="Done"
          element={
            doneTasks.length > 0 ? (
              <DoneDashboard tasks={doneTasks} />
            ) : (
              <p>No Done Tasks</p>
            )
          }
        />
      </Routes>
    </>
  );
}

export default DashboardLayout;
