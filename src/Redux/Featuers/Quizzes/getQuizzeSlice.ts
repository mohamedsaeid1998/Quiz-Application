/** @format */

import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllQuizzesData = createAsyncThunk(
  "getQuizzeSlice/getAllQuizzesData",
  async () => {
    const token = localStorage.getItem("UserToken");

    try {
      const response = await baseUrl.get(`/api/quiz`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const serializedHeaders = {
        contentLength: response.headers["content-length"],
        contentType: response.headers["content-type"],
      };
      return { data: response.data, headers: serializedHeaders };
    } catch (error) {
      return error;
    }
  }
);

const initialState = { data: {}, isLoading: false, error: null };

const getQuizzeSlice = createSlice({
  name: "getQuizzeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllQuizzesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllQuizzesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.data = action.payload);
      }
    );
    builder.addCase(
      getAllQuizzesData.rejected,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.error = action.payload.message);
      }
    );
  },
});
export default getQuizzeSlice.reducer;
