import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; // Theme Provider

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Stack Navigation

// Application Screens
import LoginScreen from './src/components/Login';
import SignupScreen from './src/components/Signup';
import WithEmailScreen from './src/components/WithEmail';
import AsStudentScreen from './src/components/AsStudent';
import AsHouseHostScreen from './src/components/AsHouseHost';
import PropertiesScreen from './src/components/Properties';
import DetailsScreen from './src/components/Details';
import CheckoutScreen from './src/components/Checkout';
import UploadPropertyImageScreen from './src/components/UploadPropertyImages';
import UploadPropertyDetailsScreen from './src/components/UploadPropertyDetails';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

const HomeStackNavigator = createAppContainer(
	createStackNavigator(
		{
			Properties: PropertiesScreen,
			Login: LoginScreen,
			WithEmail: WithEmailScreen,
			AsStudent: AsStudentScreen,
			AsHouseHost: AsHouseHostScreen,
			Signup: SignupScreen,
			Details: DetailsScreen,
			Checkout: CheckoutScreen,
			UploadImages: UploadPropertyImageScreen,
			UploadDetails: UploadPropertyDetailsScreen
		},
		{ initialRouteName: 'Properties', headerMode: 'none' }
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
