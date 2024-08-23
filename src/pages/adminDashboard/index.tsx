import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/adminDashboard/sidebar";
import Navbar from "../../components/adminDashboard/navbar";

const AdminDashboard: React.FC = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-4 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
