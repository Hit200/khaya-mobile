export const rate = (state = {}, action) => {
	switch (action.type) {
		case 'RATE':
			return action.payload;
		default:
			return state;
	}
};
