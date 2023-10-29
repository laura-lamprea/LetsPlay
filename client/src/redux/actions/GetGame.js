import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGame } from "../requests/games";

export const GetGame = createAsyncThunk(
  "useDashboard/GetGame",
  async (game_id, { rejectWithValue }) => {
    try {
      const data = await getGame(game_id);
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
