import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black text-white overflow-hidden">
      {/* Top navbar (persistent) */}
      <Navbar onToggleSidebar={() => setIsOpen((v) => !v)} />

      {/* Sidebar (persistent) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Page content */}
      <main
        className={`transition-all duration-500 ease-in-out p-6 md:p-10 pt-28 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
