// Reducer.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

export const getUserSingle = createAsyncThunk(
  "user/getUserSingle", // Proper action type here
  async () => {
    try {
      const response = await axios.get("/api/v2/user/getUser");
      return response.data.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const Logoutuser = createAsyncThunk(
  "user/Logoutuser", // Proper action type here
  async () => {
    try {
      await axios.post("/api/v2/user/logout");
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    }
  }
);

const singleUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserSingle.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(getUserSingle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getUserSingle.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(Logoutuser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const getSingleUser = (state) => state.user.user;
export default singleUserSlice.reducer;
