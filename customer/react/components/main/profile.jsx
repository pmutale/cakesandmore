import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import { fetchingUserData } from '../../datastore/actions'

export default class Profile extends Component {
	constructor(props){
		super(props);
		this.store = this.props.store
		this.state = {
			user: []
		}
	}
	componentDidMount () {
		this.store.dispatch(fetchingUserData).then(response => (this.setState({user:response})))
	}
	render() {
		console.log(this.state.user);
		return (
			<div>
				<Jumbotron fluid>
					<Container fluid>
						<h1 className="display-3">Your profile</h1>
						<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron>
			</div>
		)
	}
}
