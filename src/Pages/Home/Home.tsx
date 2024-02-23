import { quizImg, userImage } from "@/Assets/Images";
import { getIncomingQuizzesData } from "@/Redux/Featuers/Quizzes/getIncomingQuizzes";
import { getTopFiveStudents } from "@/Redux/Featuers/Student/getTopFiveStudentsSlice";

import UseActionGet from "@/Utils/Hooks/UseActionGet";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [fiveStudentsData, setFiveStudentsData] = useState([])
  const [fiveQuizzesData, setFiveQuizzesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const topFiveStudentsData = UseActionGet(getTopFiveStudents)
  const topFiveQuizzesData = UseActionGet(getIncomingQuizzesData)



  const handleQuizzesData = async () => {
    setIsLoading(true);
    await topFiveQuizzesData()
      .then((res) => {
        console.log(res);
        setFiveQuizzesData(res?.data)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleStudentsData = async () => {
    setIsLoading(true);
    await topFiveStudentsData()
      .then((res) => {
        setFiveStudentsData(res?.data)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleStudentsData()
    handleQuizzesData()
  }, [])

  console.log(fiveQuizzesData);


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="  border border-[#ddd] rounded-[10px]">
          <div className="flex justify-between p-4  ">
            <h3>{t("UpcomingQuizzes")}</h3>
            <h6>{t("QuizDirectory")}</h6>
          </div>
          <div className="cards-list px-4">
            {fiveQuizzesData.map(({ title, difficulty, description, code, schadule, createdAt }) =>
              <div className="card my-2 border  border-1 border-[#ddd] rounded-[10px]  w-full flex ">
                <div className="card-img">
                  <img src={quizImg} alt="quizImg" />
                </div>
                <div className="card-des w-[100%]  p-3">
                  <h1 className="font-bold">
                    {title}
                  </h1>
                  <div className="text-[#777]">
                    <span>{moment(createdAt).format("Do MMM YY")}</span> | <span>{moment(schadule).format("Do MMM YY")}</span>
                  </div>
                  <div className="flex justify-between">
                    <h2>No. of student’s enrolled: 32</h2>
                    <div className="flex items-center gap-2 cursor-pointer ">
                      <h6>Open</h6>
                      <FaArrowAltCircleRight className="text-mainColor " />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
        <div className=" border border-[#ddd] rounded-[10px]">
          <div className="flex justify-between p-4  ">
            <h3>{t("Top5Students")} </h3>
            <Link to={"/dashboard/student"} >{t("AllStudents")} </Link>
          </div>


          {fiveStudentsData?.map(({ _id, first_name, last_name, avg_score, group }) => <>
            <div key={_id} className="cards-list px-4">
              <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
                <div className="card-img  w-24 ">
                  <img src={userImage} className="object-cover" alt="userImage" />
                </div>
                <div className="card-des w-[100%] flex items-center justify-between  p-3">
                  <div>
                    <h1 className="font-bold">
                      {first_name + " " + last_name}
                    </h1>
                    <div className="text-[#777]">
                      <span>Group: {group?.name}</span> | <span>Average Score: {avg_score === 0 ? 0.7 : Math.round(avg_score)}</span>
                    </div>
                  </div>
                  <div>
                    <FaArrowAltCircleRight className="text-mainColor" />
                  </div>
                </div>
              </div>
            </div>

          </>
          )}

        </div>
      </div>
    </>
  );
}
