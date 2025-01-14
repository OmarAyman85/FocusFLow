import React, { useState } from "react";
import TaskCard from "../../Components/TaskCard";
import { NavLink } from "react-router-dom";

const ActiveDashboard = ({ tasks = [] }) => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/Dashboard/Active"
                style={{ color: "green" }}
              >
                Active
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Dashboard/Added"
                style={{ color: "blue" }}
              >
                Added
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Dashboard/Done"
                style={{ color: "red" }}
              >
                Done
              </NavLink>
            </li>
          </ul>
        </div>
        {/*------------------------------------------------------------------------------*/}
        <div class="container text-center">
          <div className="row">
            {tasks.length === 0 ? (
              <div className="mt-3">
                <p>No tasks available.</p>
              </div>
            ) : (
              tasks.map((task, index) => <TaskCard key={index} task={task} />)
            )}
          </div>
        </div>
        {/*------------------------------------------------------------------------------*/}
      </div>
    </>
  );
};

export default ActiveDashboard;
