/** @format */

import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const addQuizzesData = createAsyncThunk(
  "addQuizzesSlice/addQuizzesData",
  async (data) => {
    const token = localStorage.getItem("UserToken");
    // console.log(data);
    const addFormData = new FormData();
    addFormData.append("title", data?.title);
    addFormData.append("description", data?.description);
    addFormData.append("group", data?.group);
    addFormData.append("questions_number", data?.questions_number);
    addFormData.append("difficulty", data?.difficulty);
    addFormData.append("type", data?.type);
    addFormData.append("schadule", `${data?.schadule}T${data?.time}`);
    addFormData.append("duration", data?.duration);
    addFormData.append("score_per_question", data?.score_per_question);
    try {
      const response = await baseUrl.post(`/api/quiz`, addFormData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const serializedHeaders = {
        contentLength: response.headers["content-length"],
        contentType: response.headers["content-type"],
      };
      console.log(response);
      return { data: response.data, headers: serializedHeaders };
    } catch (error) {
      return error;
    }
  }
);

const initialState = { data: {}, isLoading: false, error: null };

const addQuizzesSlice = createSlice({
  name: "addQuizzesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addQuizzesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addQuizzesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.data = action.payload);
      }
    );
    builder.addCase(
      addQuizzesData.rejected,
      (state, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.error = action.payload.message);
      }
    );
  },
});
export default addQuizzesSlice.reducer;
