/** @format */
import { useEffect, useState } from "react";
import ModalSection from "@/Components/Shared/ModalSection/ModalSection";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getAllGroupsData } from "@/Redux/Featuers/Groups/getGroupsData";
import UseActionGet from "@/Utils/Hooks/UseActionGet";
import { getStudentData } from "@/Redux/Featuers/Student/getStudentSlice";
import { useForm } from "react-hook-form";
import { FormInput, FormSelect } from "@/Components/Instructor/FormInput";
import { Modal, Select } from 'flowbite-react';
import useAction from "@/Utils/Hooks/UseAction";
import { createNewGroup } from "@/Redux/Featuers/Groups/addNewGroupSlice";
import { deleteGroup } from "@/Redux/Featuers/Groups/deleteGroupSlice";
import ModalDeleteSection from "@/Components/Shared/ModalSection/ModalDeleteSection";
import { toast } from "react-toastify";
import { editGroup } from "@/Redux/Featuers/Groups/editGroupSlice";
import { getGroupData } from "@/Redux/Featuers/Groups/getGroupItem";
import { TbFidgetSpinner } from "react-icons/tb";
import { useTranslation } from "react-i18next";


const Groups = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [groupName, setGroupName] = useState();
  const [groupStudents, setGroupStudents] = useState([]);
  const [groupId, setGroupId] = useState("");

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const toggleModalDelete = (id: any) => {
    setOpenModalDelete(!openModalDelete);
    setItemId(id)
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [groupsData, setGroupsData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);

  const toggleModalEdit = async (id: any) => {
    setOpenModalEdit(!openModalEdit);
    setItemId(id)
    await getGroupItemData(id)
    setValue("name", groupName);
    setValue("students", groupStudents.map(({ _id }) => {
      return _id
    }));
  };
  const toggleModal = (id: any) => {
    setOpenModal(!openModal);
    setItemId(id)
    setValue("name", "");
    setValue("students", "");
  };

  useEffect(() => {

    setValue("name", groupName);
    setValue("students", groupStudents.map(({ _id }) => {
      return _id
    }));

  }, [groupName,groupStudents])


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();



  const getGroupsData = UseActionGet(getAllGroupsData)
  const getStudentsData = UseActionGet(getStudentData)
  const getGroupDetails = useAction(getGroupData)
  const createGroup = useAction(createNewGroup)
  const RemoveGroup = useAction(deleteGroup)
  const UpdateGroup = useAction(editGroup)
  useEffect(() => {
    handleGetGroupsData()
    handleGetStudentsData()
  }, [])


  //! **************************  getGroupsData   **************************

  const handleGetGroupsData = async () => {
    setIsLoading(true);
    await getGroupsData()
      .then((res) => {
        console.log(res);

        setGroupsData(res?.data)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //! **************************  getStudentsData   **************************

  const handleGetStudentsData = async () => {
    setIsLoading(true);
    await getStudentsData()
      .then((res) => {
        console.log(res.data);
        setStudentsData(res?.data)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //! **************************  Delete Group   **************************

  const deleteGroupData = async (id: any) => {
    setIsLoading(true);
    await RemoveGroup(id)
      .then((res) => {
        console.log(res);
        toggleModalDelete(0)
        if (res?.data?.message === "Record deleted successfully") {
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.response?.data?.message);
        }
        handleGetGroupsData()
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  //! **************************  Get Group Details  **************************

  const getGroupItemData = async (id: any) => {
    setIsLoading(true);
    await getGroupDetails(id)
      .then((res) => {
        console.log(res.data);
        setGroupName(res?.data?.name)
        setGroupStudents(res?.data?.students)
        setGroupId(res?.data?._id)
      })
      .finally(() => {
        setIsLoading(false);
      });

  }
  console.log(groupName);

  //! **************************  Edit Group   **************************

  const UpdateGroupData = async (data: any) => {
    const AllData = { ...data, id: groupId }


    setIsLoading(true);
    await UpdateGroup(AllData)
      .then((res) => {
        console.log(res);
        setOpenModalEdit(!openModalEdit);
        if (res?.data?.message === "Record updated successfully") {
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.response?.data?.message);
        }
        handleGetGroupsData()
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  //! **************************  Create A New Group   **************************

  const handleSendData = async (data: any) => {
    setIsLoading(true);
    await createGroup(data)
      .then((res) => {
        console.log(res);
        toggleModal(0)
        if (res?.data?.message === "Record created successfully") {
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.response?.data?.message);
        }
        handleGetGroupsData()
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  return (
    <>
      <main>
        {/* <ModalSection textBtn="Submit" modalTitle="Edit Group" handleSubmit={handleSubmit(UpdateGroupData)} {...{ openModal, setOpenModal, isLoading }} >
          <FormInput
            label="Set up a new Group"
            // ref={titleRef}
            default
            deign=""
            {...register("name", { required: "Enter your group name" })}
          />
          <div
          // className="flex items-center  m-2"
          >


            <Select
              multiple

              // className="m-auto text-center bg-white border-white rounded-xl pr-2 md:w-40 "
              {...register("students", {
                required: "Enter your students",
              })}

            >
              <option value={""} className="text-muted">Select Students</option>
              {studentsData?.length > 0 &&
                studentsData?.map(({ _id, first_name, last_name }) => (
                  <option key={_id} value={_id}>{first_name + " " + last_name}</option>

                ))}
            </Select>

          </div>


        </ModalSection> */}
        <Modal
          show={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          size="4xl"
          popup
        >
          <Modal.Header className="p-4 capitalize">Edit Group</Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(UpdateGroupData)}>
              <div className="py-2 ">
                <FormInput
                  label="Set up a new Group"
                  // ref={titleRef}
                  deign=""
                  // value={groupDetails?.name}
                  {...register("name", { required: "Enter your group name" })}
                />
              </div>
              <div
              // className="flex items-center  m-2"
              >


                <Select
                  multiple

                  // className="m-auto text-center bg-white border-white rounded-xl pr-2 md:w-40 "
                  {...register("students", {
                    required: "Enter your students",
                  })}

                >
                  <option value={""} className="text-muted">Select Students</option>
                  {studentsData?.length > 0 &&
                    studentsData?.map(({ _id, first_name, last_name }) => (
                      <option key={_id} value={_id}>{first_name + " " + last_name}</option>

                    ))}
                </Select>
                {isLoading ?

                  <button
                    disabled={isLoading}
                    type="button"
                    className="flex items-center justify-center m-auto w-40 p-2 space-y-6 border border-[#ddd] rounded-[2rem]  text-gray-100	"
                  >
                    <TbFidgetSpinner className="animate-spin" size={20} />
                  </button> :
                  <button
                    type="submit"
                    className={` block m-auto w-1/4 p-2 space-y-6 border border-[#ddd] rounded-[2rem] px-5 text-gray-100   `}
                  >
                    Submit
                  </button>}

              </div>
            </form>
          </Modal.Body>
        </Modal>

        <ModalSection textBtn="Submit" modalTitle="Add Group" handleSubmit={handleSubmit(handleSendData)} {...{ openModal, setOpenModal, isLoading }} >
          <FormInput
            label="Set up a new Group"
            // ref={titleRef}
            deign=""
            // value={groupDetails?.name}
            {...register("name", { required: "Enter your group name" })}
          />
          <div
          // className="flex items-center  m-2"
          >


            <Select
              multiple

              // className="m-auto text-center bg-white border-white rounded-xl pr-2 md:w-40 "
              {...register("students", {
                required: "Enter your students",
              })}

            >
              <option value={""} className="text-muted">Select Students</option>
              {studentsData?.length > 0 &&
                studentsData?.map(({ _id, first_name, last_name }) => (
                  <option key={_id} value={_id}>{first_name + " " + last_name}</option>

                ))}
            </Select>

          </div>


        </ModalSection>
        <ModalDeleteSection textBtn="Submit" modalTitle="Delete Group" handleFunction={() => deleteGroupData(itemId)}  {...{ openModalDelete, setOpenModalDelete, isLoading }}>
          <p className="font-medium my-3 text-base pt-2 capitalize">
            are you sure you want to delete this Group ? if you are sure just click
            on delete it
          </p>
        </ModalDeleteSection>
        <div className="container">

          <div className=" my-4 flex justify-end">
            <button
              onClick={toggleModal}
              className="border-2 p-1 rounded-full flex  justify-center items-center gap-2  "
            >
              <span className="text-2xl">
                <FaCirclePlus />
              </span>
              {t("AddGroup")}
            </button>
          </div>

          <div className="border p-4 border-[#ddd] rounded-[10px]">
            <h1 className="font-medium text-xl capitalize ">{t("GroupsList")}</h1>

            <div className="grid grid-cols-2 mt-8 gap-x-12 gap-y-3">
              {groupsData?.map(({ _id, name, max_students }) => <div key={_id} className="border p-4 border-[#ddd] rounded-[10px] flex justify-between items-center">

                <div className="flex flex-col">
                  <h2 className="font-medium text-lg capitalize ">Group : {name}</h2>
                  <p className="font-medium text-sm text-gray-800 ">No. of students : {max_students}</p>
                </div>

                <div className=" flex gap-2">
                  <button onClick={() => toggleModalEdit(_id)}><FaRegEdit size={22} /></button>
                  <button onClick={() => toggleModalDelete(_id)}><MdOutlineDeleteOutline size={25} /></button>
                </div>

              </div>

              )}

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Groups;
