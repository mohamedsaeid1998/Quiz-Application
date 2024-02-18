import { getQuestions } from "./Featuers/Questions/GetAllQuestionsSlice";
/** @format */
import { configureStore } from "@reduxjs/toolkit";
import { addQuestion } from "./Featuers/Questions/AddQuestionsSlice";
import { deleteQuestion } from "./Featuers/Questions/DeleteQuestionsSlice";
import { updateQuestions } from "./Featuers/Questions/UpdateQuestionsSlice";

const Store = configureStore({
  reducer: {
    // authUser: authReducer,
    getQuestions,
    addQuestion,
    deleteQuestion,
    updateQuestions,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
