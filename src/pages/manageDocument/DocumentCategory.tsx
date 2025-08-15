// import React, { useState, useEffect } from "react";

// interface DocumentCategory {
//   id: number;
//   name: string;
//   wings?: string;
//   roleType?: string;
// }

// const DocumentCategoryPage: React.FC = () => {
//   const [categories, setCategories] = useState<DocumentCategory[]>([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch categories (replace API endpoint)
//   const fetchCategories = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/document-categories");
//       const data = await res.json();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Save new category
//   const handleSave = async () => {
//     if (!categoryName.trim()) return;
//     try {
//       const res = await fetch("/api/document-categories", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: categoryName }),
//       });
//       if (res.ok) {
//         setCategoryName("");
//         fetchCategories();
//       }
//     } catch (error) {
//       console.error("Error saving category:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Top Note */}
//       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//         <h3 className="text-blue-700 font-semibold mb-1">Note:</h3>
//         <p className="text-sm text-gray-700">
//           Here you can add the <strong>Document Category</strong> name.  
//           To assign wings and roles, click <span className="text-blue-600 font-medium">Add Wings & Roles</span>.
//         </p>
//       </div>

//       {/* Add Document Category Form */}
//       <div className="bg-white shadow rounded-lg p-6 mb-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Document Category</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Document Category Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={categoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter category name"
//             />
//           </div>
//           <div className="flex items-end">
//             <button
//               onClick={handleSave}
//               className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Secondary Note */}
//       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
//         <h3 className="text-blue-700 font-semibold mb-1">Note:</h3>
//         <p className="text-sm text-gray-700">
//           You can assign roles and wings to multiple categories at once by selecting their checkboxes and clicking the  
//           <span className="text-blue-600 font-medium"> Add Wings & Roles</span> button.
//         </p>
//       </div>

//       {/* Table Controls */}
//       <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
//         <div className="flex items-center gap-2">
//           <span className="text-sm">Show</span>
//           <select className="border rounded px-2 py-1 text-sm">
//             <option>10</option>
//             <option>25</option>
//             <option>50</option>
//           </select>
//           <span className="text-sm">entries</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm">Search:</span>
//           <input
//             type="text"
//             className="border rounded px-2 py-1 text-sm"
//             placeholder="Search..."
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="px-3 py-2 border">#</th>
//               <th className="px-3 py-2 border">Document Category Name</th>
//               <th className="px-3 py-2 border">Wings</th>
//               <th className="px-3 py-2 border">User Role Type</th>
//               <th className="px-3 py-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={5} className="text-center py-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : categories.length > 0 ? (
//               categories.map((cat, index) => (
//                 <tr key={cat.id} className="hover:bg-gray-50">
//                   <td className="px-3 py-2 border">{index + 1}</td>
//                   <td className="px-3 py-2 border">{cat.name}</td>
//                   <td className="px-3 py-2 border">{cat.wings || "-"}</td>
//                   <td className="px-3 py-2 border">{cat.roleType || "-"}</td>
//                   <td className="px-3 py-2 border flex gap-2 justify-center">
//                     <button className="text-blue-600 hover:underline">✏️</button>
//                     <button className="text-gray-600 hover:underline">⚙️</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="text-center py-4 text-gray-500">
//                   No data available in table
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
//         <p className="text-sm text-gray-600">
//           Showing {categories.length > 0 ? 1 : 0} to {categories.length} of {categories.length} entries
//         </p>
//         <div className="flex items-center gap-1">
//           <button className="px-2 py-1 border rounded hover:bg-gray-100">←</button>
//           <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
//           <button className="px-2 py-1 border rounded hover:bg-gray-100">→</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentCategoryPage;


import React, { useState, useEffect } from "react";

interface DocumentCategory {
  id: number;
  name: string;
  wings?: string;
  roleType?: string;
}

const DocumentCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<DocumentCategory[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch categories from backend
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/document-categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Save new category (form submit handler)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page refresh

    if (!categoryName.trim()) return;

    try {
      const res = await fetch("/api/document-categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryName }),
      });

      if (res.ok) {
        setCategoryName(""); // reset input
        fetchCategories(); // refresh list
      } else {
        console.error("Failed to save category");
      }
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-blue-700 font-semibold mb-1">Note:</h3>
        <p className="text-sm text-gray-700">
          Here you can add the <strong>Document Category</strong> name.
          To assign wings and roles, click{" "}
          <span className="text-blue-600 font-medium">Add Wings & Roles</span>.
        </p>
      </div>

      {/* Add Document Category Form */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add Document Category
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Document Category Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter category name"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Secondary Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h3 className="text-blue-700 font-semibold mb-1">Note:</h3>
        <p className="text-sm text-gray-700">
          You can assign roles and wings to multiple categories at once by
          selecting their checkboxes and clicking the
          <span className="text-blue-600 font-medium">
            {" "}
            Add Wings & Roles
          </span>{" "}
          button.
        </p>
      </div>

      {/* Table Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm">entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Search:</span>
          <input
            type="text"
            className="border rounded px-2 py-1 text-sm"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-3 py-2 border">#</th>
              <th className="px-3 py-2 border">Document Category Name</th>
              <th className="px-3 py-2 border">Wings</th>
              <th className="px-3 py-2 border">User Role Type</th>
              <th className="px-3 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : categories.length > 0 ? (
              categories.map((cat, index) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{index + 1}</td>
                  <td className="px-3 py-2 border">{cat.name}</td>
                  <td className="px-3 py-2 border">{cat.wings || "-"}</td>
                  <td className="px-3 py-2 border">{cat.roleType || "-"}</td>
                  <td className="px-3 py-2 border flex gap-2 justify-center">
                    <button className="text-blue-600 hover:underline">✏️</button>
                    <button className="text-gray-600 hover:underline">⚙️</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
        <p className="text-sm text-gray-600">
          Showing {categories.length > 0 ? 1 : 0} to {categories.length} of{" "}
          {categories.length} entries
        </p>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 border rounded hover:bg-gray-100">←</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-2 py-1 border rounded hover:bg-gray-100">→</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCategoryPage;

