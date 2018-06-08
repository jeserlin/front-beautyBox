import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//Icon
import FaFacebookOfficia from 'react-icons/lib/fa/facebook-official';

class FacebookLogin extends Component {

	render() {
		return (
			<Button bsStyle="primary" bsSize="large" block><FaFacebookOfficia /> Login </Button>
		);
	}
}

export default FacebookLogin;