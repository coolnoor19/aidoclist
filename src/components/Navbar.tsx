import { Bell, Grid } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">
          <span className="text-gray-800">Doc</span>
          <span className="text-blue-600">ulance</span>
        </span>
        <span className="hidden sm:block text-gray-500 text-sm">
          AI Powered OCR Enabled DMS
        </span>
      </div>

      {/* Center - Grid Icon */}
      <div className="hidden md:flex items-center justify-center">
        <div className="p-2 rounded-full border border-blue-500 flex items-center justify-center">
          <Grid size={20} className="text-blue-600" />
        </div>
      </div>

      {/* Right - Notifications & User */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <div className="relative">
          <div className="p-2 bg-blue-600 rounded-full flex items-center justify-center">
            <Bell size={18} className="text-white" />
          </div>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            0
          </span>
        </div>

        {/* Welcome Text */}
        <span className="hidden sm:block text-blue-600 text-sm">
          Welcome soniya
        </span>

        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          S
        </div>
      </div>
    </nav>
  );
}
