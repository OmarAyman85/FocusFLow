import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <>
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
    </>
  );
};

export default DashboardNavbar;
