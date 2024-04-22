import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MonsterPage from "./Pages/MonsterPage";
import MonsterContextProvider from "./Components/ContextProvider/MonsterContextProvider";
import AddPage from "./Pages/AddPage";
import StudentRegister from "./Pages/StudentRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/student-register",
        element: <StudentRegister />,
        children: [
          {
            path: "/student-register/:monsterId",
            element: <MonsterPage />,
            errorElement: <div>error</div>,
          },
          {
            path: "/student-register/delete",
            element: <div className="DeletePage">Student has been removed</div>,
          },
          {
            path: "/student-register/AddPage",
            element: <AddPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MonsterContextProvider>
      <RouterProvider router={router} />
    </MonsterContextProvider>
  </React.StrictMode>
);
