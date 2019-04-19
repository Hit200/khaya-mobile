import { FETCH_SELECTED_ROOM } from '../actions/types';

const initialState = {
	room: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SELECTED_ROOM:
			console.log('Fetching selected room and adding to state ...');
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
};
