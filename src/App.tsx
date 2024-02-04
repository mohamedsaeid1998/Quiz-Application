import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Store from "./Redux/Store";
import { AuthLayout, InstructorLayout, LearnerLayout, NotFound, ProtectedRoute } from "./Components";
import { ForgetPassword, Login, Register, ResetPassword } from "./Pages";
import ChangePassword from "./Pages/Auth/ChangePassword/ChangePassword";
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
      { path: "change-password", element: <ChangePassword/> },
    ],
  },


    {
      path: "learner",
      element: (
        <LearnerLayout />
      ),
      errorElement: <NotFound />,
      children: [
        // { index: true, element: <Landing /> },
        // { path:'explore', element: <Explore /> },

      ]
    },

    {
      path: "dashboard",element:<InstructorLayout />,errorElement: <NotFound />,children: [
        // {index: true, element:<Home/>},
        // { path: "users", element: <Users /> },
      ],
    },


  ]);

  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  )
}

export default App
