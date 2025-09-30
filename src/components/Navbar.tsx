// import { Bell } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// export default function Navbar() {
//   const navigate = useNavigate()
//   return (
//     <nav className="w-full border-b-2 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 shadow-md px-6 py-3 flex items-center justify-between">
//       {/* Left - Logo */}
//       <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
//         <span className="text-2xl font-bold tracking-tight text-white">
//           AI Docs
//         </span>
//       </div>

//       {/* Right - Notifications & User */}
//       <div className="flex items-center gap-4">
//         {/* Notification */}
//         <div className="relative group">
//           <div className="p-2 bg-white/20 hover:bg-white/30 transition rounded-full flex items-center justify-center cursor-pointer">
//             <Bell size={20} className="text-white" />
//           </div>
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
//             0
//           </span>
//         </div>

//         {/* Welcome Text */}
//         <span className="hidden sm:block text-white text-sm font-medium">
//           Welcome soniya
//         </span>

//         {/* Profile Icon */}
//         <div className="w-9 h-9 rounded-full bg-white text-teal-600 flex items-center justify-center font-semibold shadow-md">
//           S
//         </div>
//       </div>
//     </nav>
//   );
// }


import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = { onToggleSidebar?: () => void };

export default function Navbar({ onToggleSidebar }: Props) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b-2 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left - Logo + Hamburger */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition cursor-pointer"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} className="text-white" />
        </button>

        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold tracking-tight text-white">
            AI Docs
          </span>
        </div>
      </div>

      {/* Right - Notifications & User */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <div className="p-2 bg-white/20 hover:bg-white/30 transition rounded-full flex items-center justify-center cursor-pointer">
            <Bell size={20} className="text-white" />
          </div>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            0
          </span>
        </div>

        <span className="hidden sm:block text-white text-sm font-medium">
          Welcome soniya
        </span>

        <div className="w-9 h-9 rounded-full bg-white text-teal-600 flex items-center justify-center font-semibold shadow-md">
          S
        </div>
      </div>
    </nav>
  );
}
