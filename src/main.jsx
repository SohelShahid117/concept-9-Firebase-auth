import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import About from "./Component/About/About";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import PersonalData from "./Component/PersonalData/PersonalData";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/about",
      //   element: (
      //     <ProtectedRoute>
      //       <About></About>
      //     </ProtectedRoute>
      //   ),
      // },
      // {
      //   path: "/pData",
      //   element: (
      //     <ProtectedRoute>
      //       <PersonalData></PersonalData>
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About></About>
          </ProtectedRoute>
        ),
      },
      {
        path: "/pData",
        element: (
          <ProtectedRoute>
            <PersonalData></PersonalData>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
