import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 5,
	},
	topRow: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	bottomRow: {
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
});
