import React from "react";
import { Link, Outlet } from "react-router-dom";
import LeftOptDashboard from "./AdminPanel/LeftOptDashboard";

function DashBoard() {
  return (
    <div className="grid-rows-2 h-screen space-y-9">
      {/* Header Section */}
      <div className="border-4 border-light-blue-500 h-20">
        <div className="overflow-hidden w-full bg-gray-200 h-12 relative">
          <div className="animate-move-right-left whitespace-nowrap absolute top-0 left-0 text-lg font-bold text-blue-600">
            Your Name Traveling Right to Left and Back
          </div>
        </div>
      </div>

      {/* Main Content Bar */}
      <div className="h-5/6 flex">
        {/* Left Navigation Bar */}
        <div className="w-1/4 border-4 border-light-blue-500 bg-blue-400">
          <LeftOptDashboard />
        </div>

        {/* Right Content Section */}
        <div className="w-3/4 border-4 border-light-blue-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
