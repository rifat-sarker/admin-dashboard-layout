import {
  Squares2X2Icon,
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  isMobile: boolean;
  closeMobile: () => void;
}

const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Squares2X2Icon className="h-6 w-6" />,
  },
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: "Profile",
    icon: <UserGroupIcon className="h-6 w-6" />,
    children: [
      {
        name: "Product",
        path: "/profile/product",
        icon: <ShoppingBagIcon className="h-5 w-5" />,
      },
      {
        name: "User",
        path: "/profile/user",
        icon: <UserIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="h-6 w-6" />,
  },
];

export default function Sidebar({ isMobile, closeMobile }: SidebarProps) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const renderNavLinks = () =>
    navLinks.map((link) =>
      link.children ? (
        <div key={link.name}>
          <button
            onClick={() => toggleMenu(link.name)}
            className="flex items-center justify-between w-full px-6 py-2 text-left text-white hover:text-gray-300"
          >
            <span className="flex items-center gap-3">
              {link.icon}
              <span>{link.name}</span>
            </span>
            {openMenu === link.name ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openMenu === link.name ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="ml-12 space-y-1">
              {link.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700 text-sm ${
                    location.pathname === child.path ? "bg-gray-700" : ""
                  }`}
                  onClick={closeMobile}
                >
                  {child.icon}
                  <span>{child.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link
          key={link.path}
          to={link.path}
          className={`flex items-center gap-3 px-6 py-2 hover:bg-gray-700 ${
            location.pathname === link.path ? "bg-gray-700" : ""
          }`}
          onClick={closeMobile}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      )
    );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:block bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out">
        <div className="p-6 text-xl font-bold">Admin Panel</div>
        <nav className="flex flex-col space-y-2">{renderNavLinks()}</nav>
      </aside>

      {/* Mobile Drawer */}
      {isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden">
          <aside className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={closeMobile}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2">{renderNavLinks()}</nav>
          </aside>
        </div>
      )}
    </>
  );
}
