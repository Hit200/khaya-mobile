import { FETCH_SELECTED_PROPERTY } from './types';

export const fetchSelectedProperty = id => dispatch => {
	console.log('In fetch selected property action ...');

	fetch(`https://khaya-api.herokuapp.com/property/${id}/details`)
		.then(res => res.json())
		.then(res => {
			const { success, ...property } = res;

			dispatch({
				type: FETCH_SELECTED_PROPERTY,
				payload: property
			});
		})
		.catch(error => console.log(error));
};
