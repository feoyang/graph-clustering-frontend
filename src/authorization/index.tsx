import React from 'react';

export interface AuthorizationProps {
  children: React.ReactNode;
}

export function Authorization({ children }: AuthorizationProps) {
  return (
    <>{children}</>
  );
}
