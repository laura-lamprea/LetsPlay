import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteGame } from "../requests/games";

export const DeleteGame = createAsyncThunk(
  "useDashboard/DeleteGame",
  async (game_id, { rejectWithValue }) => {
    try {
      const data = await deleteGame(game_id);
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
