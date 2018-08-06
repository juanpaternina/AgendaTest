/* @flow */

import React from 'react';
import { View, Text } from 'react-native';
import ProfileImage from '../ProfileImage';
import { styles } from './styles.js';

const ContactRow = (props) => (
	<View style={styles.container}>
		<View style={styles.top}>
			<ProfileImage style={styles.profile} radio={40} src={{ uri: props.picture }} />
			<View style={styles.description}>
				<Text style={styles.name}>
					{props.firstName} {props.lastName}
				</Text>
				<Text style={styles.job}>Drywall Constractor's</Text>
			</View>
		</View>
		<View style={styles.bottom}>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.name}>112</Text>
				<Text style={styles.job}>Contacts</Text>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.name}>48</Text>
				<Text style={styles.job}>Favourites</Text>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.name}>8</Text>
				<Text style={styles.job}>Groups</Text>
			</View>
		</View>
	</View>
);

export default ContactRow;
