export const propertyDetails = (state = {}, action) => {
	switch (action.type) {
		case 'PROPERTY_DETAILS':
			return action.payload;
		default:
			return state;
	}
};
