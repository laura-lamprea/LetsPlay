import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateGame } from "../requests/games";

export const UpdateGame = createAsyncThunk(
	"useDashboard/UpdateGame",
	async ({ game_id, body }, { rejectWithValue }) => {
		try {
			const data = await updateGame(game_id, body);
			return data.data.data;
		} catch (error) {
			if (error.response) {
				return rejectWithValue(error?.response.status);
			} else if (error.request) {
				return rejectWithValue(error?.request.status);
			} else {
				return rejectWithValue("UNKNOW_ERROR");
			}
		}
	}
);
