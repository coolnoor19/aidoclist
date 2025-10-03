// import React, { useState } from "react";
// import { Edit3, Settings } from "lucide-react";

// type DocumentFilters = {
//   project: string;
//   customer: string;
//   wings: string;
//   keyword: string;
// };

// const DocumentsList: React.FC = () => {
//   const [filters, setFilters] = useState<DocumentFilters>({
//     project: "",
//     customer: "",
//     wings: "",
//     keyword: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted with filters:", filters);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-6 md:p-8"
//       >
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <h1 className="text-lg md:text-2xl font-bold text-white">
//             📄 Documents List
//           </h1>

//           {/* Filters */}
//           <div className="flex flex-wrap gap-2">
//             <select
//               name="project"
//               value={filters.project}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Project</option>
//               <option value="project1">Project 1</option>
//               <option value="project2">Project 2</option>
//             </select>

//             <select
//               name="customer"
//               value={filters.customer}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Customer</option>
//               <option value="customer1">Customer 1</option>
//               <option value="customer2">Customer 2</option>
//             </select>

//             <select
//               name="wings"
//               value={filters.wings}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Wings</option>
//               <option value="wing1">Wing 1</option>
//               <option value="wing2">Wing 2</option>
//             </select>

//             <button
//               type="button"
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             >
//               ➕ Add Document
//             </button>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
//           <input
//             type="text"
//             placeholder="🔍 Search By Keywords"
//             name="keyword"
//             value={filters.keyword}
//             onChange={handleChange}
//             className="flex-1 border rounded-full px-4 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {["All(0)", "Root(0)", "whatsapp(0)"].map((label) => (
//             <button
//               key={label}
//               type="button"
//               className={`px-3 py-1 rounded-full border text-sm ${
//                 label === "All(0)"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-2xl shadow-md">
//           <table className="w-full border-collapse text-sm overflow-hidden rounded-2xl">
//             <thead>
//               <tr className="bg-teal-600 text-white text-left">
//                 {[
//                   "Sl.No.",
//                   "Uploaded Date & Time",
//                   "Category",
//                   "Wings",
//                   "User Role",
//                   "Uploaded By",
//                   "View Doc",
//                   "File Name",
//                   "Tag",
//                   "Actions",
//                 ].map((header) => (
//                   <th key={header} className="px-3 py-2">
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition">
//                 <td colSpan={10} className="text-center text-gray-400 py-6">
//                   No data available in table
//                 </td>
//               </tr>
//               {/* Example Row (remove if using dynamic data) */}
//               {/* <tr className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-b border-gray-700 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition">
//                 <td className="p-3 text-white">1</td>
//                 <td className="p-3 text-gray-300">2025-08-18</td>
//                 <td className="p-3 text-gray-300">Invoices</td>
//                 <td className="p-3 text-gray-300">Wing 1</td>
//                 <td className="p-3 text-gray-300">Admin</td>
//                 <td className="p-3 text-gray-300">John Doe</td>
//                 <td className="p-3 text-blue-400 cursor-pointer hover:underline">View</td>
//                 <td className="p-3 text-gray-300">file.pdf</td>
//                 <td className="p-3 text-gray-300">Important</td>
//                 <td className="p-3 flex gap-4">
//                   <button className="flex items-center gap-1 text-orange-400 hover:text-orange-300">
//                     <Edit3 size={16} /> Edit
//                   </button>
//                   <button className="flex items-center gap-1 text-gray-400 hover:text-white">
//                     <Settings size={16} /> Manage
//                   </button>
//                 </td>
//               </tr> */}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer */}
//         <div className="mt-3 text-sm text-gray-300">
//           Showing 0 to 0 of 0 entries
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DocumentsList;

// import React, { useState } from "react";
// import { Edit3, Settings, Plus, X } from "lucide-react";

// type DocumentFilters = {
//   project: string;
//   customer: string;
//   wings: string;
//   keyword: string;
// };

// type DocumentRow = {
//   id: number;
//   uploadedAt: string;
//   category: string;
//   wings: string;
//   userRole: string;
//   uploadedBy: string;
//   viewUrl?: string;
//   fileName: string;
//   tag: string;
// };

// const DocumentsList: React.FC = () => {
//   const [filters, setFilters] = useState<DocumentFilters>({
//     project: "",
//     customer: "",
//     wings: "",
//     keyword: "",
//   });

//   const [rows, setRows] = useState<DocumentRow[]>([]);
//   const [isAddOpen, setIsAddOpen] = useState(false);

//   // Add Doc form state (modal)
//   const [docForm, setDocForm] = useState({
//     category: "",
//     wings: "",
//     userRole: "",
//     uploadedBy: "You",
//     fileName: "",
//     tag: "",
//     viewUrl: "",
//   });

