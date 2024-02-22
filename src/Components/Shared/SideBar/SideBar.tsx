/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AiOutlineFieldTime,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";
import { IoIosUnlock, IoMdHelpCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { PiStudent, PiUsersFourFill } from "react-icons/pi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar() {
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logOut = () => {
    localStorage.removeItem("UserToken");
    localStorage.removeItem("UserRole");
    navigate("/");
  };

  const role = localStorage.getItem("UserRole");
  // const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {/* <div className="flex items-center justify-center h-screen relative">
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div> */}
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
              {role === "Student" ? (
                ""
              ) : (
                <>
                  <MenuItem
                    className="border-b border-black hover:bg-secondColor"
                    icon={
                      <PiUsersFourFill className="bg-secondColor text-[30px]" />
                    }
                    component={<Link to="groups" />}
                  >
                    {t("groups")}
                  </MenuItem>

                  <MenuItem
                    className="border-b border-black hover:bg-secondColor"
                    icon={<PiStudent className="bg-secondColor text-[30px]" />}
                    component={<Link to="student" />}
                  >
                    {t("students")}
                  </MenuItem>
                </>
              )}

              <MenuItem
                className="border-b border-black hover:bg-secondColor"
                icon={
                  <AiOutlineFieldTime className="bg-secondColor text-[30px]" />
                }
                component={<Link to="quiz" />}
              >
                {t("quizzes")}
              </MenuItem>

              {role === "Student" ? (
                ""
              ) : (
                <MenuItem
                  className="border-b border-black hover:bg-secondColor"
                  icon={<FaQuestion className="bg-secondColor text-[30px]" />}
                  component={<Link to="questions" />}
                >
                  {t("questions")}
                </MenuItem>
              )}

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
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                icon={<IoIosUnlock className="bg-secondColor text-[30px]" />}
                component={<Link to="/change-password" />}
              >
                {t("changePassword")}
              </MenuItem>

              <MenuItem
                className="border-b border-black hover:bg-secondColor"
                onClick={logOut}
                icon={<LuLogOut className="bg-secondColor text-[30px]" />}
              >
                {t("logout")}
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
    </>
  );
}
