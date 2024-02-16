/** @format */
import { BankIcon, quizIcon } from "@/Assets/Images";
import FormInput, {
  FormDate,
  FormSelect,
  FormSelectCategories,
} from "@/Components/Instructor/FormInput";
import { Button, Modal } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaCirclePlus } from "react-icons/fa6";

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
  );
};

export const SetNewQuizModal = ({ openModal, setOpenModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("quiz/edit");
  };
  return (
    <>
      <div className="">
        <Modal
          show={openModal}
          size="3xl"
          popup
          onClose={() => setOpenModal(false)}
          // initialFocus={emailInputRef}
        >
          <Modal.Header className="p-4 capitalize">
            set up a new quiz
          </Modal.Header>
          <Modal.Body>
            <FormInput label={"title"} classStyle="" />
            <div className="flex justify-between w-100">
              <FormSelect
                label={"Duration (in minutes)"}
                maxNum={10}
                classStyle=""
              />
              <FormSelect
                label={"No. of questions"}
                maxNum={10}
                classStyle=""
              />
              <FormSelect
                label={"score per question"}
                maxNum={10}
                classStyle=""
              />
            </div>
            <FormInput label={"Description"} classStyle="" />
            <FormDate label={"schedule"} classStyle="" />
            <div className="flex justify-between w-100">
              <FormSelectCategories
                categories={["beginner", "intermediate", "advanced"]}
                label={"Category type"}
                classStyle=""
              />
              <FormSelectCategories
                label={"Group name"}
                classStyle=""
                categories={["FE", "BE"]}
              />
              <FormSelectCategories
                label={"Difficulty level"}
                classStyle=""
                categories={["JSB"]}
              />
            </div>
            <Button
              className="hover:text-black hover:bg-gray-200 bg-black text-white border-2 border-[#000] transition-colors duration-300 ms-auto"
              color=""
              onClick={handleClick}
            >
              Submits
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
