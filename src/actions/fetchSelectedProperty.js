import { FETCH_SELECTED_PROPERTY } from './types';

export const fetchSelectedProperty = id => dispatch => {
	console.log('In fetch selected property action ...');

	dispatch({
		type: FETCH_SELECTED_PROPERTY,
		payload: id
	});
};
