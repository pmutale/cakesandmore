import React from 'react'
import PropTypes from 'prop-types';
import { Button, Progress, Collapse, Input, Row, Col } from 'reactstrap'
import { manageProgressFlavour } from '../datastore/actions/index'

export default class Flavour extends React.Component {
	constructor(props){
		super(props);
		this.store = this.props.store
		this.state = {
			progress: 0
		}

		this.toggle = this.toggle.bind(this)
		this.handleProgress = this.handleProgress.bind(this)
	}

	toggle() {
		this.setState({
			collapse:  !this.state.collapse
		})
	}

	handleFlavourProgress () {
		this.store.dispatch(manageProgressFlavour)
	}
	
	render() {
		console.log('Flavour =>', this.store.getState().cake['progress'])
		const value = this.store.getState().cake['progress'];
		return (
			<div>
				<div>
					<Progress value={value}>{value + '%'}</Progress>
					<Button color='primary' onClick={this.toggle}>Add a Flavour</Button>
					<Collapse isOpen={this.state.collapse}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggle}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
			</div>
		)
	}
}

Flavour.PropTypes = {
	store: PropTypes.string
};