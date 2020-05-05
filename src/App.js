import React from 'react';
import Login from './components/login';
import { Container , Row, Col } from 'react-bootstrap';
// import Signup from './components/signup';

// import Dashboard from './components/Dashboard';
// import Signup from './components/Signup';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Login />
          {/* <Signup/> */}
          
          {/* <Dashboard/> */}
          {/* <Signup/> */}
        </Col>
      </Row>
    </Container>
  );
}
export default App;
