import QuestionsAdd from "@/Components/Instructor/Questions/QuestionsAdd";
import QuestionsList from "@/Components/Instructor/Questions/QuestionsList";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Questions() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className=" border-2 p-[20px] h-[80vh]">
        <QuestionsAdd openModal={openModal} setOpenModal={setOpenModal} />
        <div className="flex flex-col md:flex-row justify-between my-3">
          <h2 className="text-[20px] font-bold">Bank Of Questions</h2>
          <button
            className="btn flex items-center border-2 border-[#0D1321] border-solid p-2 rounded-[10px] mt-2 md:mt-0"
            onClick={() => setOpenModal(true)}
          >
            <FaPlusCircle className="mx-3 text-[20px] " />
            Add Question
          </button>
        </div>
        <QuestionsList />
      </div>
    </>
  );
}
