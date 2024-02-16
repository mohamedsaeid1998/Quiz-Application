/** @format */
import { configureStore } from "@reduxjs/toolkit";
// import { authReducer } from "./Featuers/Auth/AuthSlice";
import deleteItemSlice from "./Featuers/DeleteSlice/DeleteSlice";
const Store = configureStore({
  reducer: {
    // authUser: authReducer,
    delete: deleteItemSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
