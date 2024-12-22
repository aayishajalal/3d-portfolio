import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import { Home, About, Projects, Contact } from "../pages/index";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default appRouter;
