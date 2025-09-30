
// import { Menu, X, ChevronRight } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Toggle submenu
//   const handleMenuHover = (menu: string) => {
//     setOpenMenu(menu);
//   };

//   const handleMenuLeave = () => {
//     setOpenMenu(null);
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black text-white overflow-hidden">
//       {/* SIDEBAR */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-blue-800 via-gray-900 to-gray-950 shadow-xl 
//         transition-[width] duration-500 ease-in-out z-40 
//         ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
//       >
//         <div className="h-full flex flex-col p-6 space-y-6">
//           <h2 className="text-2xl font-bold text-blue-400 mb-6">
//             ⚙️ Management
//           </h2>

//           {/* USERS MENU */}
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMenuHover("users")}
//             onMouseLeave={handleMenuLeave}
//           >
//             <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
//               👤 Users <ChevronRight size={16} />
//             </button>
//             <div
//               className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out 
//               ${openMenu === "users" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
//             >
//               <button
//                 onClick={() => navigate("/add-user")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 ➕ Add User
//               </button>
//               <button
//                 onClick={() => navigate("/user-list")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 📋 User List
//               </button>
//             </div>
//           </div>

//           {/* MASTERS MENU */}
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMenuHover("masters")}
//             onMouseLeave={handleMenuLeave}
//           >
//             <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
//               📚 Masters <ChevronRight size={16} />
//             </button>
//             <div
//               className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out  
//               ${openMenu === "masters" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
//             >
//               <button
//                 onClick={() => navigate("/wings")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 🪽 Wings
//               </button>
//               <button
//                 onClick={() => navigate("/role-type")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 🎭 User Roles 
//               </button>
//             </div>
//           </div>

//           {/* DOCUMENTS MENU */}
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMenuHover("documents")}
//             onMouseLeave={handleMenuLeave}
//           >
//             <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
//               📑 Documents <ChevronRight size={16} />
//             </button>
//             <div
//               className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out 
//               ${openMenu === "documents" ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
//             >
//               <button
//                 onClick={() => navigate("/document-category")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 🗂 Doc Category
//               </button>
//               <button
//                 onClick={() => navigate("/add-document-new")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 📂 Add Doc
//               </button>
//               <button
//                 onClick={() => navigate("/document-list")}
//                 className="hover:text-blue-400 text-left cursor-pointer"
//               >
//                 📋 Doc List
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div
//         className={`flex-1 transition-all duration-500 ease-in-out p-6 md:p-10 
//         ${isOpen ? "ml-64" : "ml-0"}`}
//       >
//         {/* TOP BAR */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
//           {/* Toggle Sidebar */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg shadow-lg transition-all"
//           >
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>


//         </div>
//         {/* Search */}
//         <div className="w-full flex justify-center mb-7">
//           <input
//             type="text"
//             placeholder="🔍 Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="bg-white border h-[60px] border-gray-700 rounded-xl px-4 py-2 text-white 
//                focus:outline-none  shadow-md 
//                transition-all w-full md:w-156"
//           />
//         </div>

//         {/* DASHBOARD CONTENT */}
//         <div className="grid grid-cols-1  gap-8">

//           {/* Stats Divs */}
//           <div className="flex justify-center items-center  p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl text-center">
//               {/* Receive */}
//               <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-semibold mb-2">📥 Receive</h2>
//                 <p className="text-3xl font-bold text-blue-400">120</p>
//               </div>

//               {/* Pending */}
//               <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-semibold mb-2">⏳ Pending</h2>
//                 <p className="text-3xl font-bold text-yellow-400">45</p>
//               </div>

//               {/* Approved */}
//               <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-semibold mb-2">✅ Approved</h2>
//                 <p className="text-3xl font-bold text-green-400">75</p>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }

//new codes
import { useState } from "react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)]"> 
      {/* subtract navbar height if needed */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-10">
        
        {/* Search */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="🔍 Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/10 border border-gray-700 rounded-xl px-4 py-2 h-[60px] text-white 
                       focus:outline-none shadow-md transition-all w-full md:w-[40rem]"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl text-center">
          <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📥 Receive</h2>
            <p className="text-3xl font-bold text-blue-400">120</p>
          </div>
          <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">⏳ Pending</h2>
            <p className="text-3xl font-bold text-yellow-400">45</p>
          </div>
          <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">✅ Approved</h2>
            <p className="text-3xl font-bold text-green-400">75</p>
          </div>
        </div>
      </div>
    </div>
  );
}


