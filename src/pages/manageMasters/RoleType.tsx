// import React, { useState, useEffect } from "react";

// interface RoleTypeData {
//   id: number;
//   wing: string;
//   roleType: string;
// }

// interface Wing {
//   id: number;
//   name: string;
// }

// const RoleType: React.FC = () => {
//   const [wings, setWings] = useState<Wing[]>([]);
//   const [form, setForm] = useState({ wing: "", roleType: "" });
//   const [data, setData] = useState<RoleTypeData[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch wings
//   useEffect(() => {
//     const fetchWings = async () => {
//       try {
//         const res = await fetch("/api/wings");
//         const result = await res.json();
//         setWings(result);
//       } catch (error) {
//         console.error("Error fetching wings:", error);
//       }
//     };
//     fetchWings();
//   }, []);

//   // Fetch role types
//   const fetchRoles = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/role-types");
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching roles:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRoles();
//   }, []);

//   // Handle input changes (generic for any field)
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Save role type
//   const handleSave = async (e: React.FormEvent) => {
//     e.preventDefault(); // prevent page reload

//     if (!form.wing || !form.roleType.trim()) return;

//     try {
//       const res = await fetch("/api/role-types", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         fetchRoles();
//         setForm({ wing: "", roleType: "" }); // reset form
//       }
//     } catch (error) {
//       console.error("Error saving role:", error);
//     }
//   };

//   return (
//    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black flex flex-col items-center justify-center p-4">
//     <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-white">Role Type</h2>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
//           Add Wings
//         </button>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20">
//         <div>
//           <label className="block text-sm font-medium text-white mb-1">
//             Wings <span className="text-red-500">*</span>
//           </label>
//           <select
//             name="wing"
//             value={form.wing}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Select</option>
//             {wings.map((wing) => (
//               <option key={wing.id} value={wing.name}>
//                 {wing.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-white mb-1">
//             Roles Type <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="roleType"
//             value={form.roleType}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-white"
//             placeholder="Enter role type"
//           />
//         </div>

//         <div className="flex items-end">
//           <button
//             type="submit"
//             className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
//           >
//             Add
//           </button>
//         </div>
//       </form>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="px-3 py-2 border">Sl.No.</th>
//               <th className="px-3 py-2 border">Wings</th>
//               <th className="px-3 py-2 border">Roles Type</th>
//               <th className="px-3 py-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={4} className="text-center py-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : data.length > 0 ? (
//               data.map((item, index) => (
//                 <tr key={item.id} className="hover:bg-gray-50">
//                   <td className="px-3 py-2 border">{index + 1}</td>
//                   <td className="px-3 py-2 border">{item.wing}</td>
//                   <td className="px-3 py-2 border">{item.roleType}</td>
//                   <td className="px-3 py-2 border">
//                     <button className="text-red-500 hover:underline">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="text-center py-4 text-gray-500">
//                   No data available in table
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//    </div> 
//   );
// };

// export default RoleType;

// import React, { useState } from "react";
// import { Edit2, Trash2, Plus } from "lucide-react";

// interface RoleTypeData {
//   id: number;
//   wing: string;
//   roleType: string;
// }
// interface Wing {
//   id: number;
//   name: string;
// }

// const RoleType: React.FC = () => {
//   // Seed a couple for convenience; you can start [] if you want.
//   const [wings, setWings] = useState<Wing[]>([
//     { id: 1, name: "Administration" },
//     { id: 2, name: "Finance" },
//   ]);

//   const [form, setForm] = useState({ wing: "", roleType: "" });
//   const [rows, setRows] = useState<RoleTypeData[]>([]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.wing || !form.roleType.trim()) return;

//     setRows((prev) => [
//       ...prev,
//       {
//         id: prev.length ? prev[prev.length - 1].id + 1 : 1,
//         wing: form.wing,
//         roleType: form.roleType.trim(),
//       },
//     ]);
//     setForm({ wing: "", roleType: "" });
//   };

//   const handleDelete = (id: number) => {
//     setRows((prev) => prev.filter((r) => r.id !== id));
//   };

//   const handleEdit = (id: number) => {
//     const current = rows.find((r) => r.id === id);
//     if (!current) return;
//     const updated = prompt("Edit role type:", current.roleType);
//     if (updated && updated.trim()) {
//       setRows((prev) =>
//         prev.map((r) => (r.id === id ? { ...r, roleType: updated.trim() } : r))
//       );
//     }
//   };

//   // Optional: quickly add a new wing via the header button
//   const quickAddWing = () => {
//     const name = prompt("New wing name:");
//     if (!name || !name.trim()) return;
//     setWings((prev) => [
//       ...prev,
//       { id: prev.length ? prev[prev.length - 1].id + 1 : 1, name: name.trim() },
//     ]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6">
//         {/* Header */}
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
//           <h2 className="text-xl font-semibold text-white">Role Type</h2>
//           <button
//             onClick={quickAddWing}
//             className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
//           >
//             <Plus size={18} /> Add Wings
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSave}
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6"
//         >
//           <div>
//             <label className="block text-sm font-medium text-white mb-1">
//               Wings <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="wing"
//               value={form.wing}
//               onChange={handleChange}
//               className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//             >
//               <option value="">Select</option>
//               {wings.map((wing) => (
//                 <option key={wing.id} value={wing.name}>
//                   {wing.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-white mb-1">
//               Roles Type <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="roleType"
//               value={form.roleType}
//               onChange={handleChange}
//               placeholder="Enter role type"
//               className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//             />
//           </div>

