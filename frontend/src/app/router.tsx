// @path: src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../features/layout/Layout";
import Home from "../pages/home/Home";
import Products from "../pages/Products/Products";
import TestingFeatures from "./TestingFeatures";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/test", element: <TestingFeatures /> },
    ],
  },
]);

export default router;
