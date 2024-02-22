/** @format */

import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Props {
  data: any[];
  loading: boolean;
  error: null | string;
}

export const editQuizzes = createAsyncThunk<any, void>(
  "editQuizzesSlice/editQuizzes",
  async (quizId, thunkAPI) => {
    const token = localStorage.getItem("authToken");
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/quiz/${quizId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const serializedHeaders = {
        contentLength: response.headers["content-length"],
        contentType: response.headers["content-type"],
      };
      return { data: response.data, headers: serializedHeaders };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};

const editQuizzesSlice = createSlice({
  name: "editQuizzesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editQuizzes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editQuizzes.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      editQuizzes.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default editQuizzesSlice.reducer;
