/** @format */

import useAction from "@/Utils/Hooks/UseAction";
import React from "react";
import { useForm } from "react-hook-form";
import "./Students.scss";

// import ModalViewSection from "@/Components/Shared/ModalSection/ModalViewSection";
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
  const [groups, setGroups] = React.useState(null);

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
  const fetchData = useAction(getStudentData);
  const fetchStudentData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchData();
      setStudentData(data?.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    fetchStudentData();
  }, []);

  const visibleStudents = showMore ? groups : groups?.slice(0, 3);
  const removeDuplicated = async (data) => {
    const uniqueGroups = await [
      ...new Set(
        data
          .map((item) => item?.group?.name)
          .filter((name) => typeof name === "string" && name.trim() !== "")
      ),
    ];
    return setGroups(uniqueGroups);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const [studentId, setStudentId] = React.useState(null);
  const toggleModal = (itemId) => {
    setStudentId(itemId); // Set the id to state or use it as needed
    setOpenModal(!openModal);
  };
  const [hoveredCardId, setHoveredCardId] = React.useState(null);
  // const visibleStudents = studentData?.slice(0, 3);

  return (
    <>
   
    </>
  );
};
export default Students;
// export const Delete = ({ id, getData }) => {
//   let [isLoading, setIsLoading] = React.useState(false);


//   const currentUrl = useCurrentUrl();
//   const dispatch = useDispatch();

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
      <MdOutlineDeleteOutline size={25} className="" onClick={toggleModal} />
      <ModalDeleteSection
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        toggleModal={toggleModal}
        textBtn="Delete"
        modalTitle="Delete Student"
        handleFunction={handleDelete}
        
      >
       
      </ModalDeleteSection>
    </span>
  );
};

export  const ViewDetails = ({ id ,isHovered,rest}) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [openViewModal, setOpenViewModal] = React.useState(false);
  const [studentData,setStudentData]=React.useState([])
  const toggleModal = () => {
    setOpenViewModal(!openViewModal);
  };
  const dispatch = useDispatch();

  const handelView  = React.useCallback(async () => {

    setIsLoading(true);
    try {

      const element = await dispatch(getStudentDataDetails(id));
      setStudentData(element?.payload?.data)
    } finally {
      setIsLoading(false);
    }
  }, [dispatch,  id]);
  React.useEffect(() => {
    if (openViewModal) {
      handelView();
    }
  }, [openViewModal, handelView ]);
  const headers = ['Student Name', 'Email', 'Status', 'Group Name'];

  const studentDataTable = [
    `${studentData?.first_name} ${studentData?.last_name}`,
    studentData?.email,
    studentData?.status,
    studentData?.groupName
  ];
 

  return (
   <>
 <div  className="rounded-2xl  p-2" onClick={toggleModal} > 
 <div className="p-2 inset-0 bg-gray-200 rounded-full shadow-md">

   {rest}
   </div>

 </div>
      <ModalViewSection
        openViewModal={openViewModal}
        setOpenViewModal={setOpenViewModal}
        toggleModal={toggleModal}
        textBtn="Student Details"
        modalTitle="Student"
      >
        <div className="relative overflow-x-auto">
    <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headers.map((header, index) => (
              <tr key={index}>
                
       <th className="px-4 py-2 text-left  border-2">{     isLoading?(                    <div className="h-3 border-2 bg-gray-200 rounded-full dark:bg-gray-700  w-1/2 mb-2.5"></div>
):header}</th>


            <td className="border px-4 py-2">
                  {isLoading ? (
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
                  ) : (
                    <p>
                      {header === 'Student Name'
                        ? `${studentData?.first_name} ${studentData?.last_name}`
                        : header === 'Email'
                        ? studentData?.email
                        : header === 'Status'
                        ? studentData?.status
                        : studentData?.group?.name}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </thead>
        </Table>
        </div>
       
      </ModalViewSection>
    </>
  );
};
