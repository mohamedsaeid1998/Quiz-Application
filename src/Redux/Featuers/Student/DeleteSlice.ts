/** @format */

import baseUrl from "@/utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteItem = createAsyncThunk(
  "delete/deleteItem",
  async ({ id, currentUrl }, thunkAPI) => {
    const token = localStorage.getItem("UserToken");

    const { rejectWithValue } = thunkAPI;
    try {
      console.log(id, currentUrl);
      const response = await baseUrl.delete(`/api/${currentUrl}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const initialState = { data: [], loading: false, error: null };
const deleteItemSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteItem.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default deleteItemSlice.reducer;
