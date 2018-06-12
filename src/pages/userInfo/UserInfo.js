import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './UserInfo.css';

// My Components
import EditUserPic from '../../components/editUserPic/EditUserPic';

class UserInfo extends Component {
	render() {
		return(
			<div>
				<h3 className="subhead">會員資料</h3>
				<Col className="pt2" md={4} mdPush={7}>
					<center><EditUserPic /></center>
				</Col>
				<Col className="pt2" xs={12} mdHidden lgHidden></Col>
				<Col className="pt2" md={7} mdPull={4}>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
					    	<Col componentClass={ControlLabel} sm={3}>
								使用者帳號
					    	</Col>
					    	<Col sm={8}>
					      		<FormControl type="text" placeholder="使用者帳號" disabled/>
					    	</Col>
					  	</FormGroup>
					  	<FormGroup controlId="formHorizontalEmail">
					    	<Col componentClass={ControlLabel} sm={3}>
					      		姓名
					    	</Col>
					    	<Col sm={8}>
					      		<FormControl type="text" placeholder="姓名" />
					    	</Col>
					  	</FormGroup>

					  	<FormGroup controlId="formHorizontalPassword">
					    	<Col componentClass={ControlLabel} sm={3}>
					      	生日
					    	</Col>
					    	<Col sm={8}>
					      		<FormControl type="text" placeholder="生日" />
					    	</Col>
						</FormGroup>

					  	<FormGroup controlId="formHorizontalPassword">
					    	<Col componentClass={ControlLabel} sm={3}>
					      		Email
					    	</Col>
					    	<Col sm={8}>
					      		<FormControl type="email" placeholder="Email" />
					    	</Col>
					  	</FormGroup>

					  	<FormGroup>
					    	<Col smOffset={3} sm={9} >
					      		<Button className="pinkBtn" type="submit">存儲</Button>
					    	</Col>
					  	</FormGroup>
					</Form>
				</Col>
			</div>
		);
	}
}

export default UserInfo;
