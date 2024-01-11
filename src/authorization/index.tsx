import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "./token";
export interface AuthorizationProps {
  children: React.ReactNode;
}

export function Authorization({ children }: AuthorizationProps) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}
