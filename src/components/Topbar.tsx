import { useState } from "react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

interface TopbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
}

export default function Topbar({
  isSidebarOpen,
  toggleSidebar,
  toggleMobileMenu,
}: TopbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 right-0 z-20 transition-all duration-300 ease-in-out bg-white border-b shadow-sm px-6 py-6 flex justify-between items-center
        ${
          isSidebarOpen
            ? "sm:ml-64 sm:w-[calc(100%-16rem)]"
            : "sm:ml-0 sm:w-full"
        } w-full
      `}
    >
      <div className="flex items-center space-x-2">
        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={toggleMobileMenu}>
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button className="hidden sm:block" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <ChevronDoubleLeftIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <ChevronDoubleRightIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>

        <h1 className="text-xl font-semibold ml-2">Admin Panel</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-black">
          <BellIcon className="w-6 h-6" />
        </button>

        <div className="relative">
          <button
            className="w-8 h-8 rounded-full bg-[#9b52fa] flex items-center justify-center"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <UserCircleIcon className="w-6 h-6 text-white" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
