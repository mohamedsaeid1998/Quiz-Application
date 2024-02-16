/** @format */
import { BankIcon, quizIcon } from "@/Assets/Images";
import React from "react";

const Quizzes = () => {
  return (
    <>
      <div className="flex">
        {/* */}
        <div className="quizContainer flex   gap-y-px	 w-1/2">
          <div className=" quizBox border-2  border-gry-200  text-center rounded-lg w-1/2 me-4 p-4">
            <div className="">
              <img
                src={quizIcon}
                className="m-auto"
                alt="quiz icon for set up a new quiz"
              />
            </div>
            <div className="my-2 font-bold text-xl leading-tight ">
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

        {/* */}

        <div className=""></div>
      </div>
    </>
  );
};

export default Quizzes;
