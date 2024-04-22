import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MonsterPage from "./Pages/MonsterPage";
import MonsterContextProvider from "./Components/ContextProvider/MonsterContextProvider";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import StudentRegister from "./Pages/StudentRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/student-register",
        element: <StudentRegister />,
      },
      {
        path: "/:monsterId",
        element: <MonsterPage />,
        errorElement: <div>error</div>,
      },
      {
        path: "/delete",
        element: <div className="DeletePage">Student has been removed</div>,
      },
      {
        path: "/AddPage",
        element: <AddPage />,
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
