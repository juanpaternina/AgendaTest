/* @flow */

import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ProfileImage from '../ProfileImage';
import { styles } from './styles.js';
import { MaterialIcons } from '@expo/vector-icons';

const ContactRow = (props) => (
	<TouchableWithoutFeedback onPress={props.onPress}>
		<View
			style={[
				styles.container,
				props.radiusTop && { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
				props.radiusBottom && { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
			]}
		>
			<ProfileImage style={styles.profile} radio={17} src={require('../../../assets/profile.jpg')} />
			<View style={styles.descriptionContainer}>
				<View style={styles.description}>
					<Text style={styles.name}>{props.name}</Text>
					<Text style={styles.job}>{props.job}</Text>
					{props.invited && <Text style={styles.invite}>Invite Sent</Text>}
				</View>
				<TouchableOpacity style={{ marginRight: 10, justifyContent: 'center' }}>
					<MaterialIcons name='star-border' size={20} color='#ccc' />
				</TouchableOpacity>
			</View>
		</View>
	</TouchableWithoutFeedback>
);

export default ContactRow;
