import baseUrl from "@/Utils/Custom/Custom";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const headers={
Authorization:`Bearer ${localStorage.getItem("UserToken")}`
}
export const ResultsData = createAsyncThunk(
  "ResultsSlice/ResultsData",
  async () => {
    try {
      const response = await baseUrl.get(`/api/quiz/result`,{
        headers:headers
      });
      console.log(response?.data);
      return response;
      
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
  extraReducers:(builder)=> {
     builder.addCase(ResultsData.pending,(state)=>{
        state.isLoading=true
     })
     builder.addCase(ResultsData.fulfilled,(state,action:PayloadAction<any>)=>{
        state.isLoading=false,
        state.data=action.payload;
     })
     builder.addCase(ResultsData.rejected,(state,action:PayloadAction<any>)=>{
        state.isLoading=false,
        state.error=action.payload.message
     })
  },
});