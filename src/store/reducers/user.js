export const user = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_WITH_EMAIL':
			return action.payload;
		default:
			return state;
	}
};
