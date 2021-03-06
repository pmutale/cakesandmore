import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { Button, Progress, ListGroup, ListGroupItem, ListGroupItemHeading, Collapse, Card, CardBody } from 'reactstrap'
import { fetchingData } from './datastore/actions'
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Main from './components/mainingredient';
import Flavour from './components/flavour';
import Shape from './components/shape';
import Size from './components/size';
import Toppings from './components/toppings';
import Extras from './components/extras';
import TopBar from './components/top-bar'
// import styles from '../static/styles'



export default class Cakes extends React.Component {
	constructor(props){
		super(props);
		this.store = this.props.store
		this.state = {
			data: [],
		}
	}

	componentDidMount () {
		this.store.dispatch(fetchingData).then(response => (this.setState({data:response})))
	}

	render() {
		return (
			<div>
				<Main
					store={this.store}
					className='whatever'
					dataLoaded={this.state.data}
					buttonLabel='Add Main Ingredient(s)'
				/>
				<hr/>
			</div>

		);
	}
}


Cakes.propTypes = {
	store: PropTypes.object
}
