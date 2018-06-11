import React, { Component } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import './EditUserPic.css';

import defaultPic from '../../img/userPic.png';

class EditUserPic extends Component {
	render() {
		return(
			<Col>
				<Col xs={12}>
					<Image className="max250" src={defaultPic} responsive thumbnail />
				</Col>
				<Col className="pt1" xs={12}>
					<Button className="max250" block>上傳照片</Button>
				</Col>
			</Col>
		);
	}
}

export default EditUserPic;