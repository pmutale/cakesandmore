require("react-hot-loader/patch")
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducers  from '../reducers/index'; 
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const configureStore = preloadedState => {
	const dataStore = createStore(rootReducers, 
		compose(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware
			))
	);
}


export default configureStore