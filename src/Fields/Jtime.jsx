import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Jtime = ({ label, name, value, onChange, format = '24' }) => {
  const [timeFormat, setTimeFormat] = useState(format);
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <div className="d-flex">
          <Form.Control
            type={timeFormat === '24' ? 'time' : 'text'}
            value={value}
            onChange={handleChange}
            placeholder={timeFormat === '24' ? '' : 'hh:mm AM/PM'}
          />
          <Form.Control
            as="select"
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="ms-2"
          >
            <option value="24">24-hour</option>
            <option value="12">12-hour</option>
          </Form.Control>
        </div>
      </Col>
    </Form.Group>
  );
};

export default Jtime;
