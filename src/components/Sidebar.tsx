import { ChevronRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuHover = (menu: string) => setOpenMenu(menu);
  const handleMenuLeave = () => setOpenMenu(null);

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-800 via-gray-900 to-gray-950 shadow-xl 
      transition-[width] duration-500 ease-in-out z-40 
      ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
    >
      <div className="h-full flex flex-col p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-blue-400">⚙️ Management</h2>
          <button
            className="p-1 rounded hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* USERS MENU */}
        <div
          className="relative group"
          onMouseEnter={() => handleMenuHover("users")}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
            👤 Users <ChevronRight size={16} />
          </button>
          <div
            className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out 
            ${openMenu === "users" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <button
              onClick={() => navigate("/add-user")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              ➕ Add User
            </button>
            <button
              onClick={() => navigate("/user-list")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              📋 User List
            </button>
          </div>
        </div>

        {/* MASTERS MENU */}
        <div
          className="relative group"
          onMouseEnter={() => handleMenuHover("masters")}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
            📚 Masters <ChevronRight size={16} />
          </button>
          <div
            className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out  
            ${openMenu === "masters" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <button
              onClick={() => navigate("/wings")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              🪽 Wings
            </button>
            <button
              onClick={() => navigate("/role-type")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              🎭 User Roles
            </button>
          </div>
        </div>

        {/* DOCUMENTS MENU */}
        <div
          className="relative group"
          onMouseEnter={() => handleMenuHover("documents")}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
            📑 Documents <ChevronRight size={16} />
          </button>
          <div
            className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out 
            ${openMenu === "documents" ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <button
              onClick={() => navigate("/document-category")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              🗂 Doc Category
            </button>
            <button
              onClick={() => navigate("/add-document-new")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              📂 Add Doc
            </button>
            <button
              onClick={() => navigate("/document-list")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              📋 Doc List
            </button>
          </div>
        </div>

        {/* workflow managment */}
        <div
          className="relative group"
          onMouseEnter={() => handleMenuHover("workflow")}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center justify-between w-full hover:text-blue-400 transition">
            📑 Workflow Managment <ChevronRight size={16} />
          </button>
          <div
            className={`ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-300 transition-all duration-500 ease-in-out 
            ${openMenu === "workflow" ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <button
              onClick={() => navigate("/assignment-workflow")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              🗂 Assignment Workflow
            </button>
            <button
              onClick={() => navigate("/attachment-flowlist")}
              className="hover:text-blue-400 text-left cursor-pointer"
            >
              📂 Attachment Flowlist
            </button>
            
          </div>
        </div>
      </div>
    </aside>
  );
}
