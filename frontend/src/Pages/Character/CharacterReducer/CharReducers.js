import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  characters: [],
  charisLoading: false,
  charError: null,
};

export const getcharacters = createAsyncThunk("/getcharacter", async () => {
  try {
    const response = await axios.get("/api/v2/admin/getallcharacters");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const deletecharacter = createAsyncThunk("/deletechar", async (id) => {
  try {
    await axios.delete("/api/v2/admin/delete/" + id);
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
const allCharSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcharacters.pending, (state) => {
        state.charError = null;
        state.charisLoading = true;
      })
      .addCase(getcharacters.fulfilled, (state, action) => {
        state.charisLoading = false;
        state.charError = null;
        state.characters = action.payload;
      })
      .addCase(getcharacters.rejected, (state, action) => {
        state.charisLoading = false;
        state.charError = action.payload;
      })
      .addCase(deletecharacter.fulfilled, (state, action) => {
        state.charisLoading = false;
        state.characters = state.characters.filter(
          (char) => char._id !== action.payload
        );
      });
  },
});
export default allCharSlice.reducer;
