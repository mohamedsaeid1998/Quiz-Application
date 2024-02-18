/** @format */
import { configureStore } from "@reduxjs/toolkit";
import getDataSLice from "./Featuers/Groups/getDataSlice";
// import { authReducer } from "./Featuers/Auth/AuthSlice";
import addQuizzesSlice from "./Featuers/Quizzes/addQuizzesSlice";
import getQuizzeSlice from "./Featuers/Quizzes/getQuizzeSlice";
const Store = configureStore({
  reducer: {
    // authUser: authReducer,
    getDataSLice,
    addQuizzesSlice,
    getQuizzeSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
