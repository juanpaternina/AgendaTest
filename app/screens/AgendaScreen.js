/* @flow */

import React from 'react';
import Agenda from '../containers/Agenda';

export default class Main extends React.Component {
	static navigationOptions = {
		title: 'AGENDA',
	};

	render() {
		return <Agenda />;
	}
}
