/* @flow */

import React from 'react';
import Contact from '../containers/Contact';

export default class Main extends React.Component {
	static navigationOptions = {
		title: 'CONTACT',
	};

	render() {
		return <Contact />;
	}
}
