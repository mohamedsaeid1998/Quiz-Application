/** @format */

import { getQuestions } from "./Featuers/Questions/GetAllQuestionsSlice";
/** @format */
import { configureStore } from "@reduxjs/toolkit";
import getDataSLice from "./Featuers/Groups/getDataSlice";
// import { authReducer } from "./Featuers/Auth/AuthSlice";
import addQuizzesSlice from "./Featuers/Quizzes/addQuizzesSlice";

import { addQuestion } from "./Featuers/Questions/AddQuestionsSlice";
import { deleteQuestion } from "./Featuers/Questions/DeleteQuestionsSlice";
import { updateQuestions } from "./Featuers/Questions/UpdateQuestionsSlice";
import getQuizzeSlice from "./Featuers/Quizzes/getQuizzeSlice";

const Store = configureStore({
  reducer: {
    // authUser: authReducer,
    getDataSLice,
    addQuizzesSlice,
    getQuizzeSlice,
    getQuestions,
    addQuestion,
    deleteQuestion,
    updateQuestions,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
