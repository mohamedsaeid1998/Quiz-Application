/** @format */

import FormComponents from "@/Components/Instructor/FormInput";
import { editQuizzes } from "@/Redux/Featuers/Quizzes/editQuizSlice";
import {
  getAllQuizzesData,
  getQuizById,
} from "@/Redux/Featuers/Quizzes/getQuizzeSlice";
import useCurrentUrl from "@/Utils/Hooks/useCurrentUrl";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const {
  FormInput,
  FormSelect,
  FormDate,
  FromSelectInput,
  // FormSelectCategories,
  // FormInputTextAria,
  // FormSelectGroups,
} = FormComponents;
const EditQuiz = (props) => {
  const { handleSubmit, register, setValue } = useForm();
  const [isChecked, setIsChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(null);
  const [quizzes, setQuizzes] = React.useState([]);

  const quizId = useCurrentUrl();
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.getQuizzeSlice.data);

  React.useEffect(() => {
    getAllQuizzes();
  }, []);
  const getAllQuizzes = React.useCallback(async () => {
    setLoading(true);
    try {
      // @ts-ignore
      const element = await dispatch(getQuizById(quizId));
      // @ts-ignore
      setQuizzes(element?.payload);
      setValue("duration", quizData.duration);
      // console.log(element.payload?.data);
    } catch (error) {
      console.error("Error get groups:", error);
      // setGroups([]);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  //
  React.useEffect(() => {
    if (quizData) {
      setValue("duration", quizData.duration);
      setValue("questions_number", quizData?.questions_number);
      setValue("score_per_question", quizData?.description);
      setValue("score_per_question", quizData?.score_per_question);
    }
  }, [quizData, setValue]);

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center  bg-white">
        {/* <div className="w-full md:w-1/2 p-12 bg-white border rounded-xl border-stone-400 text-slate-950"> */}
        <div className="  p-4 bg-white border rounded-xl border-stone-400 text-slate-950 text-lg">
          <h2 className="font-medium text-xl">Data Structures Quiz One</h2>
          <>
            {" "}
            <FormDate label="" />
            {/*Duration  */}
            <FromSelectInput
              label="Duration"
              maxNum={15}
              {...register("duration", {
                required: "Enter your duration",
              })}
              defaultValues={quizData?.duration || ""}
            />
            {/*Number of questions  */}
            <FromSelectInput
              label="Number of questions"
              maxNum={15}
              defaultValues={quizData?.questions_number || ""}
            />
            {/* Score per question */}
            <FromSelectInput
              label="Score per question "
              maxNum={15}
              defaultValues={quizData?.score_per_question || ""}
            />
            <div className=" rounded-md border leading-loose  border-gray-300 w-80 m-2 ">
              <div className="bg-orange-100 w-full  rounded-md border pl-5 border-orange-100 ">
                Description
              </div>
              <textarea
                className=" rounded-md w-full h-32 mt-2 px-3 py-2 text-base text-gray-700 placeholder-gray-600 focus:outline-none focus:border-slate-800"
                placeholder="Description"
                {...register("description")}
                defaultValue={quizData?.description || ""}
              />
            </div>
            <div className="flex justify-between leading-loose  rounded-md border border-gray-300 w-80 m-2">
              <div className="bg-orange-100 w-2/3  rounded-md border pl-5 border-orange-100 ">
                Question bank used
              </div>
              <div className="bg-white  border-white rounded-md pr-2 ">
                Bank one
              </div>
            </div>
            <div className="flex justify-between leading-loose  w-80 m-2">
              <input
                type="checkbox"
                id="myCheckbox"
                checked={isChecked}
                // onChange={handleCheckboxChange}
                style={{ transform: "scale(1.5)" }}
              />
              <p>Randomize questions</p>
            </div>
          </>

          <div className="relative flex leading-loose  ">
            <button
              type="submit"
              className="flex items-center justify-center w-20 bg-slate-950 text-white hover:bg-slate-950 p-2 mt-6 font-semibold rounded-md"
            >
              Edit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 pl-1 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditQuiz;