//   const handleFilterChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDocFormChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setDocForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitFilters = (e: React.FormEvent) => {
//     e.preventDefault();
//     // You can filter "rows" locally here if needed
//     console.log("Filters:", filters);
//   };

//   const addDocument = () => {
//     if (!docForm.category.trim() || !docForm.fileName.trim()) return;

//     const newRow: DocumentRow = {
//       id: rows.length ? rows[rows.length - 1].id + 1 : 1,
//       uploadedAt: new Date().toLocaleString(),
//       category: docForm.category.trim(),
//       wings: docForm.wings,
//       userRole: docForm.userRole.trim(),
//       uploadedBy: docForm.uploadedBy.trim() || "You",
//       viewUrl: docForm.viewUrl.trim(),
//       fileName: docForm.fileName.trim(),
//       tag: docForm.tag.trim(),
//     };

//     setRows((prev) => [newRow, ...prev]);
//     setIsAddOpen(false);
//     setDocForm({
//       category: "",
//       wings: "",
//       userRole: "",
//       uploadedBy: "You",
//       fileName: "",
//       tag: "",
//       viewUrl: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
//       <form
//         onSubmit={handleSubmitFilters}
//         className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 md:p-8"
//       >
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <h1 className="text-2xl font-bold text-white flex items-center gap-2">
//             📄 Documents List
//           </h1>

//           {/* Filters (top-right) */}
//           <div className="flex flex-wrap gap-2">
//             <select
//               name="project"
//               value={filters.project}
//               onChange={handleFilterChange}
//               className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400"
//             >
//               <option value="">Project</option>
//               <option value="project1">Project 1</option>
//               <option value="project2">Project 2</option>
//             </select>

//             <select
//               name="customer"
//               value={filters.customer}
//               onChange={handleFilterChange}
//               className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400"
//             >
//               <option value="">Customer</option>
//               <option value="customer1">Customer 1</option>
//               <option value="customer2">Customer 2</option>
//             </select>

//             <select
//               name="wings"
//               value={filters.wings}
//               onChange={handleFilterChange}
//               className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400"
//             >
//               <option value="">Wing</option>
//               <option value="Wing 1">Wing 1</option>
//               <option value="Wing 2">Wing 2</option>
//             </select>

//             <button
//               type="button"
//               onClick={() => setIsAddOpen(true)}
//               className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
//             >
//               <Plus size={18} /> Add Document
//             </button>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
//           <input
//             type="text"
//             placeholder="🔍 Search by keywords"
//             name="keyword"
//             value={filters.keyword}
//             onChange={handleFilterChange}
//             className="flex-1 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-full px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//         </div>

//         {/* Category chips */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {["All 0", "Root 1", "whatsapp 2"].map((label, i) => (
//             <button
//               key={label}
//               type="button"
//               className={`px-3 py-1 rounded-sm border text-sm ${
//                 i === 0
//                   ? "bg-blue-500 text-white border-blue-500"
//                   : "bg-white/10 text-white border-white/20 hover:bg-white/15"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-2xl shadow-md">
//           <table className="w-full text-sm border border-white/20 rounded-2xl overflow-hidden border-collapse">
//             <thead>
//               <tr className="bg-teal-600 text-white text-left">
//                 {[
//                   "Sl.No.",
//                   "Uploaded Date & Time",
//                   "Category",
//                   "Wings",
//                   "User Role",
//                   "Uploaded By",
//                   "View Doc",
//                   "File Name",
//                   "Tag",
//                   "Actions",
//                 ].map((header) => (
//                   <th key={header} className="px-4 py-3 border border-white/20">
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody className="text-white">
//               {rows.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={10}
//                     className="text-center text-white/70 py-8 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900"
//                   >
//                     No data available in table
//                   </td>
//                 </tr>
//               ) : (
//                 rows.map((r, idx) => (
//                   <tr
//                     key={r.id}
//                     className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
//                   >
//                     <td className="px-4 py-3 border border-white/20">
//                       {rows.length - idx}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.uploadedAt}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.category}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.wings}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.userRole}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.uploadedBy}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.viewUrl ? (
//                         <a
//                           href={r.viewUrl}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-blue-300 hover:underline"
//                         >
//                           View
//                         </a>
//                       ) : (
//                         <span className="text-white/50">—</span>
//                       )}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">
//                       {r.fileName}
//                     </td>
//                     <td className="px-4 py-3 border border-white/20">{r.tag}</td>
//                     <td className="px-4 py-3 border border-white/20">
//                       <div className="flex items-center gap-4">
//                         <button className="flex items-center gap-1 text-orange-300 hover:text-orange-200">
//                           <Edit3 size={16} /> Edit
//                         </button>
//                         <button className="flex items-center gap-1 text-white/70 hover:text-white">
//                           <Settings size={16} /> Manage
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer */}
//         <div className="mt-3 text-sm text-white/80">
//           Showing {rows.length ? 1 : 0} to {rows.length} of {rows.length} entries
//         </div>
//       </form>

