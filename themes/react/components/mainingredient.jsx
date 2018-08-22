import React from 'react'
import { Button, FormGroup, Label, Input, Collapse, Card, CardBody, Progress, Row, Col, Container, Grid} from 'reactstrap'
import PropTypes from 'prop-types';
import * as types from '../datastore/actions/index'
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
		this.doubleMainTrouble = this.doubleMainTrouble.bind(this);

		this.doubleFlavourTrouble = this.doubleFlavourTrouble.bind(this);
		this.handleFlavourProgress = this.handleFlavourProgress.bind(this);

		this.handleShapeProgress = this.handleShapeProgress.bind(this);
		this.doubleShapeTrouble = this.doubleShapeTrouble.bind(this);

		this.handleSizeProgress = this.handleSizeProgress.bind(this);
		this.doubleSizeTrouble = this.doubleSizeTrouble.bind(this);

		this.handleToppingsProgress = this.handleToppingsProgress.bind(this);
		this.doubleToppingsTrouble = this.doubleToppingsTrouble.bind(this);

		this.handleExtrasProgress = this.handleExtrasProgress.bind(this);
		this.doubleExtrasTrouble = this.doubleExtrasTrouble.bind(this);
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
		this.store.dispatch(types.manageProgressFlavour)
	}

	handleMainProgress () {
		this.store.dispatch(types.manageMainProgress)
	}

	handleShapeProgress () {
		this.store.dispatch(types.manageProgressShape)
	}

	handleSizeProgress () {
		this.store.dispatch(types.manageProgressSize)
	}

	handleToppingsProgress () {
		this.store.dispatch(types.manageProgressToppings)
	}

	handleExtrasProgress () {
		this.store.dispatch(types.manageProgressExtras)
	}

	doubleMainTrouble () {
		this.toggleMain();
		this.store.dispatch(types.manageMainProgressEditing)
	}

	doubleFlavourTrouble () {
		this.toggleFlavour();
		this.store.dispatch(types.manageProgressFlavourEdit);
	}

	doubleShapeTrouble () {
		this.toggleShape();
		this.store.dispatch(types.manageProgressShapeEdit);
	}

	doubleSizeTrouble () {
		this.toggleSize(); 
		this.store.dispatch(types.manageProgressSizeEdit);
	}
	
	doubleToppingsTrouble () {
		this.toggleToppings(); 
		this.store.dispatch(types.manageProgressToppingsEdit);
	}

	doubleExtrasTrouble () {
		this.toggleExtras(); 
		this.store.dispatch(types.manageProgressExtrasEdit);
	}

	render() {
		const { className, buttonLabel } = this.props
		const valueMain = this.store.getState().cake['progress'];

		const mainIsUpdated = this.store.getState().cake['progressMainIsUpdated'];
		const mainIsEditing = this.store.getState().cake['progressMainIsBeingEdited'];

		const flavourIsUpdated = this.store.getState().cake['progressFlavourIsUpdated'];
		const flavourIsBeingUpdated = this.store.getState().cake['progressFlavourIsBeingUpdated'];

		const sizeIsUpdated = this.store.getState().cake['progressSizeIsUpdated'];
		const sizeIsBeingUpdated = this.store.getState().cake['progressSizeIsBeingUpdated'];

		const shapeIsUpdated = this.store.getState().cake['progressShapeIsUpdated'];
		const shapeIsBeingUpdated = this.store.getState().cake['progressShapeIsBeingUpdated'];

		const toppingsIsUpdated = this.store.getState().cake['progressToppingsIsUpdated'];
		const toppingsIsBeingUpdated = this.store.getState().cake['progressToppingsIsBeingUpdated'];

		const extrasIsUpdated = this.store.getState().cake['progressExtrasIsUpdated'];
		const extrasIsBeingUpdated = this.store.getState().cake['progressExtrasIsBeingUpdated'];
		
		const valueInPercent = (valueMain /12) * 100;

		return (
			<div>
				<div>
					<Progress animated color='success' value={valueInPercent.toFixed('0')}>
						{ valueInPercent.toFixed('0') + '%' }
					</Progress>
					<hr/>
					{ 
						!mainIsEditing === !mainIsUpdated ? 
							<Button 
								color={!mainIsEditing ? 'primary' : 'success'} 
								onClick={this.toggleMain}>{this.props.buttonLabel}</Button> : 
							!mainIsEditing && mainIsUpdated ?
								<Button color='info' onClick={this.doubleMainTrouble}>Edit Main Ingredients</Button> : 
								<Button color='warning' onClick={this.toggleMain}>
									Edit Main Ingredients
								</Button>
					}
					<Collapse isOpen={this.state.collapseMain}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { 'I am a potatoes' }
							<Row>
								<Col xs={12} md={8}>
									{ !mainIsUpdated ? 
										<Button size='sm' 
											color='primary' 
											onClick={ this.handleMainProgress }>
											Add to Recept
										</Button> :  
										<Button color='link'>Save Changes to Main Ingredients</Button> }
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
					{
						!flavourIsBeingUpdated === !flavourIsUpdated ?
							<Button 
								color={!flavourIsBeingUpdated ? 'primary' : 'success'}
								onClick={this.toggleFlavour}>Add a Flavour</Button> :
							!flavourIsBeingUpdated && flavourIsUpdated ?
								<Button color='info' onClick={this.doubleFlavourTrouble}>Edit Flavours</Button> :
								<Button color='warning' onClick={this.toggleFlavour}>Edit Flavour</Button>

					}
					<Collapse isOpen={this.state.collapseFlavour}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									{ !flavourIsUpdated ?
										<Button size='sm' color='primary' onClick={this.handleFlavourProgress}>
										Add to Recept
										</Button> : <Button color='link'>Edit Flavours</Button> }
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
					{
						!shapeIsBeingUpdated === !shapeIsUpdated ?
							<Button 
								color={!shapeIsBeingUpdated ? 'primary' : 'success'} 
								onClick={this.toggleShape}>Add a Shape</Button> :
							!shapeIsBeingUpdated && shapeIsUpdated ? 
								<Button color='info' onClick={this.doubleShapeTrouble}>Edit Shape</Button> :
								<Button color='warning' onClick={this.toggleShape}>Edit Shape</Button>
					}
					<Collapse isOpen={this.state.collapseShape}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									{ !shapeIsUpdated ?
										<Button size='sm' color='primary' onClick={this.handleShapeProgress}>
									Add to Recept
										</Button> : <Button color='link'>Edit Shape</Button> }
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
					{
						!sizeIsBeingUpdated === !sizeIsUpdated ?
							<Button 
								color={!sizeIsBeingUpdated ? 'primary' : 'success'} 
								onClick={this.toggleSize}> Add a Size </Button> : 
							!sizeIsBeingUpdated && sizeIsUpdated ?
								<Button color='info' onClick={this.doubleSizeTrouble}>Edit Size</Button>:
								<Button color='warning' onClick={this.toggleSize}>Edit Size</Button>
					}
					<Collapse isOpen={this.state.collapseSize}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									{ !sizeIsUpdated ?
										<Button size='sm' color='primary' onClick={this.handleSizeProgress}>
										Add to Recept
										</Button> : <Button color='link'>Edit Size</Button> }
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
					{
						!toppingsIsBeingUpdated === !toppingsIsUpdated ?
							<Button 
								color={!toppingsIsBeingUpdated ? 'primary' : 'success'}  
								onClick={this.toggleToppings}>Add a Topping</Button> :
							!toppingsIsBeingUpdated && toppingsIsUpdated ?
								<Button color='info' onClick={this.doubleToppingsTrouble}>Edit Toppings</Button>:
								<Button color='warning' onClick={this.toggleToppings}>Edit Toppings</Button>
					}
					<Collapse isOpen={this.state.collapseToppings}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									{ !toppingsIsUpdated ?
										<Button size='sm' color='primary' onClick={this.handleToppingsProgress}>
											Add to Recept
										</Button> : <Button color='link'>Edit Toppings</Button> }
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
					{
						!extrasIsBeingUpdated === !extrasIsUpdated ?
							<Button 
								color={!extrasIsBeingUpdated ? 'primary' : 'success'} 
								onClick={this.toggleExtras}>Add a Extras</Button> :
							!extrasIsBeingUpdated && extrasIsUpdated ?
								<Button color='info' onClick={this.doubleExtrasTrouble}>Edit Extras</Button>:
								<Button color='warning' onClick={this.toggleExtras}>Edit Extras</Button>
					}
					<Collapse isOpen={this.state.collapseExtras}>
						<div>
							<h4>Ingredients are to choose from:</h4>
							<Input type='checkbox'/> { }
							<Row>
								<Col xs={12} md={8}>
									{ !extrasIsUpdated ?
										<Button size='sm' color='primary' onClick={this.handleExtrasProgress}>
											Add to Recept
										</Button> : <Button color='link'>Edit Extras</Button> }
								</Col>
								<Col xs={6} md={4}>
									<Button color='success' onClick={this.toggleExtras}>Next</Button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</div>
				<hr/>
				<div className='pull-right'>
					<Button type='submit' color='success' size='lg' onClick={() => this.store.dispatch(types.fetchingData)}>Make Your order</Button>
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
