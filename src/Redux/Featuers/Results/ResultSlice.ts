import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const ResultsData = createAsyncThunk(
  "ResultsSlice/ResultsData",
  async () => {
    const token = localStorage.getItem("UserToken");
    try {
      const response = await baseUrl.get(`/api/quiz/result`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const serializedHeaders = {
        contentLength: response.headers["content-length"],
        contentType: response.headers["content-type"],
      };
      return { data: response.data, headers: serializedHeaders };

    } catch (error) {
      return error
    }
  }
);

const initialState = { data: [], isLoading: false, error: null };

export const ResultsSlice = createSlice({
  name: "ResultsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ResultsData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(ResultsData.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false,
        state.data = action.payload;
    })
    builder.addCase(ResultsData.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false,
        state.error = action.payload.message
    })
  },
});