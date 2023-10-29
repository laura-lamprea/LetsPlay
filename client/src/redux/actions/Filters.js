export const FilterCountry = (country) => {
	return async (dispatch) => {
		return dispatch(dispatchCountry(country));
	};
};

const dispatchCountry = (payload) => ({
	type: "FILTER_BY_COUNTRY",
	payload,
});

export const FilterDate = (date) => {
	return async (dispatch) => {
		return dispatch(dispatchDate(date));
	};
};

const dispatchDate = (payload) => ({
	type: "FILTER_BY_DATE",
	payload,
});

export const Searching = (place) => {
	return async (dispatch) => {
		return dispatch(dispatchSearch(place));
	};
};

const dispatchSearch = (payload) => ({
	type: "SEARCH_BY_CITY_OR_ADDRESS",
	payload,
});
