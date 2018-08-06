import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './navigation/index.js';
import NavigationService from './helpers/NavigationService';

export default class Root extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Navigation
					ref={(navigatorRef) => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
				<StatusBar barStyle='dark-content' backgroundColor='white' />
			</View>
		);
	}
}
