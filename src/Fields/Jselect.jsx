import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const Jselect = ({ label, name, value, options, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(name, selectedOption.value);
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <Select
          value={options.find(option => option.value === value)}
          onChange={handleChange}
          options={options}
        />
      </Col>
    </Form.Group>
  );
};

export default Jselect;
