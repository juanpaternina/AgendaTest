import { createStackNavigator } from 'react-navigation';

import AgendaScreen from '../screens/AgendaScreen';
import ContactScreen from '../screens/ContactScreen';

console.disableYellowBox = true;

export default createStackNavigator(
	{
		Agenda: AgendaScreen,
		Contact: ContactScreen,
	},
	{
		initialRouteName: 'Agenda',
		// navigationOptions: {
		// 	headerStyle: {
		// 		backgroundColor: 'white',
		// 		shadowColor: 'transparent',
		// 		elevation: 0,
		// 		borderBottomWidth: 0,
		// 	},
		// 	headerTintColor: Color.darkGray,
		// },
	}
);
