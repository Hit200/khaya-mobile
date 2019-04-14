import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import WithEmail from './src/components/WithEmail';
import AsStudent from './src/components/AsStudent';
import AsHouseHost from './src/components/AsHouseHost';
import CheckOut from './src/components/Checkout';
import Properties from './src/components/Properties';

const store = configureStore();

const Main = () => (
	<PaperProvider>
		<Properties />
	</PaperProvider>
);

const App = () => (
	<Provider store={store}>
		<Main />
	</Provider>
);

export default App;