//           <div className="flex items-end">
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
//             >
//               Add
//             </button>
//           </div>
//         </form>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm rounded-lg overflow-hidden border border-white/20 border-collapse">
//             <thead>
//               <tr className="bg-teal-600 text-white">
//                 <th className="px-3 py-2 border border-white/20 text-left">
//                   Sl.No.
//                 </th>
//                 <th className="px-3 py-2 border border-white/20 text-left">
//                   Wings
//                 </th>
//                 <th className="px-3 py-2 border border-white/20 text-left">
//                   Roles Type
//                 </th>
//                 <th className="px-3 py-2 border border-white/20 text-center">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="text-white">
//               {rows.length > 0 ? (
//                 rows.map((item, index) => (
//                   <tr
//                     key={item.id}
//                     className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
//                   >
//                     <td className="px-3 py-2 border border-white/20">
//                       {index + 1}
//                     </td>
//                     <td className="px-3 py-2 border border-white/20">
//                       {item.wing}
//                     </td>
//                     <td className="px-3 py-2 border border-white/20">
//                       {item.roleType}
//                     </td>
//                     <td className="px-3 py-2 border border-white/20">
//                       <div className="flex items-center justify-center gap-3">
//                         <button
//                           type="button"
//                           onClick={() => handleEdit(item.id)}
//                           className="p-1 rounded hover:bg-white/10 cursor-pointer"
//                           title="Edit"
//                         >
//                           <Edit2 size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDelete(item.id)}
//                           className="p-1 rounded hover:bg-white/10 text-red-400 hover:text-red-300 cursor-pointer"
//                           title="Delete"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={4}
//                     className="text-center py-4 border border-white/20 text-white/80"
//                   >
//                     No data available in table
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleType;


import React, { useState } from "react";
import { Edit2, Trash2, Plus, X, Lightbulb } from "lucide-react";

interface RoleTypeData {
  id: number;
  wing: string;
  roleType: string;
}
interface Wing {
  id: number;
  name: string;
}

/* -------- Modal to Add a Wing -------- */
type WingModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
};

function WingModal({ open, onClose, onAdd }: WingModalProps) {
  const [name, setName] = useState("");

  if (!open) return null;

  const handleAdd = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  };

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-2xl">+</span>
            <h3 className="text-white text-2xl font-semibold">Add a New Wing</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 cursor-pointer"
            aria-label="Close"
          >
            <X size={20} className="text-white/80" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter wing name..."
            className="w-full h-12 px-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/70">
            <Lightbulb size={16} />
            <p className="text-sm">
              Tip: You can add wings here, then assign role types from the form.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 shadow cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------- Page ---------------- */
const RoleType: React.FC = () => {
  // Seed some wings; start [] if you prefer.
  const [wings, setWings] = useState<Wing[]>([
    { id: 1, name: "Administration" },
    { id: 2, name: "Finance" },
  ]);

  const [form, setForm] = useState({ wing: "", roleType: "" });
  const [rows, setRows] = useState<RoleTypeData[]>([]);
  const [wingModalOpen, setWingModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.wing || !form.roleType.trim()) return;

    setRows((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        wing: form.wing,
        roleType: form.roleType.trim(),
      },
    ]);
    setForm({ wing: "", roleType: "" });
  };

  const handleDelete = (id: number) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleEdit = (id: number) => {
    const current = rows.find((r) => r.id === id);
    if (!current) return;
    const updated = prompt("Edit role type:", current.roleType);
    if (updated && updated.trim()) {
      setRows((prev) =>
        prev.map((r) => (r.id === id ? { ...r, roleType: updated.trim() } : r))
      );
    }
  };

  // Add wing from modal and auto-select it in the form
  const addWingFromModal = (name: string) => {
    setWings((prev) => {
      const nextId = prev.length ? prev[prev.length - 1].id + 1 : 1;
      return [...prev, { id: nextId, name }];
    });
    setForm((f) => ({ ...f, wing: name }));
    setWingModalOpen(false);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Role Type</h2>
          <button
            onClick={() => setWingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
          >
            <Plus size={18} /> Add Wings
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSave}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6"
        >
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Wings <span className="text-red-500">*</span>
            </label>
            <select
  name="wing"
  value={form.wing}
  onChange={handleChange}
  className="select-dark w-full border border-white/20 bg-white/10
             rounded-lg px-3 py-2 focus:outline-none focus:ring-2
             focus:ring-teal-400"
>
  <option value="">Select</option>
  {wings.map((wing) => (
    <option key={wing.id} value={wing.name}>
      {wing.name}
    </option>
  ))}
</select>

          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Roles Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="roleType"
              value={form.roleType}
              onChange={handleChange}
              placeholder="Enter role type"
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm rounded-lg overflow-hidden border border-white/20 border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-3 py-2 border border-white/20 text-left">
                  Sl.No.
                </th>
                <th className="px-3 py-2 border border-white/20 text-left">
                  Wings
                </th>
                <th className="px-3 py-2 border border-white/20 text-left">
                  Roles Type
                </th>
                <th className="px-3 py-2 border border-white/20 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="text-white">
              {rows.length > 0 ? (
                rows.map((item, index) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    <td className="px-3 py-2 border border-white/20">
                      {index + 1}
                    </td>
                    <td className="px-3 py-2 border border-white/20">
                      {item.wing}
                    </td>
                    <td className="px-3 py-2 border border-white/20">
                      {item.roleType}
                    </td>
                    <td className="px-3 py-2 border border-white/20">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleEdit(item.id)}
                          className="p-1 rounded hover:bg-white/10 cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="p-1 rounded hover:bg-white/10 text-red-400 hover:text-red-300 cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-4 border border-white/20 text-white/80"
                  >
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <WingModal
        open={wingModalOpen}
        onClose={() => setWingModalOpen(false)}
        onAdd={addWingFromModal}
      />
    </div>
  );
};

export default RoleType;

