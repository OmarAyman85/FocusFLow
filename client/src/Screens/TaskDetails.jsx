import React from "react";
import DashboardNavbar from "./../Components/DashboardNavbar";

const TaskDetails = ({ tasks = [] }) => {
  return (
    <>
      <h1>This is the Task details page</h1>;
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">{tasks.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
            </div>
            <div className="d-flex justify-content-end p-3">
              <button className="btn btn-success">Done</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
