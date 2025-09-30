
// // src/pages/documentFlow/AttachmentFlowList.tsx
// import React, { useMemo, useState } from "react";
// import {
//   Paperclip,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// type Row = {
//   id: number;
//   attachment: string;      // file name or blank
//   createdBy: string;
//   forwardedBy: string;
//   forwardDate: string;     // date/time
//   remark: string;
//   forwardTo: string;
//   status: "Pending" | "Forwarded" | "My";
// };

// const seedRows = (): Row[] => {
//   const creators = ["Aishwarya Mishra", "LIPL", "Soniya", "Team Lead"];
//   const remarks = ["check", "verify", "kindly check it from your end", "see", "sss", "ffff", ""];
//   const rows: Row[] = [];
//   for (let i = 1; i <= 25; i++) {
//     rows.push({
//       id: i,
//       attachment: i % 3 === 0 ? "" : "doc",
//       createdBy: creators[i % creators.length],
//       forwardedBy: `${creators[(i + 1) % creators.length]}, ()`,
//       forwardDate: new Date(2025, 3 + (i % 5), 7 + (i % 20), 12 + (i % 7), 4 + (i % 55), 25)
//         .toLocaleString("en-GB")
//         .replace(",", ""),
//       remark: remarks[i % remarks.length],
//       forwardTo: "()",
//       status: "Pending",
//     });
//   }
//   return rows;
// };

// const allRows = seedRows();

// const pillBase =
//   "px-3 py-1.5 rounded-md text-sm font-medium border transition cursor-pointer";
// const btnBase =
//   "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm cursor-pointer select-none";

// const AssignWorkFlow: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"Pending" | "Forwarded" | "My">(
//     "Pending"
//   );
//   const [perPage, setPerPage] = useState(10);
//   const [page, setPage] = useState(1);
//   const [q, setQ] = useState("");

//   const filtered = useMemo(() => {
//     const pool = allRows.filter((r) => r.status === activeTab);
//     if (!q.trim()) return pool;
//     const s = q.toLowerCase();
//     return pool.filter(
//       (r) =>
//         String(r.id).includes(s) ||
//         r.createdBy.toLowerCase().includes(s) ||
//         r.forwardedBy.toLowerCase().includes(s) ||
//         r.forwardDate.toLowerCase().includes(s) ||
//         r.remark.toLowerCase().includes(s) ||
//         r.forwardTo.toLowerCase().includes(s)
//     );
//   }, [activeTab, q]);

//   const total = filtered.length;
//   const maxPage = Math.max(1, Math.ceil(total / perPage));
//   const pageSafe = Math.min(page, maxPage);
//   const startIndex = (pageSafe - 1) * perPage;
//   const pageRows = filtered.slice(startIndex, startIndex + perPage);

//   const showingFrom = total === 0 ? 0 : startIndex + 1;
//   const showingTo = startIndex + pageRows.length;

//   const goto = (p: number) => setPage(Math.min(Math.max(1, p), maxPage));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4 md:p-6">
//       {/* Card */}
//       <div className="mx-auto max-w-[1400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl text-white">
//         {/* Header */}
//         <div className="px-4 md:px-6 pt-5">
//           <h2 className="text-lg md:text-xl font-semibold text-gray-800">
//             Attachment Flow List
//           </h2>

