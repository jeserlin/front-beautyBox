import React, { Component } from 'react';
import { Col, ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Main.css';

// My Components
import Logo from '../../components/logo/Logo';
import NavBar from '../../components/navBar/NavBar';
import UserPic from '../../components/userPic/UserPic';

//Icon
import FaHeart from 'react-icons/lib/fa/heart';
import IoIosBox from 'react-icons/lib/io/ios-box';
import FaUser from 'react-icons/lib/fa/user';
import IoLogOut from 'react-icons/lib/io/log-out';

//Pages
import MyFavorite from '../../pages/myFavorite/MyFavorite';
import Inventory from '../../pages/inventory/Inventory';
import UserInfo from '../../pages/userInfo/UserInfo';


const logoStyle = {
  width: '150px'
};

const iconStyle = {
	color: '#f7786b',
	fontSize: '20'
}

const userPic = {
	width: '50px'
}

class Main extends Component {
	render() {
		return ( 
			<Router>
				<div>
					<Col mdHidden lgHidden>
						<NavBar />
					</Col>
					<Col className="leftPart" md={2} xsHidden smHidden>
						<center>
							<Logo style={logoStyle} />
							<ButtonGroup className="pt5" vertical block>
								<Link to="/myFavorite"><Button><FaHeart style={iconStyle} /> 我的最愛 </Button></Link>
						  		<Link to="/inventory"><Button><IoIosBox style={iconStyle} /> 庫存管理 </Button></Link>
						  		<Link to="/userInfo"><Button><FaUser style={iconStyle} /> 會員資料 </Button></Link>
						  		<Link to="/userInfo"><Button><IoLogOut style={iconStyle} /> 會員登出 </Button></Link>
							</ButtonGroup>
						</center>
				    </Col>
				    <Col className="rightPart" xs={12} md={10}>
				    	<Col align="right" xsHidden smHidden>
				    		<UserPic style={userPic} />
				    	</Col>
				    	<Col className="pt5">
				    		<Route path="/myFavorite" component={MyFavorite} />
				    		<Route path="/inventory" component={Inventory} />
				    		<Route path="/userInfo" component={UserInfo} />
				    	</Col>
				    </Col>
				</div>
			</Router>
		);
	}
}

export default Main;