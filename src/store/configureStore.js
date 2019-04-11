import { createStore, combineReducers } from 'redux';
import reducer from './reducers/root';

const rootReducer = combineReducers({
	properties: reducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
