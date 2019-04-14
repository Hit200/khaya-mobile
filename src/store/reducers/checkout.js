export const checkout = (state = {}, action) => {
	switch (action.type) {
		case 'CHECKOUT':
			return action.payload;
		default:
			return state;
	}
};
