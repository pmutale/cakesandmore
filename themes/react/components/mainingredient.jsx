import React from 'react'
import { Button, FormGroup, Label, Input, Collapse, Card, CardBody, Progress, Row, Col, Container, Grid} from 'reactstrap'
import PropTypes from 'prop-types';
import { 
	manageProgress, 
	manageProgressFlavour, 
	manageProgressShape, 
	manageProgressExtras, 
	manageProgressToppings, 
	manageProgressSize } from '../datastore/actions/index'
import styles from '../../static/styles'

export default class MainIngredient extends React.Component {
	constructor(props){
		super(props);
		this.store = this.props.store
		this.state = {
			collapseMain: false,
			collapseFlavour: false,
			collapseShape: false,
			collapseSize: false,
			collapseToppings: false,
			collapseExtras: false,
			progress: 0
		}

		this.toggleMain = this.toggleMain.bind(this);
		this.toggleFlavour = this.toggleFlavour.bind(this);
		this.toggleShape = this.toggleShape.bind(this);
		this.toggleSize = this.toggleSize.bind(this);
		this.toggleToppings = this.toggleToppings.bind(this);
		this.toggleExtras = this.toggleExtras.bind(this);
		this.saveKeyIngredient = this.saveKeyIngredient(this);
		this.handleMainProgress = this.handleMainProgress.bind(this);
		this.handleFlavourProgress = this.handleFlavourProgress.bind(this);
		this.handleShapeProgress = this.handleShapeProgress.bind(this);
		this.handleSizeProgress = this.handleSizeProgress.bind(this);
		this.handleToppingsProgress = this.handleToppingsProgress.bind(this);
		this.handleExtrasProgress = this.handleExtrasProgress.bind(this);
	}
	

	toggleMain() {
		this.setState({
			collapseMain:  !this.state.collapseMain
		})
	}

	toggleFlavour() {
		this.setState({
			collapseFlavour:  !this.state.collapseFlavour
		})
	}

	toggleShape () {
		this.setState({
			collapseShape: !this.state.collapseShape
		})
	}

	toggleSize () {
		this.setState({
			collapseSize: !this.state.collapseSize
		})
	}

	toggleToppings () {
		this.setState({
			collapseToppings: !this.state.collapseToppings
		})
	}

	toggleExtras () {
		this.setState({
			collapseExtras: !this.state.collapseExtras
		})
	}

	saveKeyIngredient () {
		/**
		 * CALL TO UPDATE DB
		 */
	}

	loadIngredientsData () {
	}

	handleFlavourProgress () {
		this.store.dispatch(manageProgressFlavour)
	}

	handleMainProgress () {
		this.store.dispatch(manageProgress)
	}

	handleShapeProgress () {
		this.store.dispatch(manageProgressShape)
	}

	handleSizeProgress () {
		this.store.dispatch(manageProgressSize)
	}

	handleToppingsProgress () {
		this.store.dispatch(manageProgressToppings)
	}

	handleExtrasProgress () {
		this.store.dispatch(manageProgressExtras)
	}

	render() {
		const { className, buttonLabel } = this.props
		const valueMain = this.store.getState().cake['progress'];
		const valueInPercent = (valueMain /12) * 100;

		return (
			<div>
				<div>
					<Progress animated color='success' value={valueInPercent.toFixed('0')}>{ valueInPercent.toFixed('0') + '%' }</Progress>
					<hr/>
					<Button color='primary' onClick={this.toggleMain}>{this.props.buttonLabel}</Button>
					<Collapse isOpen={this.state.collapseMain}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleMainProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleMain}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>

				<hr/>
				
				<div>
					<Button color='primary' onClick={this.toggleFlavour}>Add a Flavour</Button>
					<Collapse isOpen={this.state.collapseFlavour}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleFlavourProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleFlavour}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
				<hr/>
				
				<div>
					<Button color='primary' onClick={this.toggleShape}>Add a Shape</Button>
					<Collapse isOpen={this.state.collapseShape}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleShapeProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleShape}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
				<hr/>
				
				<div>
					<Button color='primary' onClick={this.toggleSize}>Add a Size</Button>
					<Collapse isOpen={this.state.collapseSize}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleSizeProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleSize}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
				<hr/>
				
				<div>
					<Button color='primary' onClick={this.toggleToppings}>Add a Topping</Button>
					<Collapse isOpen={this.state.collapseToppings}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleToppingsProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleToppings}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
				<hr/>
				
				<div>
					<Button color='primary' onClick={this.toggleExtras}>Add a Extras</Button>
					<Collapse isOpen={this.state.collapseExtras}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									<Button size='sm' color='primary' onClick={this.handleExtrasProgress}>Add to Recept</Button>
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleExtras}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
			</div>
		)
	}
}

MainIngredient.propTypes = {
	isOpen: PropTypes.bool,
	className: PropTypes.string,
	buttonLabel: PropTypes.string,
	store: PropTypes.object
}
