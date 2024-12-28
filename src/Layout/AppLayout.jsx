import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  return (
    <>
      <main className="bg-slate-300/20 h-full">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
