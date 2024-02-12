import { useTranslation } from "react-i18next";
import image from "../../Assets/Images/quiz-img.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="  border border-[#ddd] rounded-[10px]">
          <div className="flex justify-between p-4  ">
            <h3>{t("UpcomingQuizzes")}</h3>
            <h6>{t("QuizDirectory")}</h6>
          </div>
          <div className="cards-list px-4">
            <div className="card my-2 border  border-1 border-[#ddd] rounded-[10px]  w-full flex ">
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-des w-[100%]  p-3">
                <h1 className="font-bold">
                  Introduction to computer programming
                </h1>
                <div className="text-[#777]">
                  <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
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
            <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-des w-[100%]  p-3">
                <h1 className="font-bold">
                  Introduction to computer programming
                </h1>
                <div className="text-[#777]">
                  <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
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
            <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-des w-[100%]  p-3">
                <h1 className="font-bold">
                  Introduction to computer programming
                </h1>
                <div className="text-[#777]">
                  <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
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
          </div>
        </div>
        <div className=" border border-[#ddd] rounded-[10px]">
          <div className="flex justify-between p-4  ">
            <h3>{t("Top5Students")} </h3>
            <h6>{t("AllStudents")} </h6>
          </div>
          <div className="cards-list px-4">
            <div className="card my-2 border border-1 border-[#ddd] rounded-[10px]  w-full flex ">
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-des w-[100%] flex items-center justify-between  p-3">
                <div>
                  <h1 className="font-bold">
                    Introduction to computer programming
                  </h1>
                  <div className="text-[#777]">
                    <span>12 / 03 / 2023</span> | <span>09:00 AM</span>
                  </div>
                </div>
                <div>
                  <FaArrowAltCircleRight className="text-mainColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
