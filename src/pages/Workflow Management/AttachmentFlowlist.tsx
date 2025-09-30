


// // // src/pages/documentFlow/AttachmentFlowlist.tsx
// import React, { useState } from "react";
// import { Plus, PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";

// type TableRow = {
//   id: number;
//   category: string;
//   initRoles: string;
//   approval: string;
// };

// const btnPrimary =
//   "inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 cursor-pointer";
// const inputBase =
//   "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400";

// const AttachmentFlowlist: React.FC = () => {
//   // table chrome (empty like screenshot)
//   const [perPage, setPerPage] = useState(10);
//   const [page, setPage] = useState(1);
//   const [q, setQ] = useState("");
//   const rows: TableRow[] = []; // empty → "No data available in table"
//   const total = rows.length;
//   const maxPage = Math.max(1, Math.ceil(total / perPage));
//   const goto = (p: number) => setPage(Math.min(Math.max(1, p), maxPage));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black">
//       {/* Center the card vertically & horizontally */}
//       <div className="min-h-screen flex items-center justify-center px-4 py-10">
//         <div className="w-full max-w-[1400px]">
//           {/* Glassy card */}
//           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl text-white">
//             {/* Title */}
//             <div className="px-5 pt-5 pb-3">
//               <h2 className="text-xl font-semibold">Add Category Flow</h2>
//             </div>

//             <div className="px-5 pb-6">
//               {/* Top row: Category / Wings / Initiate User Roles */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Document Category */}
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     Document Category <span className="text-red-300">*</span>
//                   </label>
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <select className={inputBase}>
//                       <option>--Select Category Name--</option>
//                     </select>
//                     {/* <button type="button" className={btnPrimary}>
//                       <Plus size={16} />
//                       Add Category
//                     </button> */}
//                   </div>
//                 </div>

//                 {/* Wings */}
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Wings</label>
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <select className={inputBase}>
//                       <option>Select</option>
//                     </select>
//                     {/* <button type="button" className={btnPrimary}>
//                       <Plus size={16} />
//                       Add Wings
//                     </button> */}
//                   </div>
//                 </div>

//                 {/* Initiate User Roles */}
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     Initiate User Roles
//                   </label>
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <textarea
//                       className={`${inputBase} h-[44px] sm:h-[44px] md:h-[44px] lg:h-[44px]`}
//                     />
//                     {/* <button type="button" className={btnPrimary}>
//                       <Plus size={16} />
//                       Add User Role
//                     </button> */}
//                   </div>
//                 </div>
//               </div>

//               {/* Middle rows */}
//               <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Forward to + Approval Authority */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Forward To
//                     </label>
//                     <select className={inputBase}>
//                       <option>--Select Role Type--</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Approval Authority <span className="text-red-300">*</span>
//                     </label>
//                     <select className={inputBase}>
//                       <option>--Select--</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Is Edit (x2) */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Is Edit?</label>
//                     <select className={inputBase}>
//                       <option>Yes</option>
//                       <option>No</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Is Edit?</label>
//                     <select className={inputBase}>
//                       <option>Yes</option>
//                       <option>No</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Is Download (x2) + green add icon */}
//                 <div className="space-y-6">
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <label className="block text-sm font-medium mb-1">
//                         Is Download?
//                       </label>
//                       <button
//                         type="button"
//                         className="h-9 w-9 grid place-items-center rounded-full bg-green-500 text-white shadow hover:bg-green-600"
//                         title="Add"
//                       >
//                         <PlusCircle size={18} />
//                       </button>
//                     </div>
//                     <select className={inputBase}>
//                       <option>Yes</option>
//                       <option>No</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Is Download?
//                     </label>
//                     <select className={inputBase}>
//                       <option>Yes</option>
//                       <option>No</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Save Button */}
//               <div className="mt-8 flex items-center justify-center">
//                 <button
//                   type="button"
//                   className="rounded-md bg-blue-600/90 text-white px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>

