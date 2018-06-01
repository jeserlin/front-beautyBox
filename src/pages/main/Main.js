import React, { Component } from 'react';
import { Col, ButtonGroup, Button } from 'react-bootstrap';
import './Main.css';

// My Components
import Logo from '../../components/logo/Logo';
import NavBar from '../../components/navBar/NavBar';

//Icon
import FaHeart from 'react-icons/lib/fa/heart';
import IoIosBox from 'react-icons/lib/io/ios-box';
import FaUser from 'react-icons/lib/fa/user';
import IoLogOut from 'react-icons/lib/io/log-out';

const logoStyle = {
  width: '150px'
};

const iconStyle = {
	color: '#f7786b',
	fontSize: '20'
}

class Main extends Component {
	render() {
		return ( 
			<div>
				<Col smHidden mdHidden lgHidden>
					<NavBar />
				</Col>
				<Col className="leftPart" md={2} xsHidden smHidden>
					<center>
						<Logo style={logoStyle} />
						<ButtonGroup className="pt5" vertical block>
							<Button><FaHeart style={iconStyle} /> 我的最愛</Button>
					  		<Button><IoIosBox style={iconStyle} /> 庫存管理</Button>
					  		<Button><FaUser style={iconStyle} /> 會員資料</Button>
					  		<Button><IoLogOut style={iconStyle} /> 登出</Button>
						</ButtonGroup>
					</center>
			    </Col>
			    <Col className="rightPart" xs={12} md={10}>
			    	
			    </Col>
			</div>
		);
	}
}

export default Main;