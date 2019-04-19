import { FETCH_USER } from '../actions/types';

const initialState = {
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			console.log('Fetching current user and adding to state ...');
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
};
