import { FETCH_USER } from './types';

export const fetchUser = (username, password) => dispatch => {
	console.log('In fetch user action ...');

	fetch(`https://khaya-api.herokuapp.com/parse/login?username=${username}&password=${password}`, {
		method: 'GET',
		headers: {
			'X-Parse-Application-Id': 'parse-khaya-app-ID'
		}
	})
		.then(res => res.json())
		.then(res => {
			const { success, ...user } = res;

			dispatch({
				type: FETCH_USER,
				payload: user
			});

			return user.sessionToken;
		})
		.then(sessionToken => {
			fetch(`https://khaya-api.herokuapp.com/signIn`, {
				method: 'POST',
				body: JSON.stringify({ sessionToken }),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(res => res)
				.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
};
