import React, { Component } from 'react'
import { fetchingData } from './datastore/actions/index'

export default class Receipt extends Component {
	constructor() {
		super();
		// this.store = this.props.store

	}
    
	getMainIngredients () {
		this.props.store.dispatch(fetchingData)
	}
	render() {
		const store = this.props.store.getState();
		console.log(store)
		return (
			<div>
                This is the Receipt {store.cake['progress']}
			</div>
		)
	}
}
