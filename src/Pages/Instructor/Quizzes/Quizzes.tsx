/** @format */

import { BankIcon, allquizzes, quizIcon } from "@/Assets/Images";
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
import { getAllQuizzesData } from "@/Redux/Featuers/Quizzes/getQuizzeSlice";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ModalSection from "@/Components/Shared/ModalSection/ModalSection";
import { getIncomingQuizzesData } from "@/Redux/Featuers/Quizzes/getIncomingQuizzes";

const Quizzes = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <QuizzesBox toggleModal={toggleModal} />

      <div className="flex w-full justify-between py-4">
        {/* */}
        {/* <div className=" "> */}

        <SetNewQuizModal
          toggleModal={toggleModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        {/* </div> */}

        <div className=" w-3/6">
          {" "}
          <QuizzesComponent />
        </div>
      </div>
    </>
  );
};

export default Quizzes;

export const QuizzesBox = ({ toggleModal }) => {
  return (
    <div className="quizContainer flex justify-between w-2/5  gap-y-px	">
      <div
        onClick={toggleModal}
        className="flex flex-col items-center justify-center quizBox border-2 cursor-pointer    border-gry-200  text-center rounded-lg  me-4 p-4"
      >
        <div className="">
          <img
            src={quizIcon}
            className="m-auto my-2"
            alt="quiz icon for set up a new quiz"
          />
        </div>
        <div className="my-2 font-bold text-xl leading-tight capitalize">
          set up a new quiz
        </div>
      </div>
      <div className="flex flex-col items-center justify-center quizBox border-2 border-gry-200 text-center w-1/2 rounded-lg p-4">
        <div className="">
          <img
            src={BankIcon}
            className="m-auto my-2"
            alt="BankIcon icon for Question Bank"
          />
        </div>
        <div className="my-2 font-bold text-xl leading-tight capitalize">
          Question Bank
        </div>
      </div>
    </div>
  );
};
export const QuizzesComponent = () => {
  const [loading, setLoading] = React.useState(null);
  const [incomingQuizzes, setIncomingQuizzes] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getIncomingQuizzes = React.useCallback(async () => {
    setLoading(true);
    try {
      const element = await dispatch(getIncomingQuizzesData());
      setIncomingQuizzes(element.payload?.data);
      console.log(element.payload?.data);
    } catch (error) {
      console.error("Error get groups:", error);
      // setGroups([]);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);
  React.useEffect(() => {
    // getAllQuizzes();
    getIncomingQuizzes();
  }, []);
  const moveToEdit = (quizId) => {
    console.log(quizId);
    navigate(`/dashboard/quiz/edit/${quizId}`, { state: { itemId: quizId } });
  };

  return (
    <>
      <div className="card my-2 border border-1 border-[#ddd] rounded-[10px] w-full flex flex-col p-4">
        <h2 className="font-medium text-xl capitalize">Upcoming quizzes</h2>

        {incomingQuizzes?.length > 1 &&
          incomingQuizzes?.map((item) => {
            return (
              <div className="flex cards-list ps-0  border border-[#ddd]  rounded-[10px] py-0 my-4">
                <div className="card-img bg-orange-100 ">
                  <img
                    className="studentCarImg w-full"
                    src={allquizzes}
                    alt=""
                  />
                </div>
                <div className="card-des w-full p-3">
                  <h3 className="font-bold capitalize">
                    {/* item.first_name + " " + item.last_name */}
                    {item.title}
                  </h3>
                  <div className="text-[#777]">
                    <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center gap-2 cursor-pointer studentIconCard">
                    No. of student’s enrolled: 32
                    <span>
                      <FaArrowAltCircleRight
                        className="text-black ms-auto "
                        onClick={() => moveToEdit(item?._id)}
                      />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
