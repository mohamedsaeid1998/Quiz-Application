/** @format */
import { configureStore } from "@reduxjs/toolkit";
import getDataSLice from "./Featuers/Groups/getDataSlice";
// import { authReducer } from "./Featuers/Auth/AuthSlice";
const Store = configureStore({
  reducer: {
    // authUser: authReducer,
    getDataSLice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
