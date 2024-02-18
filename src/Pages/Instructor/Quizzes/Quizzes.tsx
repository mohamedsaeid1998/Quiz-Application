/** @format */

import { BankIcon, quizIcon } from "@/Assets/Images";
import {
  FormInput,
  FormDate,
  FormSelect,
  FormSelectCategories,
} from "@/Components/Instructor/FormInput";
import { getAllData } from "@/Redux/Featuers/Groups/getDataSlice";
// import useCurrentUrl from "@/Utils/Hooks/useCurrentUrl";
import { Button, Modal } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SetNewQuizModal from "./QuizzesModal";

const Quizzes = () => {
  return (
    <>
      <div className="flex">
        {/* */}
        <QuizzesBox />
        <div className=""></div>
      </div>
    </>
  );
};

export default Quizzes;

export const QuizzesBox = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="quizContainer flex   gap-y-px	 w-1/2">
      <SetNewQuizModal openModal={openModal} setOpenModal={setOpenModal} />
      <div
        onClick={toggleModal}
        className=" quizBox border-2 cursor-pointer  border-gry-200  text-center rounded-lg w-1/2 me-4 p-4"
      >
        <div className="">
          <img
            src={quizIcon}
            className="m-auto"
            alt="quiz icon for set up a new quiz"
          />
        </div>
        <div className="my-2 font-bold text-xl leading-tight capitalize">
          set up a new quiz
        </div>
      </div>
      <div className=" quizBox border-2 border-gry-200 text-center w-1/2 rounded-lg p-4">
        <div className="">
          <img
            src={BankIcon}
            className="m-auto"
            alt="BankIcon icon for Question Bank"
          />
        </div>
        <div>Question Bank</div>
      </div>
    </div>
  );
};
