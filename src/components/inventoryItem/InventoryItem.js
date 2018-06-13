import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import './InventoryItem.css';

// Picture
import defaultPic from '../../img/stockPic.png';

class InventoryItem extends Component {

	render() {
		return(
			<Col className="item" xs={6} sm={4} md={3} lg={2}>
				<Thumbnail src={defaultPic} alt="242x200">
					<h5>品項名稱</h5>
					<p>庫存 ：</p>
				</Thumbnail>
			</Col>
		);
	}
}

export default InventoryItem;
