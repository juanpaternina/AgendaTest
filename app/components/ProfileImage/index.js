import React from 'react';
import { Image } from 'react-native';

const ProfileImage = (props) => (
	<Image
		source={props.src}
		style={[
			{
				width: props.radio * 2,
				height: props.radio * 2,
				borderRadius: props.radio,
				backgroundColor: '#FFF',
			},
			props.style,
		]}
	/>
);

export default ProfileImage;
