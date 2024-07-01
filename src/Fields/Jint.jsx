import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Jint = ({ label, name, value, onChange }) => {
  const handleChange = (e) => {
    const intValue = parseInt(e.target.value, 10);
    if (!isNaN(intValue)) {
      onChange(name, intValue);
    }
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <Form.Control
          type="number"
          value={value}
          onChange={handleChange}
        />
      </Col>
    </Form.Group>
  );
};

export default Jint;
