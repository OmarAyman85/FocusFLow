import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <form>
              <div class="mb-3 mt-5">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  //aria-describedby="emailHelp"
                ></input>
                {/* <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label class="form-check-label" for="exampleCheck1">
                  Remeber me
                </label>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
