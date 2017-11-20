require("react-hot-loader/patch");
import ReactDOM from'react-dom';
import React from 'react';
import Redbox from 'redbox-react';
import Cakes from './cakes';
import Receipt from './receipt';
import { AppContainer } from 'react-hot-loader';
import PropTypes from 'prop-types';
import configureStore from './datastore/configure/configureStore';


const dataStores = configureStore()

const CustomErrorReporter = ( error ) => <Redbox error={ error }/>;

CustomErrorReporter.PropTypes = {
	error: PropTypes.instanceOf(Error).isRequired
};

const renderApp = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component store={dataStores}/>
		</AppContainer>,
		document.getElementById('cakes')
	);
	
	ReactDOM.render(
		<AppContainer>
			<Receipt store={dataStores}/>
		</AppContainer>,
		document.getElementById('receipt')
	);
}

renderApp(Cakes, Receipt)