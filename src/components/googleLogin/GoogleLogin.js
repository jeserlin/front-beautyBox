import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//Icon
import FaGoogle from 'react-icons/lib/fa/google';

class GoogleLogin extends Component {
	render() {
		return (
			<Button bsStyle="danger" bsSize="large" block><FaGoogle /> Login</Button>
		);
	}
}

export default GoogleLogin;