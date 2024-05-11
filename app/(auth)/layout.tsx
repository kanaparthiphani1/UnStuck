import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-center flex min-h-screen w-full">{children}</main>
  );
};

export default layout;
