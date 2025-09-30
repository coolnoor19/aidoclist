// import React, { useState, useEffect } from "react";

// interface DocumentCategory {
//   id: number;
//   name: string;
//   wings?: string;
//   roleType?: string;
// }

// const DocumentCategoryPage: React.FC = () => {
//   const [categories, setCategories] = useState<DocumentCategory[]>([
//     { id: 1, name: "Invoices" },
//     { id: 2, name: "Reports" },
//     { id: 3, name: "Contracts" },
//     { id: 4, name: "Presentations" },
//   ]);
//   const [categoryName, setCategoryName] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchCategories = async () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
//     e.preventDefault();
//     if (!categoryName.trim()) return;

//     const newCategory: DocumentCategory = {
//       id: categories.length + 1,
//       name: categoryName,
//     };

//     setCategories([...categories, newCategory]);
//     setCategoryName("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black flex flex-col p-4 md:p-8">
//       {/* HEADER */}
//       <header className="w-full text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-teal-700 drop-shadow-sm">
//           📂 Document Categories
//         </h1>
//         <p className="mt-3 text-white text-lg">
//           Organize, manage, and assign <b>wings</b> & <b>roles</b> easily.
//         </p>
//       </header>

//       <main className="flex-1 w-full max-w-7xl mx-auto">
//         {/* FORM */}
//         <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 mb-10">
//           <h2 className="text-2xl font-semibold text-white mb-6">
//             ➕ Add a New Category
//           </h2>
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               value={categoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
//               placeholder="Enter category name..."
//               className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//             />
//             <button
//               onClick={handleSubmit}
//               className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
//             >
//               Save
//             </button>
//           </div>
//         </section>

//         {/* INFO NOTE */}
//         <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 mb-10 text-white">
//           💡 Tip: Select multiple categories to add <b>wings</b> and{" "}
//           <b>roles</b> in bulk.
//         </section>

//         {/* CONTROLS */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
//           <div className="flex items-center gap-2">
//             <label className="text-white">Show</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-teal-500">
//               <option>10</option>
//               <option>25</option>
//               <option>50</option>
//             </select>
//             <span className="text-white">entries</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <label className="text-white">Search:</label>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border border-gray-300 rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500"
//             />
//           </div>
//         </div>

//         {/* TABLE */}
//         {/* TABLE */}
//         <div className="overflow-hidden rounded-2xl shadow-md">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-teal-500 text-white">
//                   <th className="p-3 text-left">#</th>
//                   <th className="p-3 text-left">Category</th>
//                   <th className="p-3 text-left">Wings</th>
//                   <th className="p-3 text-left">Role Type</th>
//                   <th className="p-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="hover:bg-teal-900/40 text-white">
//                   <td className="p-3">1</td>
//                   <td className="p-3">Invoices</td>
//                   <td className="p-3">Finance</td>
//                   <td className="p-3">Admin</td>
//                   <td className="p-3">
//                     <span className="text-blue-400 cursor-pointer">Edit</span> |
//                     <span className="text-teal-400 cursor-pointer">Manage</span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//           </div>
//         </div>


//         {/* PAGINATION */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
//           <p className="text-white">
//             Showing {categories.length > 0 ? 1 : 0} to {categories.length} of{" "}
//             {categories.length} entries
//           </p>
//           <div className="flex gap-2">
//             <button className="px-4 py-2 text-white border rounded-md hover:bg-gray-100">
//               ← Prev
//             </button>
//             <button className="px-5 py-2 bg-teal-600 text-white rounded-md shadow font-semibold">
//               1
//             </button>
//             <button className="px-4 py-2 text-white border rounded-md hover:bg-gray-100">
//               Next →
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DocumentCategoryPage;

// CategoryTable.tsx
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  wings: string;
  roleType: string;
}

const DocumentCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Invoices", wings: "Finance", roleType: "Admin" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    const newCat = {
      id: categories.length + 1,
      name: newCategory.trim(),
      wings: "-",
      roleType: "-",
    };
    setCategories([...categories, newCat]);
    setNewCategory("");
    setIsModalOpen(false);
  };

  return (
    /**
     * Full-viewport wrapper with a FIXED gradient background behind everything.
     * This guarantees no body/background "edge" shows on any side.
     */
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Gradient background layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-teal-600 via-gray-800 to-black" />

      {/* If you have a fixed navbar, give the page some top padding (e.g. pt-8/pt-24) */}
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Top bar with button */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-white">📂 Categories</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg shadow-md hover:opacity-90 transition"
          >
            + Add Category
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <th className="px-5 py-4">#</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Wings</th>
                  <th className="px-5 py-4">Role Type</th>
                  <th className="px-5 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr
                    key={cat.id}
                    className={`${cat.id % 2 === 0 ? "bg-white/5" : "bg-white/0"} hover:bg-white/20 transition`}
                  >
                    <td className="px-5 py-4">{cat.id}</td>
                    <td className="px-5 py-4">{cat.name}</td>
                    <td className="px-5 py-4">{cat.wings}</td>
                    <td className="px-5 py-4">{cat.roleType}</td>
                    <td className="px-5 py-4 text-center">
                      <div className="flex gap-3 justify-center">
                        <button className="text-blue-400 hover:underline">✏ Edit</button>
                        <button className="text-teal-400 hover:underline">⚙ Manage</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {categories.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-6 text-gray-300 text-lg">
                      🚫 No categories found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-lg mx-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">➕ Add a New Category</h3>

              <input
                type="text"
                placeholder="Enter category name..."
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full p-3 mb-4 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:opacity-90"
                >
                  Add
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                💡 Tip: Select multiple categories to add <b>wings</b> and <b>roles</b> in bulk.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DocumentCategoryPage;
