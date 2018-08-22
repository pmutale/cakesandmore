import { combineReducers } from 'redux';
import customerProfileReducer from './reducers'

const rootReducers = combineReducers({
	user: customerProfileReducer,
})

export default rootReducers