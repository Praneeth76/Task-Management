import React, { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiMenu,
  FiFilter,
  FiGrid,
} from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const titleMap = {
    "/tasks": "Explore Task",
    "/mentors": "Explore Mentors",
    "/tasks/:${id}": "DetailTask",
  };

  const filter = {
    "/tasks": "Deadline",
    "/mentors": "Popular",
  };

  const pageTitle = titleMap[location.pathname] || "Explore Task";
  const filterBy = filter[location.pathname] || "Deadline";

  const avatar =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // New state to track sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="w-full">
      <div className="hidden md:flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {pageTitle}
          </h1>

          <div className="flex items-center gap-4">
            <button
              aria-label="notifications"
              className="relative w-10 h-10 rounded-full border bg-white flex items-center justify-center"
            >
              <FiBell className="text-lg text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            <img
              src={avatar}
              alt="user"
              className="w-10 h-10 rounded-full object-cover border"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder={pageTitle == "Explore Task" ? "Search Task" : "Search Mentor"}
              className="w-full h-11 rounded-lg border px-4 pr-10 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200 bg-white"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-white whitespace-nowrap hover:bg-gray-50">
              <FiGrid className="text-gray-600" />
              <span className="text-sm text-gray-700">Category</span>
            </button>
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-white whitespace-nowrap hover:bg-gray-50">
              <FiFilter className="text-gray-600" />
              <span className="text-sm text-gray-700">Sort By : {filterBy}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button
            aria-label="menu"
            className="w-11 h-11 rounded-full border bg-white flex items-center justify-center"
            onClick={toggleSidebar}  // Added toggle here
          >
            <FiMenu className="text-2xl text-gray-700" />
          </button>

          <div className="flex items-center gap-3">
            <button
              aria-label="notifications"
              className="relative w-10 h-10 rounded-full border bg-white flex items-center justify-center"
            >
              <FiBell className="text-lg text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            <img
              src={avatar}
              alt="user"
              className="w-9 h-9 rounded-full object-cover border"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Task"
              className="w-full h-12 rounded-xl border px-4 pr-12 placeholder-gray-400 text-sm focus:outline-none bg-white"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            aria-label="filter"
            className="w-12 h-12 rounded-lg border bg-white flex items-center justify-center"
          >
            <FiFilter className="text-gray-600" />
          </button>
        </div>
        {sidebarOpen && (
          <nav className="mt-4 bg-white rounded-lg shadow-md p-4">
            <button onClick={() => setSidebarOpen(false)} className="mb-2 block text-left w-full">Close Sidebar</button>
            <Link to="/tasks" className="block py-1 px-2 hover:bg-gray-100 rounded">Tasks</Link>
            <Link to="/mentors" className="block py-1 px-2 hover:bg-gray-100 rounded">Mentors</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