//       {/* ADD DOCUMENT MODAL */}
//       {isAddOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
//           <div className="w-full max-w-2xl rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
//             <div className="flex items-center justify-between px-6 pt-6">
//               <div className="flex items-center gap-2">
//                 <Plus className="text-teal-400" size={22} />
//                 <h3 className="text-white text-2xl font-semibold">Add Document</h3>
//               </div>
//               <button
//                 onClick={() => setIsAddOpen(false)}
//                 className="p-2 rounded-lg hover:bg-white/10 cursor-pointer"
//                 aria-label="Close"
//               >
//                 <X size={20} className="text-white/80" />
//               </button>
//             </div>

//             <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="text-sm text-white/80">Category *</label>
//                 <input
//                   name="category"
//                   value={docForm.category}
//                   onChange={handleDocFormChange}
//                   placeholder="e.g. Invoices"
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white/80">Wing</label>
//                 <select
//                   name="wings"
//                   value={docForm.wings}
//                   onChange={handleDocFormChange}
//                   className="select-dark mt-1 w-full h-11 px-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 >
//                   <option value="">Select wing</option>
//                   <option>Wing 1</option>
//                   <option>Wing 2</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm text-white/80">User Role</label>
//                 <input
//                   name="userRole"
//                   value={docForm.userRole}
//                   onChange={handleDocFormChange}
//                   placeholder="e.g. Admin"
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white/80">Uploaded By</label>
//                 <input
//                   name="uploadedBy"
//                   value={docForm.uploadedBy}
//                   onChange={handleDocFormChange}
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white/80">File Name *</label>
//                 <input
//                   name="fileName"
//                   value={docForm.fileName}
//                   onChange={handleDocFormChange}
//                   placeholder="e.g. file.pdf"
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-white/80">Tag</label>
//                 <input
//                   name="tag"
//                   value={docForm.tag}
//                   onChange={handleDocFormChange}
//                   placeholder="e.g. Important"
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="text-sm text-white/80">View URL</label>
//                 <input
//                   name="viewUrl"
//                   value={docForm.viewUrl}
//                   onChange={handleDocFormChange}
//                   placeholder="https://..."
//                   className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>
//             </div>

//             <div className="px-6 pb-6 flex items-center justify-end gap-2">
//               <button
//                 onClick={() => setIsAddOpen(false)}
//                 className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 cursor-pointer"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={addDocument}
//                 className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 shadow cursor-pointer"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentsList;


import React, { useState } from "react";
import { Edit3, Settings, Plus, X } from "lucide-react";

type DocumentFilters = {
  project: string;
  customer: string;
  wings: string;
  keyword: string;
};

type DocumentRow = {
  id: number;
  uploadedAt: string;
  category: string;
  wings: string;
  userRole: string;
  uploadedBy: string;
  viewUrl?: string;
  fileName: string;
  tag: string;
};

