import React, { useState, useEffect } from "react";

const FormComponent = ({ row, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(row);
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
    onClose();
  };

  if (!row) return null;

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <button className="close" onClick={onClose}>
        &times;
      </button>
      <h2>Details</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}><strong>{key}</strong></label>
            <input
              type="text"
              className="form-control"
              id={key}
              name={key}
              value={value}
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
