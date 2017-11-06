import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Button, Progress, ListGroup, ListGroupItem, ListGroupItemHeading, Collapse, Card, CardBody } from 'reactstrap'

import Main from './components/mainingredient';
import Flavour from './components/flavour'
import Shape from './components/shape'
import Size from './components/size'
import Toppings from './components/toppings'
import Extras from './components/extras'



export default class Cakes extends React.Component {
	constructor(){
		super();
		this.toggle = this.toggle.bind(this);
		this.state = {collapse: false}
	}
    
	toggle() {
		this.setState({collapse: !this.state.collapse})
	}
    
	render() {
		return (
			<div>
				<Progress value='10'>10%</Progress>
				<Main className='whatever' buttonLabel='Add Main Ingredient'/>
				<Flavour/>
				<Shape/>
				<Size/>
				<Toppings/>
				<Extras/>
			</div>
			
		);
	}
}