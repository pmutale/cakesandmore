import { combineReducers } from 'redux'
import { 
	PROGRESS_MAIN_SUCCESS,
	PROGRESS_FLAVOUR_SUCCESS,
	PROGRESS_EXTRAS_SUCCESS,
	PROGRESS_SHAPE_SUCCESS,
	PROGRESS_SIZE_SUCCESS,
	PROGRESS_TOPPINGS_SUCCESS,
	GET_DATA 
} from '../actions/index'

const initialState = {
	data: [],
	progress: 0,
	message: '',
	receivedAt: Date.now()
}


export default function cakesReducer (state = initialState, action){
	switch (action.type) {
	
	case PROGRESS_MAIN_SUCCESS:
		console.log('Progress is being Updated by main');
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Main'
		})

	case PROGRESS_FLAVOUR_SUCCESS:
		console.log('Flavours are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Flavours'
		})

	case PROGRESS_SHAPE_SUCCESS:
		console.log('Shape are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Shape'
		})

	case PROGRESS_SIZE_SUCCESS:
		console.log('Size are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Size'
		})

	case PROGRESS_TOPPINGS_SUCCESS:
		console.log('Toppings are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Toppings'
		})

	case PROGRESS_EXTRAS_SUCCESS:
		console.log('Extras are being updated')
		return Object.assign({}, state, {
			progress: state.progress + 2,
			message: 'Progress Updated by Extras'
		})
		
	default:
		return state
	}
}

 
