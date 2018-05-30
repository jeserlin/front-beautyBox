import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

// My Components
import Logo from './components/logo/Logo';

const logoStyle = {
  width: '70%',
  height: '70%'
};

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={4}>
                <center>
                  <Logo style={logoStyle} />
                </center>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
