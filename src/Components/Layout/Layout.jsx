import React from "react";
import { Outlet } from "react-router-dom";
import user from "../../assets/user.png";
import logout from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-[14%] flex-1 flex flex-col h-screen">
      {/* Top Bar */}
      <div className="flex justify-end items-center p-4">
        <img src={user} 
        alt="User" 
        className="w-10 h-10 rounded-full mr-4" 
        />
        
        <img
          src={logout}
          alt="Logout"
          className="w-8 h-8 cursor-pointer"
          onClick={() => navigate("/server-login")}
        />
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-auto p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
