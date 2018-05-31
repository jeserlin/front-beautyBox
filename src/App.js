import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';

// My Components
import Logo from './components/logo/Logo';
import GoogleLogin from './components/googleLogin/GoogleLogin';
import FacebookLogin from './components/facebookLogin/FacebookLogin';

const logoStyle = {
  width: '70%',
  height: '70%',
  maxWidth: '250px'
};

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
            <Col className="pb2" xs={12} md={4} mdOffset={4}>
                <center>
                  <Logo style={logoStyle} />
                </center>
            </Col>
            <Col className="frame pt3" xs={12} md={6} mdOffset={3}>
                <Form horizontal>
                  <FormGroup className="pb1">
                    <Col xs={12} md={8} mdOffset={2}>
                      <FormControl id="userId" type="text" placeholder="帳號" />
                    </Col>
                  </FormGroup>
                  <FormGroup className="pb1">
                    <Col xs={12} md={8} mdOffset={2}>
                      <FormControl id="password" type="password" placeholder="密碼" />
                    </Col>
                  </FormGroup>
                  <FormGroup className="pb1">
                    <Col xs={12} md={8} mdOffset={2}>
                      <Button className="greyBtn" bsSize="large" block>Login</Button>
                    </Col>
                  </FormGroup>
                  <FormGroup className="pb1">
                    <Col xs={6} md={4} mdOffset={2}>
                      <GoogleLogin />
                      <p className="pt"><a>加入會員</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                      <FacebookLogin />
                      <p className="pt" align="right"><a>忘記密碼</a></p>
                    </Col>
                  </FormGroup>
                </Form>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
