import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const JselectCreatable = ({ label, name, value, options, onChange }) => {
  const [localOptions, setLocalOptions] = useState(options);

  const handleCreateOption = (newValue) => {
    // Simulate an API call to create a new department and get its ID
    const newOption = { value: newValue, label: newValue };
    setLocalOptions([...localOptions, newOption]);
    onChange(name, newOption.value);
  };

  const handleChange = (selectedOption) => {
    onChange(name, selectedOption.value);
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <CreatableSelect
          value={localOptions.find(option => option.value === value)}
          onChange={handleChange}
          options={localOptions}
          onCreateOption={handleCreateOption}
          formatCreateLabel={(inputValue) => `Create new "${inputValue}"`}
        />
      </Col>
    </Form.Group>
  );
};

export default JselectCreatable;
