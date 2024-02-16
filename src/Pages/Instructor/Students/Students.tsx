
import React from "react";
import { useTranslation } from "react-i18next";
import "./Students.scss";
import ModalComponent from "./ModalComponent";
import image from "@/Assets/Images/quiz-img.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAction from "@/Utils/Hooks/UseAction";
import { MdDeleteOutline } from "react-icons/md";

import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { TbFidgetSpinner } from "react-icons/tb";
import { deleteItem } from "@/Redux/Featuers/Student/DeleteSlice";
import { getStudentData } from "@/Redux/Featuers/Student/getStudentSlice";

const groupStudents = [
  { id: 1, title: "Group1", content: "student 1" },
  { id: 2, title: "Group2", content: "student2 " },
  { id: 3, title: "Group3", content: "student3 " },
  { id: 4, title: "Group4", content: "student4" },
  { id: 5, title: "Group5", content: "student5 " },
];

const Students = () => {
  const { register, handleSubmit } = useForm();
  // const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = React.useState("React");
  const [studentData, setStudentData] = React.useState(null);
  const [showMore, setShowMore] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
  let fetchData = useAction(getStudentData);
  const fetchStudentData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchData();
      setStudentData(data.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    fetchStudentData();
  }, []);
  const visibleStudents = showMore ? studentData : studentData?.slice(0, 3);
  // const visibleStudents = studentData?.slice(0, 3);

  return (
    <>
      <div className="border p-4 border-[#ddd] rounded-[10px]">
        <div>
          <h1 className="font-medium text-xl capitalize ">Students list</h1>
        </div>
        <div className="py-4 gap-3 flex-initial justify-between  md:space-x-6  max-sm:text-[.8em] base:text-[1rem] max-sm:space-y-2  ">
          {visibleStudents?.map((item) => (
            <div key={item._id} className="py-2 inline-block	">
              <button
                onClick={() => handleActiveSection(item.group.name)}
                type="button"
                className={`border  border-[#ddd] rounded-[2rem] px-5 studentGroupBtn hover:bg-slate-500 hover:text-gray-100	   p-2 space-y-6 
                 ${checkActiveClass(
                  item?.group?.name,
                  "bg-slate-950	text-gray-100		font-medium		"
                )}
                `}
              >
                {item?.group?.name}
              </button>
            </div>
          ))}
          {studentData?.length > 3 && !showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="border border-[#ddd] rounded-[2rem] px-5 studentGroupBtn hover:bg-slate-500 hover:text-gray-100 p-2 space-y-6"
            >
              Load More
            </button>
          )}
          {showMore && (
            <button
              onClick={() => setShowMore(false)}
              className="border border-[#ddd] rounded-[2rem] px-5 studentGroupBtn hover:bg-slate-500 hover:text-gray-100 p-2 space-y-6"
            >
              Show Less
            </button>
          )}
        </div>
        <div>
          <div className="	flex flex-wrap justify-start ">
            {isLoading ? (
              <TbFidgetSpinner className="animate-spin" />
            ) : (
              studentData?.map((item) => (
                <div
                  key={item._id}
                  className={`cards-list px-4 max-md:w-full w-1/2 panel ${checkActiveClass(
                    item?.group?.name,
                    "active"
                  )}`}
                >
                  <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
                    <div className="card-img">
                      <img className="studentCarImg" src={image} alt="" />
                    </div>
                    <div className="card-des w-[100%]  p-3">
                      <h3 className="font-bold capitalize">
                        {item.first_name + " " + item.last_name}
                      </h3>
                      <div className="text-[#777]">
                        <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
                      </div>
                      <div className="flex justify-end	 items-center gap-2 cursor-pointer studentIconCard ">
                        <form onSubmit={handleSubmit()}>
                          <Delete id={item._id} getData={fetchStudentData} />
                        </form>
                        <span>
                          <FaArrowAltCircleRight className="text-black	 ms-auto " />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Students;
export const Delete = ({ id, getData }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { pathname } = useLocation();
  const currentUrl = pathname.split("/").pop();
  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(deleteItem(id, currentUrl));
  // };
  const handleDelete = React.useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteItem({ id, currentUrl }));
      if (getData) {
        await getData();
      }
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, getData, id, currentUrl]);
  return (
    <span>
      <MdDeleteOutline className="" onClick={() => handleDelete(id)} />
    </span>
  );
};
