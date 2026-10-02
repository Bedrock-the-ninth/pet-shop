import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../features/layout/Layout";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

export default router;