//             {/* Table chrome */}
//             <div className="px-5 pb-6">
//               {/* Controls */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//                 <div className="flex items-center gap-2 text-sm">
//                   <span>Show</span>
//                   <select
//                     className="h-9 w-16 rounded-md border border-white/20 bg-white/10 text-white px-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                     value={perPage}
//                     onChange={(e) => {
//                       setPerPage(parseInt(e.target.value, 10));
//                       setPage(1);
//                     }}
//                   >
//                     {[10, 25, 50, 100].map((n) => (
//                       <option className="text-gray-900" key={n} value={n}>
//                         {n}
//                       </option>
//                     ))}
//                   </select>
//                   <span>entries</span>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm">
//                   <span>Search:</span>
//                   <input
//                     className="h-9 w-64 max-w-full rounded-md border border-white/20 bg-white/10 text-white px-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                     value={q}
//                     onChange={(e) => setQ(e.target.value)}
//                     placeholder=""
//                   />
//                 </div>
//               </div>

//               {/* Table */}
//               <div className="mt-3 overflow-x-auto rounded-2xl shadow">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr className="bg-teal-600 text-white text-sm">
//                       {["#", "Category Name", "Initiate User Roles", "Approval Authority"].map(
//                         (h) => (
//                           <th
//                             key={h}
//                             className="whitespace-nowrap border border-white/20 px-3 py-2 text-left"
//                           >
//                             {h}
//                           </th>
//                         )
//                       )}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td
//                         colSpan={4}
//                         className="border border-white/20 px-3 py-6 text-center text-white/80"
//                       >
//                         No data available in table
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Footer */}
//               <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
//                 <p className="text-white/90">
//                   Showing 0 to 0 of 0 entries
//                 </p>

//                 <div className="flex items-center gap-1">
//                   <button
//                     className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
//                     onClick={() => goto(page - 1)}
//                     disabled={true}
//                     aria-label="Previous"
//                   >
//                     <ChevronLeft size={18} />
//                   </button>
//                   <button className="h-9 min-w-9 px-3 rounded-md border border-white/20 bg-blue-600 text-white">
//                     1
//                   </button>
//                   <button
//                     className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
//                     onClick={() => goto(page + 1)}
//                     disabled={true}
//                     aria-label="Next"
//                   >
//                     <ChevronRight size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* /table chrome */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttachmentFlowlist;


// src/pages/documentFlow/AttachmentFlowlist.tsx
import React, { useState } from "react";
import { Plus, PlusCircle, MinusCircle, ChevronLeft, ChevronRight } from "lucide-react";

type TableRow = {
  id: number;
  category: string;
  initRoles: string;
  approval: string;
};

type RouteRow = {
  id: number;
  roleType: string;
  isEdit: "Yes" | "No";
  isDownload: "Yes" | "No";
};

const btnPrimary =
  "inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 cursor-pointer";
const inputBase =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400";

