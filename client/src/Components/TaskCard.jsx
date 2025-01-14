import React from "react";
import { NavLink } from "react-router-dom";

const TaskCard = ({ task }) => {
  if (!task) return <div>No task data</div>;
  return (
    <>
      <div className="col-3">
        <div className="card text-start mb-3">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            {/* <p className="card-text">Priority: {task.priority}</p>
            <p className="card-text">Status: {task.status}</p>
            <p className="card-text">Due Date: {task.dueDate}</p> */}
            <NavLink to="/Task/:id" className="btn btn-primary" tasks={task}>
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
