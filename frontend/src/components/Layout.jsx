import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex h-svh">
      <div className="h-screen"><Sidebar /></div>
      <div className="flex flex-col pt-4 w-full md:overflow-y-auto">
        <div className="px-4 py-2"><Navbar  /></div>
        <Outlet />
      </div>
    </div>
  );
}
