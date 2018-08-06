/* @flow */

import React from 'react';
import { View, Text } from 'react-native';
import DetailRow from '../ContactDetailRow';
import { styles } from './styles.js';

const ContactDetail = (props) => (
	<View style={styles.container}>
		<DetailRow style={styles.topRow} icon='star' description='Add to favorite' />
		<DetailRow icon='phone' description={props.phone} righButton={true} />
		<DetailRow style={styles.bottomRow} icon='my-location' description={props.location} />
	</View>
);

export default ContactDetail;
