import { createStore, combineReducers } from 'redux';
import { user } from './reducers/user';
import propertyDetails from './reducers/propertyDetails';
import rate from './reducers/rate';
import checkout from './reducers/checkout';

const rootReducer = combineReducers({
	user: user
});

export const configureStore = () => createStore(rootReducer);
