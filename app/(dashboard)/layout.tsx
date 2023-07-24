import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative dark:bg-neutral-800">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-stone-900">
        <div>
          <SideBar />
        </div>
      </div>
      <main className="md:pl-72 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
