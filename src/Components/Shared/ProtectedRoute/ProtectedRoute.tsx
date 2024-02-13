import { ReactNode, useEffect } from "react";
import "./ProtectedRoute.module.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface prop {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: prop) => {
  let {userData} = useSelector((state:any)=>{
    return state.authUser
  })
  // console.log(JSON.parse(userData));

  if (JSON.parse(userData)?.accessToken) {
      return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