//           {/* Tabs */}
//           <div className="mt-3 flex flex-wrap gap-2">
//             <button
//               onClick={() => {
//                 setActiveTab("Pending");
//                 setPage(1);
//               }}
//               className={`${pillBase} ${
//                 activeTab === "Pending"
//                   ? "bg-yellow-500 text-white border-yellow-500"
//                   : "bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200"
//               }`}
//             >
//               Pending
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("Forwarded");
//                 setPage(1);
//               }}
//               className={`${pillBase} ${
//                 activeTab === "Forwarded"
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
//               }`}
//             >
//               Forwarded
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("My");
//                 setPage(1);
//               }}
//               className={`${pillBase} ${
//                 activeTab === "My"
//                   ? "bg-indigo-600 text-white border-indigo-600"
//                   : "bg-indigo-100 text-indigo-700 border-indigo-300 hover:bg-indigo-200"
//               }`}
//             >
//               My
//             </button>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-white">Show</span>
//             <select
//               className="h-9 w-16 rounded-md border border-gray-300 bg-white text-gray-800 px-2"
//               value={perPage}
//               onChange={(e) => {
//                 setPerPage(parseInt(e.target.value, 10));
//                 setPage(1);
//               }}
//             >
//               {[10, 25, 50, 100].map((n) => (
//                 <option key={n} value={n}>
//                   {n}
//                 </option>
//               ))}
//             </select>
//             <span className="text-white">entries</span>
//           </div>

//           <div className="flex items-center gap-2 text-sm">
//             <label className="text-gray-700">Search:</label>
//             <input
//               className="h-9 w-64 max-w-full rounded-md border border-gray-300 bg-white px-3 text-gray-800"
//               value={q}
//               onChange={(e) => {
//                 setQ(e.target.value);
//                 setPage(1);
//               }}
//               placeholder=""
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="px-3 md:px-5 pb-4 ">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse ">
//               <thead>
//                 <tr className="bg-blue-700 text-white text-sm">
//                   {[
//                     "#",
//                     "Attachment",
//                     "Created By",
//                     "Forwarded By",
//                     "Forward Date",
//                     "Remark",
//                     "Forward To",
//                     "Status",
//                     "Action",
//                   ].map((h) => (
//                     <th
//                       key={h}
//                       className="whitespace-nowrap border border-blue-200/30 px-3 py-2 text-left"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {pageRows.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="text-center text-gray-500 border px-3 py-6 "
//                     >
//                       No data available in table
//                     </td>
//                   </tr>
//                 ) : (
//                   pageRows.map((r, idx) => (
//                     <tr
//                       key={r.id}
//                       className="odd:bg-white even:bg-gray-50 text-sm text-black"
//                     >
//                       {/* # */}
//                       <td className="border px-3 py-2">{startIndex + idx + 1}</td>

//                       {/* Attachment */}
//                       <td className="border px-3 py-2">
//                         <button
//                           className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white hover:bg-blue-700"
//                           title="Open attachment"
//                         >
//                           <Paperclip size={16} />
//                         </button>
//                         <span className="sr-only text-black">{r.attachment}</span>
//                       </td>

//                       {/* Created By */}
//                       <td className="border px-3 py-2 text-black">
//                         {r.createdBy}, ()
//                       </td>

//                       {/* Forwarded By */}
//                       <td className="border px-3 py-2 text-black">{r.forwardedBy}</td>

//                       {/* Forward Date */}
//                       <td className="border px-3 py-2 whitespace-nowrap text-black">
//                         {r.forwardDate}
//                       </td>

//                       {/* Remark */}
//                       <td className="border px-3 py-2 text-black">{r.remark || ""}</td>

//                       {/* Forward To */}
//                       <td className="border px-3 py-2 text-black">{r.forwardTo}</td>

//                       {/* Status */}
//                       <td className="border px-3 py-2 text-black">
//                         <span className="text-amber-600 font-semibold">
//                           Pending
//                         </span>
//                       </td>

//                       {/* Action */}
//                       <td className="border px-3 py-2 text-black">
//                         <div className="flex items-center gap-2">
//                           <button
//                             className={`${btnBase} bg-blue-600 text-white hover:bg-blue-700`}
//                           >
//                             Attach File
//                           </button>
//                           <button
//                             className={`${btnBase} bg-teal-600 text-white hover:bg-teal-700`}
//                           >
//                             Forward
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Footer */}
//           <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
//             <p className="text-white">
//               Showing {showingFrom} to {showingTo} of {total} entries
//             </p>

