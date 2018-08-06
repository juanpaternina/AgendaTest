import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/config/store';
import ReduxedApp from './app/index.js';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ReduxedApp />
			</Provider>
		);
	}
}
