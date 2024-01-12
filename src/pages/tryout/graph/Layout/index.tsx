import React from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const Graph: React.FC = () => {
  return (
    <>
      <div className="graph">
        <Outlet />
      </div>
    </>
  );
};

export default Graph;
