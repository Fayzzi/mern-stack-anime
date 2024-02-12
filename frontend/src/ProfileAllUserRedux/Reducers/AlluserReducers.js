// AlluserReducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  alluserloading: false,
  error: null,
};

export const getUsersAsync = createAsyncThunk("alluser/getUsers", async () => {
  try {
    const response = await axios.get("api/v2/user/");
    return response.data.user; // Update this if needed based on the actual API response structure
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const deleteUserAsync = createAsyncThunk(
  "alluser/deleteUser",
  async (userId) => {
    await axios.delete("/api/v2/user/" + userId);
    return userId;
  }
);

const alluserSlice = createSlice({
  name: "all",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.alluserloading = true;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.alluserloading = false;
        state.users = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.alluserloading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.filter((user) => user._id !== action.payload);
      });
  },
});

export const selectUsers = (state) => state.alluser.users;

export default alluserSlice.reducer;
