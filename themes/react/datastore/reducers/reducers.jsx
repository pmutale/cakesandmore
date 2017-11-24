import { combineReducers } from 'redux'
import { 
	PROGRESS_MAIN_SUCCESS,
	PROGRESS_MAIN_EDITING,
	PROGRESS_EXTRAS_EDIT,
	PROGRESS_EXTRAS_SUCCESS,
	PROGRESS_FLAVOUR_EDITING,
	PROGRESS_FLAVOUR_SUCCESS,
	PROGRESS_SHAPE_EDITING,
	PROGRESS_SHAPE_SUCCESS,
	PROGRESS_SIZE_EDITING,
	PROGRESS_SIZE_SUCCESS,
	PROGRESS_TOPPINGS_EDITING,
	PROGRESS_TOPPINGS_SUCCESS,
	GET_DATA,
	PROGRESS_EXTRAS_EDITING
} from '../actions/index'

const initialState = {
	data: [],
	progress: 0,
	progressMainIsUpdated: false,
	progressMainIsBeingEdited: false,

	progressShapeIsUpdated: false,
	progressShapeIsBeingUpdated: false,

	progressFlavourIsUpdated: false,
	progressFlavourIsBeingUpdated: false,

	progressSizeIsUpdated: false,
	progressSizeIsBeingUpdated: false,

	progressToppingsIsUpdated: false,
	progressToppingsIsBeingUpdated: false,

	progressExtrasIsUpdated: false,
	progressExtrasIsBeingUpdated: false,
	message: '',
	receivedAt: Date.now()
}


export default function cakesReducer (state = initialState, action){
	switch (action.type) {
	
	case PROGRESS_MAIN_SUCCESS:
		console.log('Progress is being Updated by main');
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressMainIsUpdated: true,
			progressMainIsBeingEdited: false,
			message: 'Progress Updated by Main'
		})

	case PROGRESS_MAIN_EDITING:
		console.log('Progress is being Updated by main');
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressMainIsBeingEdited: true,
			progressMainIsUpdated: false,
			message: 'Progress Edited by Main'
		})

	case PROGRESS_FLAVOUR_SUCCESS:
		console.log('Flavours are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressFlavourIsUpdated: true,
			progressFlavourIsBeingUpdated: false,
			message: 'Progress Updated by Flavours'
		})

	case PROGRESS_FLAVOUR_EDITING:
		console.log('Flavours are being updated')
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressFlavourIsUpdated: false,
			progressFlavourIsBeingUpdated: true,
			message: 'Progress Edited by Flavours'
		})

	case PROGRESS_SHAPE_SUCCESS:
		console.log('Shape are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressShapeIsUpdated: true,
			progressShapeIsBeingUpdated: false,
			message: 'Progress Updated by Shape'
		})

	case PROGRESS_SHAPE_EDITING:
		console.log('Shape are being updated')
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressShapeIsUpdated: false,
			progressShapeIsBeingUpdated: true,
			message: 'Progress Updated by Shape'
		})

	case PROGRESS_SIZE_SUCCESS:
		console.log('Size are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressSizeIsUpdated: true,
			progressSizeIsBeingUpdated: false,
			message: 'Progress Updated by Size'
		})

	case PROGRESS_SIZE_EDITING:
		console.log('Size are being updated')
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressSizeIsUpdated: false,
			progressSizeIsBeingUpdated: true,
			message: 'Progress Updated by Size'
		})

	case PROGRESS_TOPPINGS_SUCCESS:
		console.log('Toppings are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressToppingsIsUpdated: true,
			progressToppingsIsBeingUpdated: false,
			message: 'Progress Updated by Toppings'
		})

	case PROGRESS_TOPPINGS_EDITING:
		console.log('Toppings are being updated')
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressToppingsIsUpdated: false,
			progressToppingsIsBeingUpdated: true,
			message: 'Progress Updated by Toppings'
		})

	case PROGRESS_EXTRAS_SUCCESS:
		console.log('Extras are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			progressExtrasIsUpdated: true,
			progressExtrasIsBeingUpdated: false,
			message: 'Progress Updated by Extras'
		})

	case PROGRESS_EXTRAS_EDITING:
		console.log('Extras are being updated')
		return Object.assign({}, state, {
			progress: state.progress - 2,
			progressExtrasIsUpdated: false,
			progressExtrasIsBeingUpdated: true,
			message: 'Progress Updated by Extras'
		})

	case GET_DATA: {
		const { dataLoaded } = action.cake;
		return {
			...dataLoaded
		}
	}
	default: {
		return state
	}
	}
}

 
