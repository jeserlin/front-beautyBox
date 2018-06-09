import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Col, Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../img/favicon.png';

class NavBar extends Component {
	render() {
		return(
			<Navbar fixedTop>
				<Navbar.Header>
			    	<Navbar.Brand>
			      		<a className="navbar-brand" href="#brand">
			      			<Col xs={3}>
			      				<Image className="logo" src={logo} alt="logo" />
			      			</Col>
			      			<Col xs={9}>
			      				<div className="logo-text">BeautyBox</div>
			      			</Col>
			      		</a>
			    	</Navbar.Brand>
			    	<Navbar.Toggle />
			  	</Navbar.Header>
			  	<Navbar.Collapse>
			  		<Nav>
			  			<LinkContainer to="/myFavorite">
					    	<NavItem eventKey={1} href="#">
					      		我的最愛
					    	</NavItem>
				    	</LinkContainer>
				    	<LinkContainer to="/inventory">
					    	<NavItem eventKey={2} href="#">
					      		庫存管理
					    	</NavItem>
					    </LinkContainer>
					    <LinkContainer to="/userInfo">
					    	<NavItem eventKey={3} href="#">
					      		會員資料
					    	</NavItem>
				    	</LinkContainer>
					    <NavItem eventKey={4} href="#">
					      	登出
					    </NavItem>
				  	</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;