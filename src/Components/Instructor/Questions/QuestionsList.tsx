import { getQuestions } from "@/Redux/Featuers/Questions/GetAllQuestionsSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import QuestionsDelete from "./QuestionsDelete";
import QuestionsEdit from "./QuestionsEdit";

export default function QuestionsList() {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [getId, setGetId] = useState("");
  const [getAllData, setGetAllData] = useState([]);
  console.log(getAllData);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await dispatch(getQuestions());
    setData(res.payload.data);
  };
  useEffect(() => {
    getData();
    dispatch(getQuestions());
  }, [dispatch, getData]);
  const list = data.map((question: any) => (
    <tr key={question._id} className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap border-r px-6  font-medium dark:border-neutral-500">
        {question?.title}
      </td>
      <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
        {question.description}
      </td>
      <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
        {question.difficulty}
      </td>
      {/* <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
        {question.difficulty}
      </td> */}
      <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500 flex text-[30px] text-center text-[#FB7C19]">
        <TbEdit
          className=" cursor-pointer"
          onClick={() => {
            setOpenModalEdit(true);
            setGetAllData(question);
          }}
        />
        <RiDeleteBinLine
          className="ml-5 cursor-pointer"
          onClick={() => {
            setOpenModalDelete(true);
            setGetId(question._id);
          }}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <div className="w-[90%] m-auto">
        <QuestionsDelete
          openModalDelete={openModalDelete}
          setOpenModalDelete={setOpenModalDelete}
          id={getId}
        />
        <QuestionsEdit
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          getAllData={getAllData}
        />
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border  text-sm font-light dark:border-neutral-500 text-center">
                <thead className="border-b font-medium bg-[#0D1321] text-white text-center ">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {t("QuestionTitle")}
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {t("QuestionDesc")}
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {t("QuestionDifficultyLevel")}
                    </th>
                    {/* <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {t("Date")}
                    </th> */}
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {t("Actions")}
                    </th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
