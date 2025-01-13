import React from "react";
import { NavLink } from "react-router-dom";

const TaskCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="card text-start mb-3">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <NavLink to="#" className="btn btn-primary">
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
