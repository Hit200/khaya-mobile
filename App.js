import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/components/Login';
import SignupScreen from './src/components/Signup';
import WithEmailScreen from './src/components/WithEmail';
import AsStudentScreen from './src/components/AsStudent';
import AsHouseHostScreen from './src/components/AsHouseHost';
import CheckOutScreen from './src/components/Checkout';
import PropertiesScreen from './src/components/Properties';
import DetailsScreen from './src/components/Detail';
import store from './src/store';

const HomeStackNavigator = createAppContainer(
	createStackNavigator(
		{
			Properties: PropertiesScreen,
			Details: DetailsScreen,
			Login: LoginScreen,
			WithEmail: WithEmailScreen,
			AsStudent: AsStudentScreen,
			AsHouseHost: AsHouseHostScreen,
			Signup: SignupScreen
		},
		{ headerMode: 'none' }
	)
);

const Main = () => (
	<PaperProvider>
		<HomeStackNavigator />
	</PaperProvider>
);

const App = () => (
	<Provider store={store}>
		<Main />
	</Provider>
);

export default App;
