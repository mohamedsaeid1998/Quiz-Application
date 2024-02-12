/** @format */

import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Store from "./Redux/Store";
import { AuthLayout, MasterLayout, ProtectedRoute } from "./Components";
import {
  ForgetPassword,
  Groups,
  Home,
  Login,
  NotFound,
  Quizzes,
  Register,
  ResetPassword,
  Results,
  Students,
} from "./Pages";
import ChangePassword from "./Pages/Auth/ChangePassword/ChangePassword";
import Help from "./Pages/Help/Help";
// import LoadingComponent from "./Components/Loading/Loading";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "change-password", element: <ChangePassword /> },
      ],
    },

    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "Students", element: <Students /> },
        { path: "groups", element: <Groups /> },
        { path: "quizzes", element: <Quizzes /> },
        { path: "results", element: <Results /> },
        { path: "help", element: <Help /> },
      ],
    },
  ]);

  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
