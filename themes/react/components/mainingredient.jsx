import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types';

export default class MainIngredient extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false
		}
        

		this.toggle = this.toggle.bind(this);
		this.saveKeyIngredient = this.saveKeyIngredient(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}
    
	saveKeyIngredient () {

	}
	render() {
		const {className, buttonLabel} = this.props
		return (
			<div>
				<Button color='primary' onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Add the key Ingredient</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Label check>
								<Input type='checkbox'/>{' '}
							</Label>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color='primary' onClick={this.saveKeyIngredient}>Save Key Ingredient</Button>
						<Button color='primary' onClick={this.saveKeyIngredient}>Cancel Ingredient</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

MainIngredient.propTypes = {
	isOpen:  PropTypes.bool,
	autoFocus: PropTypes.bool,
	buttonLabel: PropTypes.string,
	size: PropTypes.string,
	toggle:  PropTypes.func,
	role: PropTypes.string, // defaults to "dialog"
	labelledBy: PropTypes.string,
	keyboard: PropTypes.bool,
	backdrop: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf(['static'])
	]),
	onEnter: PropTypes.func,
	onExit: PropTypes.func,
	onOpened: PropTypes.func,
	onClosed: PropTypes.func,
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	fade: PropTypes.bool,
	cssModule: PropTypes.object,
	zIndex: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
}