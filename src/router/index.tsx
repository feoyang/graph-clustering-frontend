import Layout from "../pages/authorization/Layout";
import Login from "../pages/authorization/Login";
import Register from "../pages/authorization/Register";
import Home from "../pages/home/Layout";

import { createBrowserRouter } from "react-router-dom";
import { Authorization } from "../authorization";
// 配置路由实例

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    element: (
      <Authorization>
        <Home />
      </Authorization>
    ),
  },
]);

export default router;
