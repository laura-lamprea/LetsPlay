import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllGames } from "../requests/games";

export const GetAllGames = createAsyncThunk(
  "useDashboard/GetAllGames",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllGames();
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
