import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		flex: 1,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 5,
	},
	profile: {
		marginLeft: 20,
		marginRight: 20,
	},
	description: {
		flex: 1,
	},
	descriptionContainer: {
		flexDirection: 'row',
		flex: 1,
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ccc',
	},
	name: {
		fontWeight: 'bold',
		color: '#333',
		fontSize: 20,
	},
	job: {
		color: '#aaa',
		fontSize: 16,
	},
	invite: {
		marginTop: 5,
		color: '#2BBBB6',
	},
});
