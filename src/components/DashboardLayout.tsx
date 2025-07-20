import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Topbar />
      <main className="pt-20 px-4 md:ml-64">{children}</main>
    </div>
  );
}
