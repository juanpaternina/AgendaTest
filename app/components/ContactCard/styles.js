import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 5,
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 20,
		paddingRight: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: '#2BBBB6',
	},

	bottom: {
		justifyContent: 'space-around',
		backgroundColor: '#33AFAF',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
	},

	description: {
		flex: 1,
		marginLeft: 15,
	},
	name: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 20,
	},
	job: {
		color: '#fff',
		fontSize: 16,
	},
});
