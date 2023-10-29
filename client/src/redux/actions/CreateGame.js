import { createAsyncThunk } from "@reduxjs/toolkit";
import { createGame } from "../requests/games";

export const CreateGame = createAsyncThunk(
  "useDashboard/CreateGame",
  async (body, { rejectWithValue }) => {
    try {
      const data = await createGame(body);
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
