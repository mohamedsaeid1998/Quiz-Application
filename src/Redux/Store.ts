/** @format */
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/AuthSlice";

const Store = configureStore({
  reducer: {
    // authUser: authReducer,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
