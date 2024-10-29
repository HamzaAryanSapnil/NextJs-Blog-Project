import React from "react";
import Navbar from "../../components/Navbar";

const layout = ({ children }) => {
  return (
    <main className="font-work-sans min-h-screen ">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
