import { combineReducers } from 'redux';
import cakesReducer from './reducers'

const rootReducers = combineReducers({
	cake: cakesReducer,
})

export default rootReducers