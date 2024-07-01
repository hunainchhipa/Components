import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Group = ({ children }) => {
  return (
    <Row>
      {React.Children.map(children, (child) => (
        <Col>
          {child}
        </Col>
      ))}
    </Row>
  );
};

export default Group;
