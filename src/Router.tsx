import { createBrowserRouter } from "react-router-dom";
import AddPage from "./Pages/AddPage";
import Home from "./Pages/Home";
import MonsterPage from "./Pages/MonsterPage";
import StudentRegister from "./Pages/StudentRegister";
import Root from "./Pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
