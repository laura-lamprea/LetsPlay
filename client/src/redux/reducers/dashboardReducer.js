import { createSlice } from "@reduxjs/toolkit";
import { GetAllGames } from "../actions/GetAllGames";
import { GetGame } from "../actions/GetGame";

const initialState = {
	games: [],
	gamesCopy: [],
	game: {},
	is_loading_games: false,
	is_loading_game: false,
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
					gamesCopy: action.payload,
				};
			})
			.addCase(GetAllGames.rejected, (state) => {
				return { ...state, is_loading_games: false, games: [] };
			})

			.addCase(GetGame.pending, (state) => {
				return { ...state, is_loading_game: true };
			})
			.addCase(GetGame.fulfilled, (state, action) => {
				return {
					...state,
					is_loading_game: true,
					game: action.payload,
				};
			})
			.addCase(GetGame.rejected, (state) => {
				return { ...state, is_loading_game: false, game: {} };
			})

			.addCase("FILTER_BY_COUNTRY", (state, action) => {
				const games = state.gamesCopy;
				const filteredGames = games.filter(
					(game) => game.country === action.payload
				);
				return { ...state, games: filteredGames };
			})
			.addCase("FILTER_BY_DATE", (state, action) => {
				const games = state.gamesCopy;
				const filteredGames = games.filter((game) => {
					const gameDate = new Date(game.date);
					const filterDate = new Date(action.payload);
					return gameDate.toDateString() === filterDate.toDateString();
				});
				return { ...state, games: filteredGames };
			})
			.addCase("SEARCH_BY_CITY_OR_ADDRESS", (state, action) => {
				const search = action.payload.toLowerCase()
				const games = state.gamesCopy;
				const filteredGames = games.filter((game) => {
					const city = game.city.toLowerCase();
					const address = game.address.toLowerCase();
				
					const cityMatch = city.includes(search);
					const addressMatch = address.includes(search);
				
					return cityMatch || addressMatch;
				  });
				return { ...state, games: filteredGames };
			})
	},
});

export default dashboardReducer.reducer;
