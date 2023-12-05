import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
