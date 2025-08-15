import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  mobile: string;
  gender: string;
  roles: string;
  wings: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // Table Controls
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalEntries, setTotalEntries] = useState(0);

  // Fetch Users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/users?search=${encodeURIComponent(search)}&page=${page}&limit=${perPage}`
      );
      const data = await res.json();
      setUsers(data.users); // backend should return { users: [...], total: number }
      setTotalEntries(data.total || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when page, perPage, or search changes
  useEffect(() => {
    fetchUsers();
  }, [page, perPage, search]);

  // Handle Delete User
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Users List</h2>

      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-3">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select
            className="border rounded px-2 py-1"
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Search:</span>
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-200 text-sm">
        <thead>
          <tr className="bg-blue-600 text-white text-left">
            <th className="px-3 py-2 border">#</th>
            <th className="px-3 py-2 border">Name</th>
            <th className="px-3 py-2 border">Username</th>
            <th className="px-3 py-2 border">Email</th>
            <th className="px-3 py-2 border">Mobile</th>
            <th className="px-3 py-2 border">Gender</th>
            <th className="px-3 py-2 border">Roles Assigned</th>
            <th className="px-3 py-2 border">Wings</th>
            <th className="px-3 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={9} className="text-center py-4">
                Loading...
              </td>
            </tr>
          ) : users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border">{(page - 1) * perPage + index + 1}</td>
                <td className="px-3 py-2 border">{user.name}</td>
                <td className="px-3 py-2 border">{user.username}</td>
                <td className="px-3 py-2 border">{user.email}</td>
                <td className="px-3 py-2 border">{user.mobile}</td>
                <td className="px-3 py-2 border">{user.gender}</td>
                <td className="px-3 py-2 border">{user.roles}</td>
                <td className="px-3 py-2 border">{user.wings}</td>
                <td className="px-3 py-2 border space-x-2">
                  <button className="text-blue-500 hover:underline">✏</button>
                  <button className="text-yellow-500 hover:underline">🔑</button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(user.id)}
                  >
                    🗑
                  </button>
                  <button className="bg-orange-200 text-orange-700 px-2 py-1 rounded hover:bg-orange-300">
                    Deactivate
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4 text-gray-500">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
        <p className="text-sm">
          Showing {users.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
          {(page - 1) * perPage + users.length} of {totalEntries} entries
        </p>

        {/* Pagination */}
        <div className="flex items-center gap-1">
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            ←
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">{page}</button>
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            disabled={page * perPage >= totalEntries}
            onClick={() => setPage((prev) => prev + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
