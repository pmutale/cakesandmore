import React, { Component } from 'react'
import { fetchingData } from './datastore/actions/index'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


export default class Receipt extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}

	}
    
	componentDidMount () {
		this.props.store.dispatch(fetchingData).then(response => (this.setState({data:response})))
	}
	render() {
		const store = this.props.store.getState();
		const { cake } = this.state.data
		console.log(cake)
		return (
			<ListGroup>
				<ListGroupItem>
					<ListGroupItemHeading>Main Ingredients</ListGroupItemHeading>
					<ListGroupItemText> Maecenas sed diam eget ri </ListGroupItemText>
					<ListGroupItemHeading>Flavour</ListGroupItemHeading>
					<ListGroupItemText>Maecenas sed diam eget ri</ListGroupItemText>
					<ListGroupItemHeading>Shape</ListGroupItemHeading>
					<ListGroupItemText>Maecenas sed diam eget ri</ListGroupItemText>
					<ListGroupItemHeading>Size</ListGroupItemHeading>
					<ListGroupItemText>Maecenas sed diam eget ri</ListGroupItemText>
					<ListGroupItemHeading>Toppings</ListGroupItemHeading>
					<ListGroupItemText>Maecenas sed diam eget ri</ListGroupItemText>
					<ListGroupItemHeading>Extras</ListGroupItemHeading>
					<ListGroupItemText>Maecenas sed diam eget ri</ListGroupItemText>
				</ListGroupItem>
			</ListGroup>
		)
	}
}
