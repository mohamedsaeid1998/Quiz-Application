/** @format */

// SetNewQuizModal.jsx
import FormComponents from "@/Components/Instructor/FormInput";
import ModalSection from "@/Components/Shared/ModalSection/ModalSection";
import { getQuizzesData } from "@/Redux/Featuers/Groups/getDataSlice";
import { addQuizzesData } from "@/Redux/Featuers/Quizzes/addQuizzesSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "../Students/Students.scss";
import { ImPower } from "react-icons/im";

import { toast } from "react-toastify";
const {
  FormInput,
  FormSelect,
  FormDate,
  FormSelectCategories,
  FormInputTextAria,
  FormSelectGroups,
} = FormComponents;

const SetNewQuizModal = ({ toggleModal, openModal, setOpenModal }) => {
  const [groups, setGroups] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const [showCode, setShowCode] = React.useState(true);
  const [quizCode, setQuizCode] = React.useState(null);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const handleSubmitData = async (data) => {
    setLoading(true);
    try {
      const element = await dispatch(addQuizzesData(data));
      if (element?.payload?.data) {
        setShowCode(true);
        setQuizCode(element?.payload?.data?.data.code);
        console.log(element?.payload?.data?.data.code);
      } else {
        console.log("false submit ");
        setOpenModal(true);
      }

      if (isSubmitSuccessful) {
        setOpenModal(openModal);
      }
      // reset();
    } catch (error) {
      setOpenModal(true);

      setLoading(false);
    }
  };

  const getAllgroups = React.useCallback(async () => {
    setLoading(true);
    try {
      // @ts-ignore
      const element = await dispatch(getQuizzesData());
      // @ts-ignore
      setGroups(element.payload?.data);
    } catch (error) {
      console.error("Error get groups:", error);
      // setGroups([]);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getAllgroups();
  }, []);
  return (
    <>
      {!showCode ? (
        <ModalSection
          openModal={openModal}
          setOpenModal={setOpenModal}
          toggleModal={toggleModal}
          design="modalBtn"
          textBtn="submit"
          handleSubmit={handleSubmit(handleSubmitData)}
        >
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
              maxNum={15}
              design="w-full"
              {...register("duration", { required: "Enter your group name" })}
            />
            <FormSelect
              label="questions"
              //   ref={questionsRef}
              maxNum={15}
              {...register("questions_number", {
                required: "Enter your group name",
              })}
            />
            <FormSelect
              label="Score"
              //   ref={scoreRef}
              maxNum={15}
              {...register("score_per_question", {
                required: "Enter your group name",
              })}
            />
          </div>
          <FormInput
            label="Description"
            // ref={descriptionRef}
            deign="p-4"
            {...register("description", {
              required: "Enter your group name",
            })}
          />
          <div className="py-1">
            <div className="flex  justify-between  rounded-xl border border-gray-300 w-7/12 2 m-2">
              <div className="flex items-center justify-between w-full">
                <div
                  className={`bg-orange-100 md:w-40 text-center  p-1 rounded-xl border pl-5 border-orange-100 font-medium ps-0 capitalize `}
                >
                  Schedule
                </div>
                <div className="mx-2 flex justify-betweenms-auto">
                  <input
                    //   ref={scheduleRef}
                    {...register("schadule", {
                      required: "Enter your group name",
                    })}
                    type="date"
                    className="bg-white border-white rounded-xl pr-2 me-3 h-full"
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
                    className="bg-white border-white rounded-xl pr-2 h-full ms-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <FormSelectCategories
              label="Difficulty level"
              //   ref={difficultyRef}
              categories={["easy", "medium", "hard"]}
              {...register("difficulty", {
                required: "Enter your group name",
              })}
            />
            <FormSelectCategories
              label="Category type"
              //   ref={groupRef}
              categories={["FE", "BE"]}
              {...register("type", { required: "Enter your group name" })}
            />
            {/* <FormSelectGroups
              label="Group name"
              //   ref={typeRef}
              groupsCollection={groups}
              {...register("group", { required: "Enter your group name" })}
            /> */}
            <div className="py-1">
              <div className="flex items-center text-sm justify-center rounded-xl border border-gray-300 tex-center m-2">
                <div
                  className={`bg-orange-100  w-full text-center overflow-hidden p-1 rounded-xl border pl-5 border-orange-100 font-medium ps-0 capitalize `}
                >
                  group
                </div>
                <select
                  className="m-auto text-center bg-white border-white rounded-xl pr-2 md:w-40 "
                  {...register("group", {
                    required: "Enter your group name",
                  })}
                >
                  {groups.length >= 0 &&
                    groups.map((group) => (
                      <option key={group._id} value={group._id}>
                        {group.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </ModalSection>
      ) : (
        <ModalSection
          openModal={showCode}
          setOpenModal={setShowCode}
          toggleModal={toggleModal}
          design="modalBtn"
          textBtn="submit"
          handleSubmit={handleSubmit(handleSubmitData)}
        >
          <div className="flex justify-center items-center flex-col">
            <div className="codeIcon">
              <ImPower
                className="bg-dark"
                style={{ fontSize: "4em", color: "yellow" }}
              />
            </div>
            <p className="capitalize font-bold text-lg">
              Quiz was created successfully
            </p>

            <div className="py-1">
              <div className="flex  justify-between font-bold text-lg rounded-xl border border-gray-300 w-7/12 2 m-2">
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`bg-orange-100 md:w-40 text-center  p-1 rounded-xl border pl-5 border-orange-100 font-medium ps-0 capitalize `}
                  >
                    code :
                  </div>
                  <p className="capitalize font-bold text-lg">
                    {quizCode}dddddddd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalSection>
      )}
    </>
  );
};

export default SetNewQuizModal;
