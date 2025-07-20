import { Squares2X2Icon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

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
    path: "/profile",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="h-6 w-6" />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 hidden md:block">
      <div className="p-6 text-2xl font-bold">Admin Panel</div>
      <nav className="flex flex-col space-y-2 mt-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-6 py-2 hover:bg-gray-700 ${
              location.pathname === link.path ? "bg-gray-700" : ""
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
