import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	descriptionContainer: {
		flexDirection: 'row',
		flex: 1,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ccc',
		paddingTop: 25,
		paddingBottom: 25,
	},
	description: {
		flex: 1,
		justifyContent: 'center',
	},
	iconContainer: {
		marginLeft: 25,
		marginRight: 25,
		justifyContent: 'center',
	},
	button: {
		marginRight: 15,
		padding: 5,
		borderRadius: 5,
		backgroundColor: '#33AFAF',
	},
	descriptionText: {
		fontSize: 16,
		color: '#333',
	},
	buttonText: {
		color: '#fff',
	},
});
