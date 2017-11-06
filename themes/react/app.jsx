require("react-hot-loader/patch")
import ReactDOM from'react-dom';
import React from 'react';
import Cakes from './cakes';
import { AppContainer } from 'react-hot-loader';


const renderApp = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('cakes')
	)
}

renderApp(Cakes)


if (module.hot) {
	module.hot.accept();
	console.log('NODE_ENV: ', '???')
}