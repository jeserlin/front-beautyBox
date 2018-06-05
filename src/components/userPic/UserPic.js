import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './UserPic.css';

// Default User Pic
import Photo from '../../img/userPic.png';

class UserPic extends Component {
	render() {
		const picStyle = this.props.style;
		return (
			<Image className="img-thumbnail-pink" src={Photo} style={picStyle} circle />
		);
	}
}

export default UserPic;