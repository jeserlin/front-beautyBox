import React, { Component } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import './EditUserPic.css';

// Picture
import defaultPic from '../../img/userPic.png';

class EditUserPic extends Component {
	render() {
		return(
			<div>
				<Image className="max200" src={defaultPic} responsive thumbnail />
				<Col className="pt1"></Col>
				<Button className="max200 pinkBtn" block>上傳照片</Button>
			</div>
		);
	}
}

export default EditUserPic;