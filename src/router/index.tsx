import { createBrowserRouter } from "react-router-dom";
import { Authorization } from "../authorization";
import Tryout from "../pages/tryout/Layout";
import Login from "../pages/tryout/authorization/Login";
import Register from "../pages/tryout/authorization/Register";
import User from "../pages/tryout/authorization/Layout";
import Graph from "../pages/tryout/graph/Layout";
import Upload from "../pages/tryout/graph/Upload";
import Display from "../pages/tryout/graph/Display";
import Home from "../pages/home/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tryout />,
    children: [
      {
        path: "user",
        element: <User />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "graph",
        element: <Graph />,
        children: [
          {
            path: "upload",
            element: <Upload />,
          },
          {
            path: "display",
            element: <Display />,
          },
        ],
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
