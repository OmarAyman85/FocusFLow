import React from "react";
import TaskCard from "../../Components/TaskCard";

const AddedDashboard = ({ tasks = [] }) => {
  return (
    <>
      <div className="card text-center">
        <div className="container text-center">
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

export default AddedDashboard;
