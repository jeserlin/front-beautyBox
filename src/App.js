import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// CSS
import './App.css';

// Main page
import Main from './pages/main/Main';

// My Components
import Logo from './components/logo/Logo';
import GoogleLogin from './components/googleLogin/GoogleLogin';
import FacebookLogin from './components/facebookLogin/FacebookLogin';

const logoStyle = {
  width: '70%',
  height: '70%',
  maxWidth: '250px'
};

class Login extends Component {
  render() {
    return (
      <Grid id="loginFrame">
        <Row className="show-grid">
            <Col className="pb2" xs={12} md={4} mdOffset={4}>
                <center>
                  <Logo style={logoStyle} />
                </center>
            </Col>
            <Col className="frame pt3" xsOffset={1} xs={10} md={6} mdOffset={3}>
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
                      <Link to="/main"><Button className="greyBtn" bsSize="large" block>Login </Button></Link>
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

// Router
class ModalSwitch extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={Main}/>
      </Switch>
    );
  }
}

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;
