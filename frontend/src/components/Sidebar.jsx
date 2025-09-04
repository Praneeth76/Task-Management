import { NavLink } from "react-router-dom";
import { LayoutGrid, BookOpen, Users, MessageSquare, Settings } from "lucide-react";
import HelpCenterCard from "./HelpCenterCard";

export default function Sidebar() {
  const menuItems = [
    { name: "Overview", icon: <LayoutGrid size={20} />, path: "/" },
    { name: "Task", icon: <BookOpen size={20} />, path: "/tasks" },
    { name: "Mentors", icon: <Users size={20} />, path: "/mentors" },
    { name: "Message", icon: <MessageSquare size={20} />, path: "/" },
    { name: "Settings", icon: <Settings size={20} />, path: "/" },
  ];

  return (
    <div className="hidden md:flex w-60 bg-white shadow-md h-screen p-6 flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">DNX</h1>
        </div>
        <ul className="space-y-3">
          {menuItems.map(({ name, icon, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                    isActive ? "bg-gray-100 text-black font-semibold" : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                <span className="text-current">{icon}</span> 
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <HelpCenterCard />
      </div>
    </div>
  );
}
