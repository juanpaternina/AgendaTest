/* @flow */

import React from 'react';
import { View, SectionList, Text } from 'react-native';
import { Loading, ContactCard, ContactDetail } from '../../components';

export default class Agenda extends React.Component {
	componentDidMount() {
		this.props.fetchContact();
	}

	render() {
		return this.props.loading ? (
			<Loading />
		) : (
			<View style={{ flex: 1, padding: 10 }}>
				<ContactCard
					firstName={this.props.contact.firstName}
					lastName={this.props.contact.lastName}
					picture={this.props.contact.picture}
				/>
				<ContactDetail location={this.props.contact.location} phone={this.props.contact.phone} />
			</View>
		);
	}
}
