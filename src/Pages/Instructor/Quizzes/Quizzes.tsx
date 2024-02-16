/** @format */
import { BankIcon, quizIcon } from "@/Assets/Images";
// import FormInput from "@/Components/Shared/FormInput/FormInput";
import { Button, Modal } from "flowbite-react";
import React from "react";
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
          <Modal.Header className="p-4">title</Modal.Header>
          <Modal.Body>
            <FormInput label={"labelName"} />

            <FormInput label={"labelPhone"} />
            <Button
              className="hover:text-black hover:bg-gray-200 bg-black text-white border-2 border-[#000] transition-colors duration-300 ms-auto"
              color=""
            >
              Submits
            </Button>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};
