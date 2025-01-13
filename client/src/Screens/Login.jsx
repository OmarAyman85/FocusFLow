import React, { useState } from "react";
import Joi from "joi-browser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const errors = {};
    const result = Joi.validate({ email, password }, schema, {
      abortEarly: false,
    });
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
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3 mt-5">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
              />
              {errors.email && (
                <div className="text-danger">{errors.email[0]}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
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
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { Component } from "react";

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   handleChange = (e) => {
//     console.log("Handled");
//     //clone
//     let state = { ...this.state };
//     //edit
//     state[e.currentTarget.name] = e.currentTarget.value;
//     //setState
//     this.setState(state);
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="row justify-content-md-center">
//             <div className="col-8">
//               <form>
//                 <div class="mb-3 mt-5">
//                   <label for="email" class="form-label">
//                     Email address
//                   </label>
//                   <input
//                     name="email"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     //aria-describedby="emailHelp"
//                   ></input>
//                   {/* <div id="emailHelp" class="form-text">
//                     We'll never share your email with anyone else.
//                   </div> */}
//                 </div>
//                 <div className="mb-3">
//                   <label for="password" class="form-label">
//                     Password
//                   </label>
//                   <input
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     type="password"
//                     className="form-control"
//                     id="password"
//                   ></input>
//                 </div>
//                 <div className="mb-3 form-check">
//                   <input
//                     type="checkbox"
//                     class="form-check-input"
//                     id="exampleCheck1"
//                   ></input>
//                   <label class="form-check-label" for="exampleCheck1">
//                     Remeber me
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   class="btn btn-success"
//                   onClick={this.handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Login;
