import { FETCH_SELECTED_PROPERTY } from '../actions/types';

const initialState = {
	id: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SELECTED_PROPERTY:
			console.log('Fetching selected property and adding to state ...');
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
};
