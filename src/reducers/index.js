import { combineReducers } from 'redux';

import fetchUserReducer from './fetchUserReducer';
import fetchSelectedPropertyReducer from './fetchSelectedPropertyReducer';
import fetchSelectedRoomReducer from './fetchSelectedRoom';

export default combineReducers({
	user: fetchUserReducer,
	selectedProperty: fetchSelectedPropertyReducer,
	selectedRoom: fetchSelectedRoomReducer
});
