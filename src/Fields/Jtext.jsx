import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Jtext = ({ label, name, value, onChange, maxLength = 50 }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      onChange(name, e.target.value);
    }
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <Form.Control
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </Col>
    </Form.Group>
  );
};

export default Jtext;
