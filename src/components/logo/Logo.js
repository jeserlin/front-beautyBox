import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../img/logo.png';

class Logo extends Component {
	render() {
		const logoStyle = this.props.style;
		return (
			<Image src={logo} style={logoStyle} responsive /> 
		);
	}
}

export default Logo;