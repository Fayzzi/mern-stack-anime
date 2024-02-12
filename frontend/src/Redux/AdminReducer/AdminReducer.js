import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAdminAuthenticated: false,
  isLoading: false,
  admin: null,
  error: null,
};

export const getAdmin = createAsyncThunk("/getAdmin", async () => {
  const response = await axios.get("/api/v2/admin/getAdmin");
  return response.data.admin;
});

export const LogoutAdmin = createAsyncThunk("/logoutAdmin", async () => {
  await axios.post("/api/v2/admin/Adminlogout");
});

const AdminSlice = createSlice({
  name: "admin",
  initialState, // Change from initialAdmin to initialState
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdmin.pending, (state) => {
        state.isAdminAuthenticated = false;
        state.isLoading = true;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.isAdminAuthenticated = true;
        state.isLoading = false;
        state.admin = action.payload;
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.isAdminAuthenticated = false;
        state.isLoading = false;
        state.admin = null;
        state.error = action.error.message;
      })
      .addCase(LogoutAdmin.fulfilled, (state) => {
        state.isAdminAuthenticated = false;
        state.admin = null;
        state.isLoading = false;
      });
  },
});

export const getAdminGetter = (state) => state.admin.admin;

export default AdminSlice.reducer;
