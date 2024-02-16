/** @format */

import React from "react";

const EditQuiz = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex items-start justify-start min-h-screen bg-white">
        <div className="w-full md:w-1/2 p-12 bg-white border rounded-xl border-stone-400 text-slate-950">
          <p
            className="text-slate-950 pb-5 font-semibold "
            style={{ fontWeight: 700 }}
          >
            Data Structures Quiz One
          </p>
          <input type="time" style={{ marginRight: "10px" }} />
          <input type="date" />
          <div className="flex justify-between rounded-md border border-gray-300 w-80 m-2">
            <div className="bg-orange-100 w-60  rounded-md border pl-5 border-orange-100 ">
              Duration
            </div>
            <div className="bg-white  border-white rounded-md pr-2 ">
              10 mins
            </div>
          </div>
          <div className="flex justify-between rounded-md border border-gray-300 w-80 m-2 ">
            <div className="bg-orange-100 w-60 rounded-md border pl-5 border-orange-100 ">
              Num of questions
            </div>
            <div className="bg-white  border-white rounded-md pr-2 ">15</div>
          </div>
          <div className="flex justify-between rounded-md border border-gray-300 w-80 m-2 ">
            <div className="bg-orange-100 w-60 rounded-md border pl-5 border-orange-100 ">
              Score per question
            </div>
            <div className="bg-white  border-white rounded-md pr-2 ">1</div>
          </div>
          <div className=" rounded-md border border-gray-300 w-80 m-2 ">
            <div className="bg-orange-100 w-80  rounded-md border pl-5 border-orange-100 ">
              Description
            </div>
            <div className="bg-white  border-white rounded-md pr-2 pl-2">
              Lorem ipsum aset amet consectedur im nascsa assadqw assacsc
              aidwqdjv asdewfas qwdass Lorem ipsum aset amet consectedur im
              nascsa assadqw assacsc aidwqdjv
            </div>
          </div>
          <div className="flex justify-between rounded-md border border-gray-300 w-80 m-2">
            <div className="bg-orange-100 w-60  rounded-md border pl-5 border-orange-100 ">
              Question bank used
            </div>
            <div className="bg-white  border-white rounded-md pr-2 ">
              Bank one
            </div>
          </div>

          <div className="flex justify-between w-80 m-2">
            <input
              type="checkbox"
              id="myCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ transform: "scale(1.5)" }}
            />
            <p>Randomize questions</p>
          </div>
          <div className="relative flex ">
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
    </>
  );
};

export default EditQuiz;
