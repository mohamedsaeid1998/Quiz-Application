/** @format */

import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setStudentData = createAsyncThunk(
  "setStudent/setStudentData",
  async (data) => {
    // try {
    //   const response = await baseUrl.post(`/api/auth/login`, data);
    //   return response;
    // } catch (error) {
    //   return error
    // }
  }
);

const initialState = { data: {}, isLoading: false, error: null };

export const setStudent = createSlice({
  name: "setStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setStudentData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      setStudentData.fulfilled,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.data = action.payload);
      }
    );
    builder.addCase(
      setStudentData.rejected,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.error = action.payload.message);
      }
    );
  },
});
