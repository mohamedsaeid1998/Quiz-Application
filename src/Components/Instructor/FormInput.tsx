/** @format */

import { Dropdown } from "flowbite-react";
import React from "react";
import { GrFormSchedule } from "react-icons/gr";
import { MdOutlineSchedule } from "react-icons/md";

const FormInput = ({ label, classStyle }) => {
  return (
    <>
      <div className="py-2">
        <div className="flex  w-full  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
          <LabelForm label={label} />
          <input
            type="text"
            id="website-admin"
            className=" w-full text-sm text-gray-900 ps-3   bg-gray-0   rounded-lg  "
            placeholder="Please Enter Data"
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;

export const LabelForm = ({ label }) => {
  return (
    <div className=" inset-y-5 start-0 flex items-center pointer-events-none ">
      <div className="leading-tight p-3  w-full rounded-lg  h-full   text-center  text-gray-1000 insideInput  font-semibold dark:text-gray-400   capitalize">
        {label}
      </div>
    </div>
  );
};
export const FormSelect = ({ label, maxNum, classStyle }) => {
  const options = Array.from({ length: maxNum }, (_, index) => index + 1);
  return (
    <div className="py-2 ">
      <div className="flex  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
        <LabelForm label={label} />
        <Dropdown label={options?.shift()} inline size="lg">
          {options.map((number) => (
            <Dropdown.Item key={number}>{number}</Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};
export const FormDate = ({ label, classStyle }) => {
  return (
    <div className="py-2 ">
      <div className="flex  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
        <LabelForm label={label} />
        <div className="flex justify-center algin-center text-lg  m-auto">
          <div className="flex justify-center">
            {/* <GrFormSchedule /> */}
            <input type="date" />
          </div>
          <div className="flex justify-center mx-5 text-lg ">
            {/* <MdOutlineSchedule /> */}
            <input type="time" style={{ marginRight: "10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export const FormSelectCategories = ({ categories, label, classStyle }) => {
  const options = categories;

  return (
    <>
      <div className="flex  rounded-lg  bg-white border-2 border-gray-300  overflow-hidden ">
        <LabelForm label={label} />
        <Dropdown label={options?.[0]} inline size="2xl">
          {options?.map((categories) => (
            <Dropdown.Item key={categories}>{categories}</Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </>
  );
};
