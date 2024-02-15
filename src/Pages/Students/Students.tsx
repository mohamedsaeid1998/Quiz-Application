/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import "./Students.scss";
import ModalComponent from "./ModalComponent";
import image from "../../Assets/Images/quiz-img.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

const groupStudents = [
  { id: 1, title: "Group1", content: "student 1" },
  { id: 2, title: "Group2", content: "student2 " },
  { id: 3, title: "Group3", content: "student3 " },
  { id: 4, title: "Group4", content: "student4" },
  { id: 5, title: "Group5", content: "student5 " },
];

const Students = () => {
  const { register, handleSubmit } = useForm;
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = React.useState(1);
  const handleActiveSection = (id) => {
    setIsActive(id);
  };
  const checkActiveClass = (id, className) => {
    return isActive === id ? className : "";
  };
  const modalData = {
    modalTitle: "Add student",
    labelName: "name",
    labelPhone: "Phone",
  };
  return (
    <>
      <div>
        <ModalComponent modalData={modalData} />
      </div>

      <div className="border p-4 border-[#ddd] rounded-[10px]">
        <div>
          <h1 className="font-medium text-xl capitalize ">Students list</h1>
        </div>
        <div className="py-4 gap-3 flex-initial justify-between  md:space-x-6  max-sm:text-[.8em] base:text-[1rem] max-sm:space-y-2  ">
          {groupStudents.map((item) => (
            <button
              onClick={() => handleActiveSection(item.id)}
              type="button"
              className={`border border-[#ddd] rounded-[2rem] px-5 studentGroupBtn hover:bg-slate-500 hover:text-gray-100	   p-2 space-y-6  ${checkActiveClass(
                item.id,
                "bg-slate-950	text-gray-100		font-medium		"
              )}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div>
          <div className="	flex flex-wrap justify-start ">
            {groupStudents.map((item) => (
              <div className="cards-list px-4 max-md:w-full w-1/2 ">
                <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
                  <div className="card-img">
                    <img className="studentCarImg" src={image} alt="" />
                  </div>
                  <div className="card-des w-[100%]  p-3">
                    <h3 className="font-bold">
                      Introduction to computer programming
                    </h3>
                    <div className="text-[#777]">
                      <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <h2>No. of student’s enrolled: 32</h2>
                      <div className="flex items-center gap-2 cursor-pointer studentIconCard ">
                        <h6>Open</h6>
                        <FaArrowAltCircleRight className="text-black	 " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Students;
