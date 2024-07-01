import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const Jmultiselect = ({ label, name, value, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(value.map(val => ({
    value: val,
    label: options.find(opt => opt.value === val)?.label || val
  })));

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    const selectedValues = selectedOptions.map(opt => opt.value);
    onChange(name, selectedValues);
  };

  const handleCreateOption = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    setSelectedOptions([...selectedOptions, newOption]);
    onChange(name, [...selectedOptions.map(opt => opt.value), newOption.value]);
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <Select
          isMulti
          value={selectedOptions}
          onChange={handleChange}
          options={options}
          onCreateOption={handleCreateOption}
          formatCreateLabel={(inputValue) => `Create new "${inputValue}"`}
        />
      </Col>
    </Form.Group>
  );
};

export default Jmultiselect;
