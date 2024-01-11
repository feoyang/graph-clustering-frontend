import React, { useEffect } from "react";
import { request } from "../../../services/core/http";
const Layout: React.FC = () => {
  useEffect(() => {
    request.get("/test");
  }, []);

  return (
    <>
      <div>this is home</div>
    </>
  );
};

export default Layout;
