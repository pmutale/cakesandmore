import { combineReducers } from 'redux'
import { 
	GET_PROFILE_DATA
} from '../actions/index'

const initialState = {
	data: [],
	message: '',
	receivedAt: Date.now()
}


export default function cakesReducer (state = initialState, action){
	switch (action.type) {
	
	case GET_PROFILE_DATA: {
		const { profiledataLoaded } = action.user_profile;
		return {
			...profiledataLoaded
		}
	}
	default: {
		return state
	}
	}
}

 
