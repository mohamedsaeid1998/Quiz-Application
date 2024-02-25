/** @format */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import baseUrl from "@/Utils/Custom/Custom";
// Thunk to fetch a single quiz by ID
export const getQuizById = createAsyncThunk(
  "getQuizzeSlice/getQuizById",
  async (quizId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("UserToken");
      const response = await baseUrl.get(`/api/quiz/${quizId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
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
