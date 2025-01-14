import React, { useState } from "react";
import Joi from "joi-browser";

const AddTask = ({ addNewTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  const statusEnum = ["pending", "in-progress", "completed"];
  const priorityEnum = ["low", "medium", "high"];

  const schema = {
    title: Joi.string().required().max(50).label("Title"),
    description: Joi.string().allow("").label("Description"),
    status: Joi.string()
      .valid(...statusEnum)
      .label("Status"),
    priority: Joi.string()
      .valid(...priorityEnum)
      .label("Priority"),
    dueDate: Joi.date().optional().label("Due Date"),
  };

  const validate = () => {
    const errors = {};
    const result = Joi.validate(
      { title, description, status, priority, dueDate },
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
    const taskData = { title, description, status, priority, dueDate };
    addNewTask(taskData);
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
    setDueDate("");
    console.log("Verified");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "priority":
        setPriority(value);
        break;
      case "dueDate":
        setDueDate(value);
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
                <label htmlFor="title" class="form-label">
                  Title:
                </label>
                <input
                  name="title"
                  value={title}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="title"
                />
                {errors.title && (
                  <div className="text-danger">{errors.title}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label htmlFor="description" class="form-label">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="description"
                />
                {errors.description && (
                  <div className="text-danger">{errors.description}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div className="mb-3">
                <div className="mr-3">
                  <label htmlFor="status" className="form-label mr-3">
                    Priority:
                  </label>
                </div>
                {priorityEnum.map((p) => (
                  <div className="form-check form-check-inline ml-3" key={p}>
                    <input
                      type="radio"
                      id={p}
                      name="priority"
                      value={p}
                      checked={priority === p}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor={p}>
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </label>
                  </div>
                ))}
                {errors.priority && (
                  <div className="text-danger">{errors.priority[0]}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div className="mb-3">
                <div className="mr-3">
                  <label htmlFor="status" className="form-label mr-3">
                    Status:
                  </label>
                </div>
                {statusEnum.map((s) => (
                  <div className="form-check form-check-inline ml-3" key={s}>
                    <input
                      type="radio"
                      id={s}
                      name="status"
                      value={s}
                      checked={status === s}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </label>
                  </div>
                ))}
                {errors.status && (
                  <div className="text-danger">{errors.status[0]}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <div class="mb-3">
                <label htmlFor="dueDate" class="form-label">
                  Due Date:
                </label>
                <input
                  name="dueDate"
                  value={dueDate}
                  onChange={handleChange}
                  type="datetime-local"
                  className="form-control"
                  id="dueDate"
                />
                {errors.dueDate && (
                  <div className="text-danger">{errors.dueDate}</div>
                )}
              </div>
              {/*---------------------------------------------------------------------------------------------*/}
              <button type="submit" class="btn btn-success">
                Submit
              </button>
              {/*---------------------------------------------------------------------------------------------*/}
            </form>
            <div className="mb-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
