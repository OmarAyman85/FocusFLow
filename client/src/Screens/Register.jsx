import React from "react";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <form>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3 mt-5">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="firstName"
                ></input>
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="lastName"
                ></input>
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  //aria-describedby="emailHelp"
                ></input>
                {/* <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div className="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                ></input>
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div className="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                ></input>
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
            <div className="mb-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
