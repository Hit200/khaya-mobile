import { LOGIN_WITH_EMAIL, PROPERTY_DETAILS, RATE, CHECKOUT } from './actionTypes';

export const login = user => ({
	type: LOGIN_WITH_EMAIL,
	payload: user
});

export const rate = property => ({
	type: RATE,
	payload: property
});

export const details = property => ({
	type: PROPERTY_DETAILS,
	payload: property
});

export const checkout = room => ({
	type: CHECKOUT,
	payload: room
});
