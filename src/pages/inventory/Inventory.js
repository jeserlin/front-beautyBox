import React, { Component } from 'react';
import { Col, Form, FormControl, Button, Clearfix } from 'react-bootstrap';
import './Inventory.css';

// My Components
import InventoryItem from '../../components/inventoryItem/InventoryItem';

//Icon
import FaPlus from 'react-icons/lib/fa/plus';

const iconStyle = {
  fontSize: '20'
};

class Inventory extends Component {

	render() {
		return(
			<div>
				<h3 className="subhead">
					庫存管理
				</h3>
				<Form className="pb pt">
					<Col className="minPadding" xs={12} sm={4}>
						<FormControl type="text" placeholder="查詢" />
					</Col>
					<Col className="minPadding" xs={10} sm={4}>
						<FormControl componentClass="select" placeholder="select">
							<option value="select">選擇種類</option>
						</FormControl>
					</Col>
					<Col className="minPadding" xs={2} sm={2}>
						<Button className="pinkBtn" type="submit">查詢</Button>
					</Col>
				</Form>
				<Clearfix />
				<Button className="pinkBtn inventoryAddBtn" bsSize="large"><FaPlus style={iconStyle}/></Button>
				<InventoryItem />
				<InventoryItem />
				<InventoryItem />
				<InventoryItem />
				<InventoryItem />
				<InventoryItem />
				<InventoryItem />
			</div>
		);
	}
}

export default Inventory;
