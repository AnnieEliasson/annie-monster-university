import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import MonsterContextProvider from "./Components/ContextProvider/MonsterContextProvider";

import { router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MonsterContextProvider>
      <RouterProvider router={router} />
    </MonsterContextProvider>
  </React.StrictMode>
);