//             <div className="flex items-center gap-1">
//               <button
//                 className="h-9 w-9 grid place-items-center rounded-md border text-gray-700 hover:bg-gray-100 disabled:opacity-50"
//                 onClick={() => goto(page - 1)}
//                 disabled={pageSafe === 1}
//                 aria-label="Previous"
//               >
//                 <ChevronLeft size={18} />
//               </button>

//               {/* simple 1..n pagination (compact) */}
//               {Array.from({ length: maxPage }).map((_, i) => {
//                 const p = i + 1;
//                 const active = p === pageSafe;
//                 return (
//                   <button
//                     key={p}
//                     onClick={() => goto(p)}
//                     className={`h-9 min-w-9 px-3 rounded-md border ${
//                       active
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "bg-white text-gray-800 hover:bg-gray-100"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 );
//               })}

//               <button
//                 className="h-9 w-9 grid place-items-center rounded-md border text-gray-700 hover:bg-gray-100 disabled:opacity-50"
//                 onClick={() => goto(page + 1)}
//                 disabled={pageSafe === maxPage}
//                 aria-label="Next"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignWorkFlow;
                                                                                                                                                                              
 
// src/pages/documentFlow/AttachmentFlowList.tsx
import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Row = {
  id: number;
  attachment: string;      // file name or blank
  createdBy: string;
  forwardedBy: string;
  forwardDate: string;     // date/time
  remark: string;
  forwardTo: string;
  status: "Pending" | "Forwarded" | "My";
};

const seedRows = (): Row[] => {
  const creators = ["Aishwarya Mishra", "LIPL", "Soniya", "Team Lead"];
  const remarks = ["check", "verify", "kindly check it from your end", "see", "sss", "ffff", ""];
  const rows: Row[] = [];
  for (let i = 1; i <= 25; i++) {
    rows.push({
      id: i,
      attachment: i % 3 === 0 ? "" : "doc",
      createdBy: creators[i % creators.length],
      forwardedBy: `${creators[(i + 1) % creators.length]}, ()`,
      forwardDate: new Date(2025, 3 + (i % 5), 7 + (i % 20), 12 + (i % 7), 4 + (i % 55), 25)
        .toLocaleString("en-GB")
        .replace(",", ""),
      remark: remarks[i % remarks.length],
      forwardTo: "()",
      status: "Pending",
    });
  }
  return rows;
};

const allRows = seedRows();

const pillBase =
  "px-3 py-1.5 rounded-md text-sm font-medium border transition cursor-pointer";
const btnBase =
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm cursor-pointer select-none";

const AssignWorkFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Pending" | "Forwarded" | "My">("Pending");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const pool = allRows.filter((r) => r.status === activeTab);
    if (!q.trim()) return pool;
    const s = q.toLowerCase();
    return pool.filter(
      (r) =>
        String(r.id).includes(s) ||
        r.createdBy.toLowerCase().includes(s) ||
        r.forwardedBy.toLowerCase().includes(s) ||
        r.forwardDate.toLowerCase().includes(s) ||
        r.remark.toLowerCase().includes(s) ||
        r.forwardTo.toLowerCase().includes(s)
    );
  }, [activeTab, q]);

  const total = filtered.length;
  const maxPage = Math.max(1, Math.ceil(total / perPage));
  const pageSafe = Math.min(page, maxPage);
  const startIndex = (pageSafe - 1) * perPage;
  const pageRows = filtered.slice(startIndex, startIndex + perPage);

  const showingFrom = total === 0 ? 0 : startIndex + 1;
  const showingTo = startIndex + pageRows.length;

  const goto = (p: number) => setPage(Math.min(Math.max(1, p), maxPage));

  // 40x40 placeholder image for the attachment column
  const attachmentThumb =
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=200&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4 md:p-6">
      {/* Card */}
      <div className="mx-auto max-w-[1400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl text-white">
        {/* Header */}
        <div className="px-4 md:px-6 pt-5">
          <h2 className="text-lg md:text-xl font-semibold">Attachment Flow List</h2>

          {/* Tabs */}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setActiveTab("Pending");
                setPage(1);
              }}
              className={`${pillBase} ${
                activeTab === "Pending"
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => {
                setActiveTab("Forwarded");
                setPage(1);
              }}
              className={`${pillBase} ${
                activeTab === "Forwarded"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
              }`}
            >
              Forwarded
            </button>
            <button
              onClick={() => {
                setActiveTab("My");
                setPage(1);
              }}
              className={`${pillBase} ${
                activeTab === "My"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-indigo-100 text-indigo-700 border-indigo-300 hover:bg-indigo-200"
              }`}
            >
              My
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
            <label className="text-white/80">Search:</label>
            <input
              className="h-9 w-64 max-w-full rounded-md border border-white/20 bg-white/10 text-white px-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder=""
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-3 md:px-5 pb-4">
          <div className="overflow-x-auto rounded-2xl border border-white/20">
            <table className="w-full border-collapse overflow-hidden rounded-2xl">
              <thead>
                <tr className="bg-teal-600 text-white text-sm">
                  {[
                    "#",
                    "Attachment",
                    "Created By",
                    "Forwarded By",
                    "Forward Date",
                    "Remark",
                    "Forward To",
                    "Status",
                    "Action",
                  ].map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border border-white/20 px-3 py-2 text-left"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageRows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="text-center text-white/80 border border-white/20 px-3 py-6 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900"
                    >
                      No data available in table
                    </td>
                  </tr>
                ) : (
                  pageRows.map((r, idx) => (
                    <tr
                      key={r.id}
                      className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors text-sm text-white"
                    >
                      {/* # */}
                      <td className="border border-white/20 px-3 py-2">
                        {startIndex + idx + 1}
                      </td>

                      {/* Attachment (40x40 image) */}
                      <td className="border border-white/20 px-3 py-2">
                        <img
                          src={attachmentThumb}
                          alt="attachment"
                          className="w-10 h-10 rounded-md object-cover"
                        />
                      </td>

                      {/* Created By */}
                      <td className="border border-white/20 px-3 py-2">
                        {r.createdBy}, ()
                      </td>

                      {/* Forwarded By */}
                      <td className="border border-white/20 px-3 py-2">{r.forwardedBy}</td>

                      {/* Forward Date */}
                      <td className="border border-white/20 px-3 py-2 whitespace-nowrap">
                        {r.forwardDate}
                      </td>

                      {/* Remark */}
                      <td className="border border-white/20 px-3 py-2">{r.remark || ""}</td>

                      {/* Forward To */}
                      <td className="border border-white/20 px-3 py-2">{r.forwardTo}</td>

                      {/* Status */}
                      <td className="border border-white/20 px-3 py-2">
                        <span className="text-amber-400 font-semibold">Pending</span>
                      </td>

                      {/* Action */}
                      <td className="border border-white/20 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <button
                            className={`${btnBase} bg-blue-600 text-white hover:bg-blue-700`}
                          >
                            Attach File
                          </button>
                          <button
                            className={`${btnBase} bg-teal-600 text-white hover:bg-teal-700`}
                          >
                            Forward
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
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
            <p className="text-white">
              Showing {showingFrom} to {showingTo} of {total} entries
            </p>

            <div className="flex items-center gap-1">
              <button
                className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                onClick={() => goto(page - 1)}
                disabled={pageSafe === 1}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: maxPage }).map((_, i) => {
                const p = i + 1;
                const active = p === pageSafe;
                return (
                  <button
                    key={p}
                    onClick={() => goto(p)}
                    className={`h-9 min-w-9 px-3 rounded-md border ${
                      active
                        ? "bg-teal-600 text-white border-teal-600"
                        : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}

              <button
                className="h-9 w-9 grid place-items-center rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                onClick={() => goto(page + 1)}
                disabled={pageSafe === maxPage}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignWorkFlow;


