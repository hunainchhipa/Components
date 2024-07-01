import React, { useState } from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

const Jmonetary = ({ label, name, value, onChange, currencies = ['USD', 'EUR', 'GBP'] }) => {
  const [currency, setCurrency] = useState(currencies[0]);

  const handleChange = (e) => {
    const floatValue = parseFloat(e.target.value);
    if (!isNaN(floatValue)) {
      onChange(name, floatValue);
    }
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <InputGroup>
          <InputGroup.Text>{currency}</InputGroup.Text>
          <Form.Control
            type="number"
            step="0.01"
            value={value}
            onChange={handleChange}
          />
          <Form.Control
            as="select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="ms-2"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </Form.Control>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Jmonetary;
