
import { DashboardSidebar } from "@/Components/Dashboard/DashboardSidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
        <DashboardSidebar/>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
