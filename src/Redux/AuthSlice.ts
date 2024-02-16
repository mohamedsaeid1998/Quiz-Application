/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// let getAuthData=createAsyncThunk('authSlice/getAuthData',
// async ()=>{
//  let {data.data} = await axios.post(`https://upskilling-egypt.com:3005/api/auth/login`)
// }

// )

let initialState = { authData: [], loading: false, isError: null };
let authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

export let authReducer = authSlice.reducer;
