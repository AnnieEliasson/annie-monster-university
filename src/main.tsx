import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MonsterPage from "./Pages/MonsterPage";
import MonsterContextProvider from "./Components/ContextProvider/MonsterContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/:monsterId",
        element: <MonsterPage />,
        errorElement: <div>error</div>,
      },
      {
        path: "/delete",
        element: <div className="DeletePage">Student has been removed</div>,
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
