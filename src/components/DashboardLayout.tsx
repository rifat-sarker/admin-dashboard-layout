import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const shouldShowSidebar = isSidebarOpen || isMobileMenuOpen;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {shouldShowSidebar && (
        <Sidebar
          isMobile={isMobileMenuOpen}
          closeMobile={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
    ${shouldShowSidebar ? "sm:ml-64 ml-0" : "ml-0"}`}
      >
        <Topbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          toggleMobileMenu={toggleMobileMenu}
        />
        <main className="p-24 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
