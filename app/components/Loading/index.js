/* @flow */

import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles.js';

const Loading = (props) => (
	<View style={styles.container}>
		<ActivityIndicator style={styles.activityIndicator} animating={true} />
		<Text style={{ marginTop: 16, fontSize: 20, textAlign: 'center' }}>{props.description}</Text>
	</View>
);

export default Loading;
