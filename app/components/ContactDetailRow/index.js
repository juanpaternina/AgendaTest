/* @flow */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import { MaterialIcons } from '@expo/vector-icons';

const ContactDetailRow = (props) => (
	<View style={[ styles.container, props.style ]}>
		<View style={styles.iconContainer}>
			<MaterialIcons name={props.icon} size={28} color='#2BBBB6' />
		</View>
		<View style={styles.descriptionContainer}>
			<View style={styles.description}>
				<Text style={styles.descriptionText}>{props.description}</Text>
			</View>
			{props.righButton && (
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>CALL</Text>
				</TouchableOpacity>
			)}
		</View>
	</View>
);

export default ContactDetailRow;
