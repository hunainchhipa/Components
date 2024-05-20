import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = ({ row, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    if (row) {
      setFormData(row);
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
      });
    }
  }, [row]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <button className="close" onClick={onClose}>
        &times;
      </button>
      <h2>{row ? "Edit Record" : "Create New Record"}</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>
              <strong>{key.replace("_", " ")}</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
