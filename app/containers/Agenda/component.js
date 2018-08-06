/* @flow */

import React from 'react';
import { View, SectionList, Text } from 'react-native';
import { Loading, ContactRow } from '../../components';

export default class Agenda extends React.Component {
	componentDidMount() {
		this.props.fetchAgenda();
	}

	render() {
		return this.props.loading ? (
			<Loading />
		) : (
			<View style={{ flex: 1, margin: 15 }}>
				<SectionList
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index, section }) => {
						if (index == 0 && index == section.data.length - 1) {
							return (
								<ContactRow
									onPress={this.props.toContact}
									name={item.name}
									job={item.job}
									radiusBottom={true}
									radiusTop={true}
								/>
							);
						} else if (index == section.data.length - 1) {
							return <ContactRow onPress={this.props.toContact} name={item.name} job={item.job} radiusBottom={true} />;
						} else if (index == 0) {
							return <ContactRow onPress={this.props.toContact} name={item.name} job={item.job} radiusTop={true} />;
						} else {
							return <ContactRow onPress={this.props.toContact} name={item.name} job={item.job} />;
						}
					}}
					renderSectionHeader={({ section: { title } }) => (
						<View style={{ flex: 1 }}>
							<Text style={{ fontWeight: 'bold', margin: 8, color: '#666' }}>{title}</Text>
						</View>
					)}
					sections={this.props.contacts}
					keyExtractor={(item, index) => item + index}
				/>
			</View>
		);
	}
}
