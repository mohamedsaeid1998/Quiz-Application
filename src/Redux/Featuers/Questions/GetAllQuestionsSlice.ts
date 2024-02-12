
import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface Props {
  data: any[];
  loading: boolean;
  error: null | string;
}


export const GetAllQuestions = createAsyncThunk<any, void>(
  "GetAllQuestionsSlice/GetAllQuestions",
  async () => {
    try {

      const res = await baseUrl.get(`/api/group`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJkOTRlMzQwZmZlNGU4MWZkNTcyNWMiLCJlbWFpbCI6ImFiZGVscmhtYW5mYXJnaGFseTE5OThAZ21haWwuY29tIiwicm9sZSI6Ikluc3RydWN0b3IiLCJpYXQiOjE3MDc3NTE3MTMsImV4cCI6MTcwNzc1NTMxM30.DmFXl8L9389Ae0498LGyIZPxc9mV1ledILfQdijb_bg"
        }
      })
      return res

    } catch (err) {
      throw err
    }
  }
);

const initialState: Props = {
  data: [],
  loading: false,
  error: null,
};







const GetAllQuestionsSlice = createSlice({
  name: "GetAllQuestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllQuestions.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetAllQuestions.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(GetAllQuestions.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default GetAllQuestionsSlice.reducer;
