/** @format */

// SetNewQuizModal.jsx
import React, { useRef } from "react";
import { Button, Modal } from "flowbite-react";
import FormComponents from "@/Components/Instructor/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addQuizzesData } from "@/Redux/Featuers/Quizzes/addQuizzesSlice";

const {
  FormInput,
  FormSelect,
  FormDate,
  FormSelectCategories,
  FormInputTextAria,
} = FormComponents;
const SetNewQuizModal = ({ openModal, setOpenModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  //   const titleRef = useRef(null);
  //   const durationRef = useRef(null);
  //   const questionsRef = useRef(null);
  //   const scoreRef = useRef(null);
  //   const descriptionRef = useRef(null);
  //   const scheduleRef = useRef(null);
  //   const difficultyRef = useRef(null);
  //   const typeRef = useRef(null);
  //   const groupRef = useRef(null);
  //   const timeRef = useRef(null);
  const handleSubmitData = async (data) => {
    try {
      const res = await dispatch(addQuizzesData(data));
      console.log(data.schadule);
      //   const addFormData = new FormData();
      //   addFormData.append("title", data.title);
      //   addFormData.append("description", data.description);
      //   addFormData.append("group", data.group);
      //   addFormData.append("questions_number", data.questions_number);
      //   addFormData.append("difficulty", data.difficulty);
      //   addFormData.append("type", data.type);
      //   addFormData.append("schadule", `${data.schedule}T${data.time}`);
      //   addFormData.append("duration", data.duration);
      //   addFormData.append("score_per_question", data.score_per_question);
      //   console.log("Form data as FormData:", addFormData); // Log the FormData object
    } catch (error) {
      console.error("Error creating FormData:", error);
    }
  };

  return (
    <Modal
      show={openModal}
      size="4xl"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="p-4 capitalize">set up a new quiz</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <FormInput
            label="Title"
            // ref={titleRef}
            deign=""
            {...register("title", { required: "Enter your group name" })}
          />
          <div className="flex justify-between">
            <FormSelect
              label="Duration"
              //   ref={durationRef}
              maxNum={1}
              design="w-full"
              {...register("duration", { required: "Enter your group name" })}
            />
            <FormSelect
              label="questions"
              //   ref={questionsRef}
              maxNum={1}
              {...register("questions_number", {
                required: "Enter your group name",
              })}
            />
            <FormSelect
              label="Score"
              //   ref={scoreRef}
              maxNum={1}
              {...register("score_per_question", {
                required: "Enter your group name",
              })}
            />
          </div>
          <FormInput
            label="Description"
            // ref={descriptionRef}
            deign="p-4"
            {...register("description", { required: "Enter your group name" })}
          />
          <div className="py-1">
            <div className="flex   rounded-xl border border-gray-300  m-2">
              {/* <LabelForm label={label} /> */}
              <div className="flex items-center">
                <input
                  //   ref={scheduleRef}
                  {...register("schadule", {
                    required: "Enter your group name",
                  })}
                  type="date"
                  className="bg-white border-white rounded-xl pr-2 h-full"
                  style={{ width: "auto" }}
                />
                <input
                  type="time"
                  //   ref={timeRef}
                  {...register("time", {
                    required: "Enter your group name",
                  })}
                  name="time"
                  style={{ marginRight: "10px", width: "auto" }}
                  className="bg-white border-white rounded-xl pr-2 h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <FormSelectCategories
              label="Difficulty level"
              //   ref={difficultyRef}
              categories={["easy", "medium", "hard"]}
              {...register("difficulty", { required: "Enter your group name" })}
            />
            <FormSelectCategories
              label="Category type"
              //   ref={typeRef}
              categories={["65d10d5d6b5199ad7154d2e0"]}
              {...register("group", { required: "Enter your group name" })}
            />
            <FormSelectCategories
              label="Group name"
              //   ref={groupRef}
              categories={["FE", "BE"]}
              {...register("type", { required: "Enter your group name" })}
            />
          </div>
          <button
            type="submit"
            className={`border block ms-auto border-[#ddd] rounded-[2rem] px-5 studentGroupBtn hover:bg-slate-800 hover:text-gray-100	 transition-all duration-500 ease-out  p-2 space-y-6  `}
          >
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SetNewQuizModal;
