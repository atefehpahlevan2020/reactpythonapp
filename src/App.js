import React from 'react';
import Login from './components/login';
import { Container , Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
