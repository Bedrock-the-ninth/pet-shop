// @path: src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../features/layout/Layout";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default router;