const AttachmentFlowlist: React.FC = () => {
  // table chrome (empty like screenshot)
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const rows: TableRow[] = [];
  const total = rows.length;
  const maxPage = Math.max(1, Math.ceil(total / perPage));
  const goto = (p: number) => setPage(Math.min(Math.max(1, p), maxPage));

  // dynamic rows for Forward To / Is Edit? / Is Download?
  const [routeRows, setRouteRows] = useState<RouteRow[]>([
    { id: Date.now(), roleType: "", isEdit: "Yes", isDownload: "Yes" },
  ]);

  const addRouteRow = () =>
    setRouteRows((prev) => [
      ...prev,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        roleType: "",
        isEdit: "Yes",
        isDownload: "Yes",
      },
    ]);

  const removeRouteRow = (id: number) =>
    setRouteRows((prev) => prev.filter((r) => r.id !== id)); 

  return (
    <div className="">
      {/* Center the card vertically & horizontally */}
      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[1400px]">
          {/* Glassy card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl text-white">
            {/* Title */}
            <div className="px-5 pt-5 pb-3">
              <h2 className="text-xl font-semibold">Add Category Flow</h2>
            </div>

            <div className="px-5 pb-6">
              {/* Top row: Category / Wings / Initiate User Roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Document Category */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Document Category <span className="text-red-300">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select className={`${inputBase} h-11`}>
                      <option>--Select Category Name--</option>
                    </select>
                    {/* <button type="button" className={btnPrimary}>
                      <Plus size={16} />
                      Add Category
                    </button> */}
                  </div>
                </div>

                {/* Wings */}
                <div>
                  <label className="block text-sm font-medium mb-1">Wings</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select className={`${inputBase} h-11`}>
                      <option>Select</option>
                    </select>
                    {/* <button type="button" className={btnPrimary}>
                      <Plus size={16} />
                      Add Wings
                    </button> */}
                  </div>
                </div>

                {/* Initiate User Roles */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Initiate User Roles
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <textarea className={`${inputBase} h-11`} />
                    {/* <button type="button" className={btnPrimary}>
                      <Plus size={16} />
                      Add User Role
                    </button> */}
                  </div>
                </div>
              </div>

              {/* ---------- DYNAMIC ROWS (aligned +/– button) ---------- */}
              <div className="mt-8 space-y-6">
                {routeRows.map((row, idx) => (
                  <div
                    key={row.id}
                    className="relative grid grid-cols-1 md:grid-cols-3 gap-6 pr-12"
                  >
                    {/* Forward To */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Forward To
                      </label>
                      <select className={`${inputBase} h-11`} defaultValue="">
                        <option value="">--Select Role Type--</option>
                        <option>Admin</option>
                        <option>Reviewer</option>
                        <option>Approver</option>
                      </select>
                    </div>

                    {/* Is Edit? */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Is Edit?
                      </label>
                      <select className={`${inputBase} h-11`} defaultValue="Yes">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    {/* Is Download? */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Is Download?
                      </label>
                      <select className={`${inputBase} h-11`} defaultValue="Yes">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    {/* Aligned action button (top-right of the row) */}
                    {idx === 0 ? (
                      <button
                        type="button"
                        onClick={addRouteRow}
                        className="absolute right-0 top-0 h-9 w-9 grid place-items-center rounded-full bg-green-500 text-white shadow hover:bg-green-600"
                        title="Add"
                        aria-label="Add row"
                      >
                        <PlusCircle size={18} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => removeRouteRow(row.id)}
                        className="absolute right-0 top-0 h-9 w-9 grid place-items-center rounded-full bg-red-500 text-white shadow hover:bg-red-600"
                        title="Remove"
                        aria-label="Remove row"
                      >
                        <MinusCircle size={18} />
                      </button>
                    )}
                  </div>
                ))}

                {/* Approval Authority (stays below the dynamic rows) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Approval Authority <span className="text-red-300">*</span>
                    </label>
                    <select className={`${inputBase} h-11`} defaultValue="">
                      <option value="">--Select--</option>
                      <option>Head - Finance</option>
                      <option>Head - Admin</option>
                      <option>CTO</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* ---------- /DYNAMIC ROWS ---------- */}

              {/* Save Button */}
              <div className="mt-8 flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md bg-blue-600/90 text-white px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Table chrome (kept like screenshot) */}
            <div className="px-5 pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>Show</span>
                  <select
                    className="h-9 w-16 rounded-md border border-white/20 bg-white/10 text-white px-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={perPage}
                    onChange={(e) => {
                      setPerPage(parseInt(e.target.value, 10));
                      setPage(1);
                    }}
                  >
                    {[10, 25, 50, 100].map((n) => (
                      <option className="text-gray-900" key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <span>entries</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span>Search:</span>
                  <input
                    className="h-9 w-64 max-w-full rounded-md border border-white/20 bg-white/10 text-white px-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="mt-3 overflow-x-auto rounded-2xl shadow">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white text-sm">
                      {["#", "Category Name", "Initiate User Roles", "Approval Authority"].map(
                        (h) => (
                          <th
                            key={h}
                            className="whitespace-nowrap border border-white/20 px-3 py-2 text-left"
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan={4}
                        className="border border-white/20 px-3 py-6 text-center text-white/80"
                      >
                        No data available in table
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
                <p className="text-white/90">Showing 0 to 0 of 0 entries</p>
                <div className="flex items-center gap-1">
                  <button
                    className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                    disabled
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button className="h-9 min-w-9 px-3 rounded-md border border-white/20 bg-blue-600 text-white">
                    1
                  </button>
                  <button
                    className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                    disabled
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            {/* /table chrome */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentFlowlist;
 


