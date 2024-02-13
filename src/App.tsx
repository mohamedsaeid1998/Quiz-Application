import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, MasterLayout, ProtectedRoute } from "./Components";
import {
  ForgetPassword,
  Login,
  NotFound,
  Register,
  ResetPassword,
} from "./Pages";
import ChangePassword from "./Pages/Auth/ChangePassword/ChangePassword";
import { ToastContainer } from "react-toastify";
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
      element: 
      <ProtectedRoute>
        <MasterLayout />
      </ProtectedRoute>,
      errorElement: <NotFound />,
      // children: [
      //   {index: true, element:<Home/>},
      //   { path: "users", element: <Users /> },
      // ],
    },
  ]);

  return (
    <>
      <ToastContainer theme="dark" autoClose={2000} />
        <RouterProvider router={routes} />
    </>
  );
}

export default App;
