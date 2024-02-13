// import { createSlice } from "@reduxjs/toolkit";
// let initialState = { userData:localStorage.getItem("userInfo")?JSON.parse(String(localStorage.getItem("userInfo"))):null };
// let authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   reducers:{
//   setUserData:(state,action)=>{
//      state.userData=action.payload;
//      localStorage.setItem("userInfo",action.payload)
//      console.log(action.payload);
//   }
//  }
// });
// export let authReducer =authSlice.reducer;
// export let {setUserData}=authSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(String(localStorage.getItem("userData")))
    : null,
  headers: {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("userData")
          ? JSON.parse(String(localStorage.getItem("userData"))).accessToken
          : null
      }`,
    },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      if (state.userData?.accessToken) {
        localStorage.setItem("userData", JSON.stringify(action.payload));
      }
    },


    
    //  logOut: (state) => {
    //    state.userData = null;
    //    state.isAuthed = false;
    //    state.headers={headers:{Authorization:""}};
    //    Cookies.remove("userData",{})
    //  },
  },
});

export const authReducer = authSlice.reducer;
export const { setUserData } = authSlice.actions;
