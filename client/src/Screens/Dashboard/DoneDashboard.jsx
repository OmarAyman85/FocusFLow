import React from "react";
import TaskCard from "../../Components/TaskCard";
import { NavLink } from "react-router-dom";

const DoneDashboard = () => {
  return (
    <>
      <h1>This is the Dashboard page.</h1>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link"
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
          <div class="row">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        {/*------------------------------------------------------------------------------*/}
      </div>
    </>
  );
};

export default DoneDashboard;
