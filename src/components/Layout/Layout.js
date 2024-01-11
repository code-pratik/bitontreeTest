import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E4E7EB] dark:bg-black">
      <Navbar />
      <div className="pt-[4rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
