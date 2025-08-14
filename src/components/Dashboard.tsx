import { Search, FilePlus, Grid3X3, Plus, Edit3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Logo */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded relative">
        <span className="text-red-500 text-5xl font-bold">A</span>
        <span className="text-yellow-500 text-5xl font-bold">K</span>
        <span className="text-green-600 text-5xl font-bold">S</span>
        <span className="text-blue-600 text-5xl font-bold">H</span>
        <span className="text-red-500 text-5xl font-bold">E</span>
        <span className="text-yellow-500 text-5xl font-bold">Y</span>

        <button className="absolute -top-2 -right-2 bg-white shadow p-1 rounded-full hover:bg-blue-50">
          <Edit3 size={16} className="text-blue-600" />
        </button>
      </div>

      {/* Search */}
      <div className="flex mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search By Keywords"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 px-4 rounded-r-full text-white hover:bg-blue-700 flex items-center justify-center">
          <Search size={18} />
        </button>
        <button className="ml-2 bg-gray-100 p-2 rounded hover:bg-gray-200 border border-gray-300">
          <Plus size={18} />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 w-full max-w-md">
        <div className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer">
          <FilePlus size={28} className="text-blue-600" />
          <span className="mt-2 text-sm font-medium">Add File</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer">
          <Grid3X3 size={28} className="text-blue-600" />
          <span className="mt-2 text-sm font-medium">Add Category</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer">
          <Plus size={28} className="text-blue-600" />
          <span className="mt-2 text-sm font-medium">Add Wings</span>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-gray-50 border rounded-lg mt-6 w-full max-w-md p-4 text-sm space-y-2">
        <p className="text-blue-600 cursor-pointer hover:underline">
          » Upload documents and retrieve
        </p>
        <p className="text-blue-600 cursor-pointer hover:underline">
          » Configure your own search result format
        </p>
        <p className="text-blue-600 cursor-pointer hover:underline">
          » Manage users, roles & wings
        </p>
      </div>
    </div>
  );
}
