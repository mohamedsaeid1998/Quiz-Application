/** @format */

import React from "react";

const FormInput = ({ label }) => {
  return (
    <>
      <div className="py-2">
        <div className="flex  w-full  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
          <div className=" inset-y-5 start-0 flex items-center pointer-events-none ">
            <div className="leading-tight p-3  w-20  h-full   text-center  text-gray-1000 insideInput  font-semibold dark:text-gray-400  rounded-lg capitalize">
              {label}
            </div>
          </div>
          <input
            type="text"
            id="website-admin"
            className=" w-full text-sm text-gray-900 ps-3   bg-gray-0   rounded-lg  "
            placeholder="Please Enter Student Name"
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
