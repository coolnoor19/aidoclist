import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-blue-800 via-gray-900 to-gray-950 shadow-xl transition-all duration-500 ease-in-out z-40
        ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
      >
        <div className="h-full flex flex-col p-6 space-y-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">⚙️ Management</h2>
          <button className="text-left hover:text-blue-400 transition">👤 Users</button>
          <button className="text-left hover:text-blue-400 transition">📚 Masters</button>
          <button className="text-left hover:text-blue-400 transition">📑 Documents</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`flex-1 transition-all duration-500 ease-in-out p-6 md:p-10 
        ${isOpen ? "ml-64" : "ml-0"}`}
      >
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          {/* Toggle Sidebar */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md 
                       transition-all w-full md:w-96"
          />
        </div>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ACTION CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              onClick={() => navigate("/add-document-new")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">📂 Upload File</h2>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Upload
              </button>
            </div>

            <div
              onClick={() => navigate("/document-category")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">🗂 Add Category</h2>
              <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Add Category
              </button>
            </div>

            <div
              onClick={() => navigate("/wings")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">🪽 Manage Wings</h2>
              <button className="bg-white text-cyan-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Add Wing
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">📊 Summary</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-400">25</p>
                  <p className="text-sm text-gray-300">Files</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">10</p>
                  <p className="text-sm text-gray-300">Categories</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">5</p>
                  <p className="text-sm text-gray-300">Wings</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Cloud Integrations */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">☁ Cloud Integrations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Google Drive", "Dropbox", "OneDrive"].map((cloud) => (
                  <div
                    key={cloud}
                    className="bg-gray-700 p-4 rounded-xl text-center hover:bg-gray-600 transition"
                  >
                    {cloud}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">🕒 Recent Activity</h2>
              <ul className="space-y-2 text-gray-300">
                <li>📄 Uploaded "Report.pdf"</li>
                <li>🗂 Added new Category "Finance"</li>
                <li>☁ Integrated Google Drive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



 {/* ACTION CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              onClick={() => navigate("/add-document-new")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">📂 Upload File</h2>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Upload
              </button>
            </div>

            <div
              onClick={() => navigate("/document-category")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">🗂 Add Category</h2>
              <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Add Category
              </button>
            </div>

            <div
              onClick={() => navigate("/wings")}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-3">🪽 Manage Wings</h2>
              <button className="bg-white text-cyan-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                Add Wing
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">📊 Summary</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-400">25</p>
                  <p className="text-sm text-gray-300">Files</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">10</p>
                  <p className="text-sm text-gray-300">Categories</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">5</p>
                  <p className="text-sm text-gray-300">Wings</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Cloud Integrations */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">☁ Cloud Integrations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Google Drive", "Dropbox", "OneDrive"].map((cloud) => (
                  <div
                    key={cloud}
                    className="bg-gray-700 p-4 rounded-xl text-center hover:bg-gray-600 transition"
                  >
                    {cloud}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">🕒 Recent Activity</h2>
              <ul className="space-y-2 text-gray-300">
                <li>📄 Uploaded "Report.pdf"</li>
                <li>🗂 Added new Category "Finance"</li>
                <li>☁ Integrated Google Drive</li>
              </ul>
            </div>
          </div>