import { createSlice } from "@reduxjs/toolkit";
import { GetAllGames } from "../actions/GetAllGames";

const initialState = {
	games: [],
	is_loading_games: false,
};

export const dashboardReducer = createSlice({
	name: "games",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(GetAllGames.pending, (state) => {
				return { ...state, is_loading_games: true };
			})
			.addCase(GetAllGames.fulfilled, (state, action) => {
				return {
					...state,
					is_loading_games: true,
					games: action.payload,
				};
			})
			.addCase(GetAllGames.rejected, (state) => {
				return { ...state, is_loading_games: false, games: [] };
			});
	},
});

export default dashboardReducer.reducer;
