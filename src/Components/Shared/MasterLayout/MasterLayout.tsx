import { Outlet } from "react-router-dom";
import "./MasterLayout.module.scss";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

const MasterLayout = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="sidebar-container ">
          <SideBar/>
        </div>
        <div className="w-[100%] p-5">
          <NavBar/>
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
