import React, { Component } from 'react';
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
			      				<Image className="logo" src={logo} alt="logo"/>
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
				    	<NavItem eventKey={1} href="#">
				      		Link
				    	</NavItem>
				    	<NavItem eventKey={2} href="#">
				      		Link
				    	</NavItem>
				  	</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;