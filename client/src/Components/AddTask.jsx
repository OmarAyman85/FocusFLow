import React, { useState } from "react";
import Joi from "joi-browser";

const AddTask = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const errors = {};
    const result = Joi.validate(
      { firstName, lastName, email, password },
      schema,
      {
        abortEarly: false,
      }
    );
    if (result.error) {
      result.error.details.forEach((detail) => {
        if (!errors[detail.path[0]]) {
          errors[detail.path[0]] = [];
        }
        errors[detail.path[0]].push(detail.message);
      });
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log("Verified");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <form onSubmit={handleSubmit} noValidate>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3 mt-5">
                <label htmlFor="firstName" class="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="firstName"
                />
                {errors.firstName && (
                  <div className="text-danger">{errors.firstName}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label htmlFor="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="lastName"
                />
                {errors.lastName && (
                  <div className="text-danger">{errors.lastName}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label htmlFor="email" class="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="email"
                  //aria-describedby="emailHelp"
                />
                {errors.email && (
                  <div className="text-danger">{errors.email[0]}</div>
                )}
                {/* <div id="emailHelp" class="form-text">
                   We'll never share your email with anyone else.
                 </div> */}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div className="mb-3">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
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

export default AddTask;