const DocumentsList: React.FC = () => {
  const [filters, setFilters] = useState<DocumentFilters>({
    project: "",
    customer: "",
    wings: "",
    keyword: "",
  });

  const [rows, setRows] = useState<DocumentRow[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Add Doc form state (modal)
  const [docForm, setDocForm] = useState({
    category: "",
    wings: "",
    userRole: "",
    uploadedBy: "You",
    fileName: "",
    tag: "",
    viewUrl: "",
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDocForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitFilters = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Filters:", filters);
  };

  const addDocument = () => {
    if (!docForm.category.trim() || !docForm.fileName.trim()) return;

    const newRow: DocumentRow = {
      id: rows.length ? rows[rows.length - 1].id + 1 : 1,
      uploadedAt: new Date().toLocaleString(),
      category: docForm.category.trim(),
      wings: docForm.wings,
      userRole: docForm.userRole.trim(),
      uploadedBy: docForm.uploadedBy.trim() || "You",
      viewUrl: docForm.viewUrl.trim(),
      fileName: docForm.fileName.trim(),
      tag: docForm.tag.trim(),
    };

    setRows((prev) => [newRow, ...prev]);
    setIsAddOpen(false);
    setDocForm({
      category: "",
      wings: "",
      userRole: "",
      uploadedBy: "You",
      fileName: "",
      tag: "",
      viewUrl: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <form
        onSubmit={handleSubmitFilters}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            📄 Documents List
          </h1>

          {/* Filters (top-right) */}
          <div className="flex flex-wrap gap-2">
            <select
              name="project"
              value={filters.project}
              onChange={handleFilterChange}
              className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 bg-white/10 text-white"
            >
              <option value="">Project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
            </select>

            <select
              name="customer"
              value={filters.customer}
              onChange={handleFilterChange}
              className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 bg-white/10 text-white"
            >
              <option value="">Customer</option>
              <option value="customer1">Customer 1</option>
              <option value="customer2">Customer 2</option>
            </select>

            <select
              name="wings"
              value={filters.wings}
              onChange={handleFilterChange}
              className="select-dark border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-400 bg-white/10 text-white"
            >
              <option value="">Wing</option>
              <option value="Wing 1">Wing 1</option>
              <option value="Wing 2">Wing 2</option>
            </select>

            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
            >
              <Plus size={18} /> Add Document
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
          <input
            type="text"
            placeholder="🔍 Search by keywords"
            name="keyword"
            value={filters.keyword}
            onChange={handleFilterChange}
            className="flex-1 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-full px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["All 0", "Root 1", "whatsapp 2"].map((label, i) => (
            <button
              key={label}
              type="button"
              className={`px-3 py-1 rounded-sm border text-sm ${
                i === 0
                  ? "bg-teal-600 text-white border-teal-600 hover:bg-teal-700" // was blue; now teal to match Add button
                  : "bg-white/10 text-white border-white/20 hover:bg-white/15"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full text-sm border border-white/20 rounded-2xl overflow-hidden border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white text-left">
                {[
                  "Sl.No.",
                  "Uploaded Date & Time",
                  "Category",
                  "Wings",
                  "User Role",
                  "Uploaded By",
                  "View Doc",
                  "File Name",
                  "Tag",
                  "Actions",
                ].map((header) => (
                  <th key={header} className="px-4 py-3 border border-white/20">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-white">
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={10}
                    className="text-center text-white/80 py-8 bg-gradient-to-r from-gray-800/80 via-gray-900/90 to-gray-800/80"
                  >
                    No data available in table
                  </td>
                </tr>
              ) : (
                rows.map((r, idx) => (
                  <tr
                    key={r.id}
                    className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    <td className="px-4 py-3 border border-white/20">
                      {rows.length - idx}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.uploadedAt}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.category}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.wings}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.userRole}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.uploadedBy}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.viewUrl ? (
                        <a
                          href={r.viewUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-teal-300 hover:underline"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-white/50">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 border border-white/20">
                      {r.fileName}
                    </td>
                    <td className="px-4 py-3 border border-white/20">{r.tag}</td>
                    <td className="px-4 py-3 border border-white/20">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-orange-300 hover:text-orange-200">
                          <Edit3 size={16} /> Edit
                        </button>
                        <button className="flex items-center gap-1 text-white/70 hover:text-white">
                          <Settings size={16} /> Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-3 text-sm text-white/80">
          Showing {rows.length ? 1 : 0} to {rows.length} of {rows.length} entries
        </div>
      </form>

      {/* ADD DOCUMENT MODAL */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-2xl rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-2">
                <Plus className="text-teal-400" size={22} />
                <h3 className="text-white text-2xl font-semibold">Add Document</h3>
              </div>
              <button
                onClick={() => setIsAddOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                aria-label="Close"
              >
                <X size={20} className="text-white/80" />
              </button>
            </div>

            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Category *</label>
                <input
                  name="category"
                  value={docForm.category}
                  onChange={handleDocFormChange}
                  placeholder="e.g. Invoices"
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Wing</label>
                <select
                  name="wings"
                  value={docForm.wings}
                  onChange={handleDocFormChange}
                  className="select-dark mt-1 w-full h-11 px-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                >
                  <option value="">Select wing</option>
                  <option>Wing 1</option>
                  <option>Wing 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-white/80">User Role</label>
                <input
                  name="userRole"
                  value={docForm.userRole}
                  onChange={handleDocFormChange}
                  placeholder="e.g. Admin"
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Uploaded By</label>
                <input
                  name="uploadedBy"
                  value={docForm.uploadedBy}
                  onChange={handleDocFormChange}
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm text-white/80">File Name *</label>
                <input
                  name="fileName"
                  value={docForm.fileName}
                  onChange={handleDocFormChange}
                  placeholder="e.g. file.pdf"
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Tag</label>
                <input
                  name="tag"
                  value={docForm.tag}
                  onChange={handleDocFormChange}
                  placeholder="e.g. Important"
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-white/80">View URL</label>
                <input
                  name="viewUrl"
                  value={docForm.viewUrl}
                  onChange={handleDocFormChange}
                  placeholder="https://..."
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            <div className="px-6 pb-6 flex items-center justify-end gap-2">
              <button
                onClick={() => setIsAddOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={addDocument}
                className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 shadow cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsList;
