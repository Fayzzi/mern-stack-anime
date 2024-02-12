import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  videos: [],
  vidloading: false,
  viderror: false,
};
export const getAllVideos = createAsyncThunk("/getAllvideo", async () => {
  try {
    const response = await axios.get("/api/v2/admin/videos");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});
export const deleteVideo = createAsyncThunk("/deleteVideo", async (id) => {});
const AllVideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVideos.pending, (state) => {
        state.vidloading = true;
      })
      .addCase(getAllVideos.fulfilled, (state, action) => {
        state.vidloading = false;
        state.videos = action.payload;
      })
      .addCase(getAllVideos.rejected, (state, action) => {
        state.vidloading = false;
        state.viderror = action.error.message;
      });
  },
});
export default AllVideoSlice.reducer;
