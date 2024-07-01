import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Jdate = ({ label, name, value, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <Form.Control
          type="date"
          value={value}
          onChange={handleChange}
        />
      </Col>
    </Form.Group>
  );
};

export default Jdate;
