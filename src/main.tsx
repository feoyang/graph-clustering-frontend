import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "jotai";
import "normalize.css";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      {/* <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}> */}
      <RouterProvider router={router} />
      {/* </ConfigProvider> */}
    </Provider>
  </React.StrictMode>
);
