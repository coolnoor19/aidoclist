// import React, { useState, useEffect } from "react";

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   mobile: string;
//   gender: string;
//   roles: string;
//   wings: string;
// }

// const UsersList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Table Controls
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [totalEntries, setTotalEntries] = useState(0);

//   // Fetch Users from API
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `/api/users?search=${encodeURIComponent(search)}&page=${page}&limit=${perPage}`
//       );
//       const data = await res.json();
//       setUsers(data.users); // backend should return { users: [...], total: number }
//       setTotalEntries(data.total || 0);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch when page, perPage, or search changes
//   useEffect(() => {
//     fetchUsers();
//   }, [page, perPage, search]);

//   // Handle Delete User
//   const handleDelete = async (id: number) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     try {
//       const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         fetchUsers();
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-x-auto">
//       <h2 className="text-lg font-semibold mb-4">Users List</h2>

//       {/* Header Controls */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-3">
//         <div className="flex items-center gap-2">
//           <span>Show</span>
//           <select
//             className="border rounded px-2 py-1"
//             value={perPage}
//             onChange={(e) => {
//               setPerPage(Number(e.target.value));
//               setPage(1);
//             }}
//           >
//             <option value={10}>10</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//           </select>
//           <span>entries</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <span>Search:</span>
//           <input
//             type="text"
//             className="border rounded px-2 py-1"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <table className="w-full border border-gray-200 text-sm">
//         <thead>
//           <tr className="bg-blue-600 text-white text-left">
//             <th className="px-3 py-2 border">#</th>
//             <th className="px-3 py-2 border">Name</th>
//             <th className="px-3 py-2 border">Username</th>
//             <th className="px-3 py-2 border">Email</th>
//             <th className="px-3 py-2 border">Mobile</th>
//             <th className="px-3 py-2 border">Gender</th>
//             <th className="px-3 py-2 border">Roles Assigned</th>
//             <th className="px-3 py-2 border">Wings</th>
//             <th className="px-3 py-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={9} className="text-center py-4">
//                 Loading...
//               </td>
//             </tr>
//           ) : users.length > 0 ? (
//             users.map((user, index) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-3 py-2 border">{(page - 1) * perPage + index + 1}</td>
//                 <td className="px-3 py-2 border">{user.name}</td>
//                 <td className="px-3 py-2 border">{user.username}</td>
//                 <td className="px-3 py-2 border">{user.email}</td>
//                 <td className="px-3 py-2 border">{user.mobile}</td>
//                 <td className="px-3 py-2 border">{user.gender}</td>
//                 <td className="px-3 py-2 border">{user.roles}</td>
//                 <td className="px-3 py-2 border">{user.wings}</td>
//                 <td className="px-3 py-2 border space-x-2">
//                   <button className="text-blue-500 hover:underline">✏</button>
//                   <button className="text-yellow-500 hover:underline">🔑</button>
//                   <button
//                     className="text-red-500 hover:underline"
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     🗑
//                   </button>
//                   <button className="bg-orange-200 text-orange-700 px-2 py-1 rounded hover:bg-orange-300">
//                     Deactivate
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} className="text-center py-4 text-gray-500">
//                 No data available in table
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Footer */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
//         <p className="text-sm">
//           Showing {users.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
//           {(page - 1) * perPage + users.length} of {totalEntries} entries
//         </p>

//         {/* Pagination */}
//         <div className="flex items-center gap-1">
//           <button
//             className="px-2 py-1 border rounded hover:bg-gray-100"
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//           >
//             ←
//           </button>
//           <button className="px-3 py-1 bg-blue-600 text-white rounded">{page}</button>
//           <button
//             className="px-2 py-1 border rounded hover:bg-gray-100"
//             disabled={page * perPage >= totalEntries}
//             onClick={() => setPage((prev) => prev + 1)}
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UsersList;




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
      setUsers(data.users || []);
      setTotalEntries(data.total || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage, search]);

  // Handle Delete User
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Users List</h2>

        {/* Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
          <div className="flex items-center gap-2 text-white">
            <span className="text-white/90">Show</span>
            <select
              className="select-dark border border-white/20 rounded-lg px-3 py-2"
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
            <span className="text-white/90">entries</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/90">Search:</span>
            <input
              type="text"
              className="w-56 md:w-72 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full text-sm border border-white/20 rounded-2xl overflow-hidden border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white text-left">
                {[
                  "#",
                  "Name",
                  "Username",
                  "Email",
                  "Mobile",
                  "Gender",
                  "Roles Assigned",
                  "Wings",
                  "Action",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 border border-white/20">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white">
              {loading ? (
                <tr>
                  <td colSpan={9} className="text-center py-6">
                    Loading...
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    <td className="px-4 py-3 border border-white/20">
                      {(page - 1) * perPage + index + 1}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.username}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.mobile}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.gender}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.roles}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {user.wings}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-orange-300 hover:text-orange-200 hover:bg-white/15"
                          title="Edit"
                        >
                          ✏ Edit
                        </button>
                        <button
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-teal-300 hover:text-teal-200 hover:bg-white/15"
                          title="Reset Password"
                        >
                          🔑 Reset
                        </button>
                        <button
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-red-400 hover:text-red-300 hover:bg-white/15"
                          onClick={() => handleDelete(user.id)}
                          title="Delete"
                        >
                          🗑 Delete
                        </button>
                        <button className="px-2 py-1 rounded border border-amber-400/30 bg-amber-500/20 text-amber-200 hover:bg-amber-500/30">
                          Deactivate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="text-center py-6 text-white/70">
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3 text-white/90">
          <p className="text-sm">
            Showing {users.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
            {(page - 1) * perPage + users.length} of {totalEntries} entries
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-1">
            <button
              className={`px-3 py-1 rounded border border-white/20 bg-white/10 text-white hover:bg-white/15 ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              ←
            </button>
            <span className="px-3 py-1 rounded bg-teal-600 text-white">
              {page}
            </span>
            <button
              className={`px-3 py-1 rounded border border-white/20 bg-white/10 text-white hover:bg-white/15 ${
                page * perPage >= totalEntries
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={page * perPage >= totalEntries}
              onClick={() => setPage((prev) => prev + 1)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
