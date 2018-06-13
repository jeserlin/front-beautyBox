import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Inventory.css';

//Icon
import FaPlus from 'react-icons/lib/fa/plus';

class Inventory extends Component {

	render() {
		return(
			<div>
				<h3 className="subhead">
					庫存管理
				</h3>
				<Button className="pinkBtn inventoryAddBtn" bsSize="large"><FaPlus /></Button>
			</div>
		);
	}
}

export default Inventory;
