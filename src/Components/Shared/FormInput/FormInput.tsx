/** @format */

import { Dropdown } from "flowbite-react";
import React from "react";

const FormInput = ({ label }) => {
  return (
    <>
      <div className="py-2">
        <div className="flex  rounded-lg   border-2 border-gray-300  overflow-hidden ">
          <div className=" inset-y-5  w-full start-0 flex items-center pointer-events-none ">
            <p className=" w-full   h-full   text-center  text-gray-1000 insideInput  font-semibold dark:text-gray-400  rounded-lg capitalize">
              {label}
            </p>
          </div>
          <input
            type="text"
            id="website-admin"
            className={` text-sm text-gray-900 ps-3   bg-gray-0   rounded-lg `}
            placeholder="Please Enter Student Name"
          />
        </div>
      </div>
    </>
  );
};
export const FormSelect = ({ label, maxNum, classStyle }) => {
  const options = Array.from({ length: maxNum }, (_, index) => index + 1);
  return (
    <div className="py-2 ">
      <div className="flex  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
        <div className="w-full inset-y-5 start-0 flex items-center pointer-events-none ">
          <p className="text-sm  leading-tight p-3 h-full   text-center  text-gray-1000 insideInput  font-semibold dark:text-gray-400  rounded-lg capitalize">
            {label}
          </p>
        </div>
        <Dropdown label={options?.shift()} inline className="w-full">
          {options.map((number) => (
            <Dropdown.Item key={number}>{number}</Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default FormInput;
