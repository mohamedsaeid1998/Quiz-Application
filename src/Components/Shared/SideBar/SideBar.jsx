/** @format */

import { useState } from "react";
import {
  AiOutlineFieldTime,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";

import { PiUsersFourFill } from "react-icons/pi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="sidebar-container ">
        <Sidebar
          collapsed={isCollapsed}
          rtl={i18n.language == "ar" ? true : false}
        >
          <Menu className="border border-[#ddd] h-[100vh]">
            <MenuItem
              onClick={handleToggle}
              icon={<AiOutlineMenu className=" text-[30px]" />}
            ></MenuItem>
            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={<AiOutlineHome className="bg-secondColor text-[30px]" />}
              component={<Link to="home" />}
            >
              {t("dashboard")}
            </MenuItem>
            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={<PiStudentDuotone className="bg-secondColor text-[30px]" />}
              component={<Link to="student" />}
            >
              {t("students")}
            </MenuItem>
            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={<PiUsersFourFill className="bg-secondColor text-[30px]" />}
              component={<Link to="groups" />}
            >
              {t("groups")}
            </MenuItem>

            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={
                <AiOutlineFieldTime className="bg-secondColor text-[30px]" />
              }
              component={<Link to="quiz" />}
            >
              {t("quizzes")}
            </MenuItem>
            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={
                <AiOutlineFileText className="bg-secondColor text-[30px]" />
              }
              component={<Link to="results" />}
            >
              {t("results")}
            </MenuItem>
            <MenuItem
              className="border-b border-black hover:bg-secondColor"
              icon={
                <IoMdHelpCircleOutline className="bg-secondColor text-[30px]" />
              }
              component={<Link to="help" />}
            >
              {t("help")}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}