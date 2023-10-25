const initialState = {
	games: [],
};

export const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_ALL_GAMES":
			return {
				...state,
				games: action.payload,
			};

		default:
			return state;
	}
};

export default dashboardReducer.reducer;