
// // src/pages/UserHistory.tsx
// import React, { useMemo, useState } from "react";
// import {
//   Menu, X, ChevronRight, Search, Trash2, Eye, FileText,
//   ShieldCheck, ShieldAlert, Building2, Mail, User as UserIcon,
//   Lock, RefreshCcw, UploadCloud, Layers
// } from "lucide-react";

// type Doc = {
//   id: number;
//   fileName: string;
//   category: string;
//   uploadedAt: string;
//   pages: number;
//   sizeMB: number;
//   active: boolean;
// };

// type UserInfo = {
//   username: string;
//   email: string;
//   org: string;
//   passwordMasked: string;
//   active: boolean;
// };

// const initialDocs: Doc[] = [
//   { id: 1, fileName: "invoice-9842.pdf", category: "Invoices", uploadedAt: "2025-08-18 09:21", pages: 3,  sizeMB: 0.9, active: true  },
//   { id: 2, fileName: "policy-update.docx", category: "Policies", uploadedAt: "2025-08-11 13:40", pages: 12, sizeMB: 2.1, active: true  },
//   { id: 3, fileName: "contract-ACME.pdf", category: "Contracts", uploadedAt: "2025-08-02 18:03", pages: 7,  sizeMB: 1.2, active: false },
// ];

// export default function UserHistory() {
//   const [isOpen, setIsOpen] = useState(true);           // sidebar
//   const [tab, setTab] = useState<"overview"|"documents"|"security">("overview");
//   const [query, setQuery] = useState("");
//   const [docs, setDocs] = useState<Doc[]>(initialDocs);

//   const [user, setUser] = useState<UserInfo>({
//     username: "soniya",
//     email: "soniya@example.com",
//     org: "AIDoc Systems",
//     passwordMasked: "••••••••",
//     active: true,
//   });

//   const totals = useMemo(() => {
//     const size = docs.reduce((s, d) => s + d.sizeMB, 0);
//     const pages = docs.reduce((s, d) => s + d.pages, 0);
//     return { size, pages };
//   }, [docs]);

//   const filteredDocs = useMemo(() => {
//     if (!query.trim()) return docs;
//     const q = query.toLowerCase();
//     return docs.filter(d =>
//       d.fileName.toLowerCase().includes(q) ||
//       d.category.toLowerCase().includes(q) ||
//       d.uploadedAt.toLowerCase().includes(q)
//     );
//   }, [docs, query]);

//   const toggleDocActive = (id: number) =>
//     setDocs(prev => prev.map(d => d.id === id ? { ...d, active: !d.active } : d));

//   const deleteDoc = (id: number) =>
//     setDocs(prev => prev.filter(d => d.id !== id));

//   const resetPassword = () => {
//     // demo – you can hook to your API here
//     alert("Password reset link sent to: " + user.email);
//   };

//   const toggleUserActive = () =>
//     setUser(prev => ({ ...prev, active: !prev.active }));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black text-white overflow-hidden">
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-blue-800 via-gray-900 to-gray-950 shadow-xl transition-[width] duration-500 ease-in-out z-40 ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
//       >
//         <div className="h-full flex flex-col p-6 space-y-6">
//           <h2 className="text-2xl font-bold text-blue-400">📊 User History</h2>

//           <NavItem
//             label="Overview"
//             icon={<ChevronRight size={16} />}
//             active={tab === "overview"}
//             onClick={() => setTab("overview")}
//           />
//           <NavItem
//             label="Documents"
//             icon={<ChevronRight size={16} />}
//             active={tab === "documents"}
//             onClick={() => setTab("documents")}
//           />
//           <NavItem
//             label="Account Security"
//             icon={<ChevronRight size={16} />}
//             active={tab === "security"}
//             onClick={() => setTab("security")}
//           />

//           <div className="mt-auto text-xs text-white/60">
//             v1.0 · modern classy dashboard
//           </div>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className={`transition-all duration-500 ease-in-out p-6 md:p-10 ${isOpen ? "ml-64" : "ml-0"}`}>
//         {/* Top bar */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg shadow-lg transition-all"
//               aria-label="Toggle sidebar"
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//             <h1 className="text-2xl font-semibold">User History</h1>
//           </div>

//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <div className="relative flex-1 md:flex-none">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={16} />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search documents, categories, date…"
//                 className="w-full md:w-96 bg-white/10 border border-white/20 rounded-full pl-9 pr-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         {tab === "overview" && (
//           <section className="space-y-6">
//             {/* User summary */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
//                 <h3 className="text-lg font-semibold mb-4">Profile</h3>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <InfoRow icon={<UserIcon size={16} />} label="Username" value={user.username} />
//                   <InfoRow icon={<Mail size={16} />} label="Email" value={user.email} />
//                   <InfoRow icon={<Building2 size={16} />} label="Organization" value={user.org} />
//                   <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
//                     <div className="flex items-center gap-2">
//                       <Lock size={16} className="text-white/80" />
//                       <span className="text-white/80 text-sm">Password</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-white/90">{user.passwordMasked}</span>
//                       <button
//                         onClick={resetPassword}
//                         className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-teal-300 text-sm"
//                       >
//                         Reset
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
//                     <div className="flex items-center gap-2">
//                       {user.active ? (
//                         <ShieldCheck size={16} className="text-green-400" />
//                       ) : (
//                         <ShieldAlert size={16} className="text-red-400" />
//                       )}
//                       <span className="text-white/80 text-sm">Account Status</span>
//                     </div>
//                     <button
//                       onClick={toggleUserActive}
//                       className={`px-3 py-1.5 rounded-lg text-sm ${user.active ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"} hover:opacity-90`}
//                     >
//                       {user.active ? "Active" : "Inactive"}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-1 gap-6">
//                 <StatCard
//                   title="Total MB Uploaded"
//                   value={`${totals.size.toFixed(2)} MB`}
//                   icon={<UploadCloud />}
//                 />
//                 <StatCard title="Total Pages Uploaded" value={totals.pages.toString()} icon={<Layers />} />
//               </div>
//             </div>

//             {/* Quick docs peek */}
//             <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
//               <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>
//               <DocsTable docs={filteredDocs.slice(0, 5)} onToggle={toggleDocActive} onDelete={deleteDoc} compact />
//             </div>
//           </section>
//         )}

//         {tab === "documents" && (
//           <section className="space-y-6">
//             <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
//                 <h3 className="text-lg font-semibold">Documents</h3>
//                 <div className="text-sm text-white/70">
//                   {filteredDocs.length} of {docs.length} shown
//                 </div>
//               </div>
//               <DocsTable docs={filteredDocs} onToggle={toggleDocActive} onDelete={deleteDoc} />
//             </div>
//           </section>
//         )}

//         {tab === "security" && (
//           <section className="space-y-6">
//             <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
//               <h3 className="text-lg font-semibold mb-4">Security & Activity</h3>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="bg-white/5 border border-white/10 rounded-xl p-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80 text-sm">Last Password Reset</span>
//                     <RefreshCcw size={16} className="text-white/60" />
//                   </div>
//                   <p className="mt-2 text-white/90">Never</p>
//                   <button
//                     onClick={resetPassword}
//                     className="mt-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm"
//                   >
//                     Send Reset Link
//                   </button>
//                 </div>

//                 <div className="bg-white/5 border border-white/10 rounded-xl p-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80 text-sm">Active Sessions</span>
//                     <FileText size={16} className="text-white/60" />
//                   </div>
//                   <p className="mt-2 text-white/90">This device · Chrome · Today 09:12</p>
//                   <p className="text-white/60 text-sm">Revoke others in settings.</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }

// /* ---------- Subcomponents ---------- */

// function NavItem({
//   label,
//   icon,
//   active,
//   onClick,
// }: {
//   label: string;
//   icon: React.ReactNode;
//   active?: boolean;
//   onClick?: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg transition ${
//         active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
//       }`}
//     >
//       <span>{label}</span>
//       {icon}
//     </button>
//   );
// }

// function InfoRow({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
//       <div className="flex items-center gap-2">
//         <span className="text-white/80">{icon}</span>
//         <span className="text-white/80 text-sm">{label}</span>
//       </div>
//       <span className="text-white/90">{value}</span>
//     </div>
//   );
// }

// function StatCard({
//   title,
//   value,
//   icon,
// }: {
//   title: string;
//   value: string;
//   icon: React.ReactNode;
// }) {
//   return (
//     <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-5 shadow-lg">
//       <div className="flex items-center justify-between">
//         <h4 className="text-sm font-semibold">{title}</h4>
//         <div className="p-2 rounded-lg bg-white/10">{icon}</div>
//       </div>
//       <div className="mt-3 text-3xl font-bold">{value}</div>
//     </div>
//   );
// }

// function DocsTable({
//   docs,
//   onToggle,
//   onDelete,
//   compact = false,
// }: {
//   docs: Doc[];
//   onToggle: (id: number) => void;
//   onDelete: (id: number) => void;
//   compact?: boolean;
// }) {
//   return (
//     <div className="overflow-x-auto rounded-2xl shadow-md">
//       <table className="w-full text-sm border border-white/20 rounded-2xl overflow-hidden border-collapse">
//         <thead>
//           <tr className="bg-teal-600 text-white text-left">
//             {[
//               "Sl.No.",
//               "File Name",
//               "Category",
//               "Uploaded",
//               "Pages",
//               "Size",
//               "Status",
//               "Actions",
//             ].map((h) => (
//               <th key={h} className="px-4 py-3 border border-white/20">
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="text-white">
//           {docs.length === 0 ? (
//             <tr>
//               <td colSpan={8} className="text-center py-8 text-white/70">
//                 No data available in table
//               </td>
//             </tr>
//           ) : (
//             docs.map((d, idx) => (
//               <tr
//                 key={d.id}
//                 className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
//               >
//                 <td className="px-4 py-3 border border-white/20">{idx + 1}</td>
//                 <td className="px-4 py-3 border border-white/20">{d.fileName}</td>
//                 <td className="px-4 py-3 border border-white/20">{d.category}</td>
//                 <td className="px-4 py-3 border border-white/20">{d.uploadedAt}</td>
//                 <td className="px-4 py-3 border border-white/20">{d.pages}</td>
//                 <td className="px-4 py-3 border border-white/20">{d.sizeMB.toFixed(2)} MB</td>
//                 <td className="px-4 py-3 border border-white/20">
//                   <span
//                     className={`px-2 py-1 rounded-md text-xs ${
//                       d.active ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
//                     }`}
//                   >
//                     {d.active ? "Active" : "Inactive"}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 border border-white/20">
//                   <div className={`flex ${compact ? "gap-2" : "gap-3"} flex-wrap`}>
//                     <button className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/15">
//                       <Eye size={16} /> View
//                     </button>
//                     <button
//                       onClick={() => onToggle(d.id)}
//                       className={`inline-flex items-center gap-1 px-2 py-1 rounded ${
//                         d.active
//                           ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
//                           : "bg-red-500/20 text-red-300 hover:bg-red-500/30"
//                       }`}
//                     >
//                       {d.active ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}
//                       {d.active ? "Deactivate" : "Activate"}
//                     </button>
//                     <button
//                       onClick={() => onDelete(d.id)}
//                       className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-red-300 hover:bg-white/15"
//                     >
//                       <Trash2 size={16} /> Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useMemo, useState } from "react";
import {
  Search, Trash2, Eye, FileText,
  ShieldCheck, ShieldAlert, Building2, Mail, User as UserIcon,
  Lock, RefreshCcw, UploadCloud, Layers
} from "lucide-react";

/* ---------- Types & Seed Data ---------- */
type Doc = {
  id: number;
  fileName: string;
  category: string;
  uploadedAt: string;
  pages: number;
  sizeMB: number;
  active: boolean;
};
type UserInfo = {
  username: string;
  email: string;
  org: string;
  passwordMasked: string;
  active: boolean;
};
const initialDocs: Doc[] = [
  { id: 1, fileName: "invoice-9842.pdf",   category: "Invoices",  uploadedAt: "2025-08-18 09:21", pages: 3,  sizeMB: 0.9, active: true  },
  { id: 2, fileName: "policy-update.docx", category: "Policies",  uploadedAt: "2025-08-11 13:40", pages: 12, sizeMB: 2.1, active: true  },
  { id: 3, fileName: "contract-ACME.pdf",  category: "Contracts", uploadedAt: "2025-08-02 18:03", pages: 7,  sizeMB: 1.2, active: false },
];

/* ---------- Page ---------- */
export default function UserHistory() {
  const [tab, setTab] = useState<"overview" | "documents" | "security">("overview");
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<Doc[]>(initialDocs);

  const [user, setUser] = useState<UserInfo>({
    username: "soniya",
    email: "soniya@example.com",
    org: "AIDoc Systems",
    passwordMasked: "••••••••",
    active: true,
  });

  const totals = useMemo(() => {
    const size = docs.reduce((s, d) => s + d.sizeMB, 0);
    const pages = docs.reduce((s, d) => s + d.pages, 0);
    return { size, pages };
  }, [docs]);

  const filteredDocs = useMemo(() => {
    if (!query.trim()) return docs;
    const q = query.toLowerCase();
    return docs.filter(d =>
      d.fileName.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.uploadedAt.toLowerCase().includes(q)
    );
  }, [docs, query]);

  const toggleDocActive = (id: number) =>
    setDocs(prev => prev.map(d => (d.id === id ? { ...d, active: !d.active } : d)));
  const deleteDoc = (id: number) => setDocs(prev => prev.filter(d => d.id !== id));
  const resetPassword = () => alert("Password reset link sent to: " + user.email);
  const toggleUserActive = () => setUser(prev => ({ ...prev, active: !prev.active }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-gray-800 to-black text-white">
      {/* SAFE TOP OFFSET for fixed navbar */}
      <div className="pt-24 md:pt-28 pb-16">
        {/* Centered page container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top bar with tabs + search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h1 className="text-2xl font-semibold">User History</h1>

            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-end w-full lg:w-auto">
              <div className="inline-flex rounded-xl overflow-hidden border border-white/15 self-start">
                {(["overview", "documents", "security"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 text-sm transition ${
                      tab === t
                        ? "bg-white/15 text-white"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {t === "overview" ? "Overview" : t === "documents" ? "Documents" : "Security"}
                  </button>
                ))}
              </div>

              <div className="relative md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search documents, categories, date…"
                  className="w-full bg-white/10 border border-white/20 rounded-full pl-9 pr-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          {tab === "overview" && (
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile */}
                <div className="lg:col-span-2 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
                  <h3 className="text-lg font-semibold mb-4">Profile</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InfoRow icon={<UserIcon size={16} />} label="Username" value={user.username} />
                    <InfoRow icon={<Mail size={16} />} label="Email" value={user.email} />
                    <InfoRow icon={<Building2 size={16} />} label="Organization" value={user.org} />

                    <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <Lock size={16} className="text-white/80" />
                        <span className="text-white/80 text-sm">Password</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/90">{user.passwordMasked}</span>
                        <button
                          onClick={resetPassword}
                          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-teal-300 text-sm"
                        >
                          Reset
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        {user.active ? (
                          <ShieldCheck size={16} className="text-green-400" />
                        ) : (
                          <ShieldAlert size={16} className="text-red-400" />
                        )}
                        <span className="text-white/80 text-sm">Account Status</span>
                      </div>
                      <button
                        onClick={toggleUserActive}
                        className={`px-3 py-1.5 rounded-lg text-sm ${
                          user.active ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
                        } hover:opacity-90`}
                      >
                        {user.active ? "Active" : "Inactive"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-6">
                  <StatCard title="Total MB Uploaded" value={`${totals.size.toFixed(2)} MB`} icon={<UploadCloud />} />
                  <StatCard title="Total Pages Uploaded" value={totals.pages.toString()} icon={<Layers />} />
                </div>
              </div>

              {/* Recent Documents */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
                <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>
                <DocsTable docs={filteredDocs.slice(0, 5)} onToggle={toggleDocActive} onDelete={deleteDoc} compact />
              </div>
            </section>
          )}

          {tab === "documents" && (
            <section className="space-y-8">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold">Documents</h3>
                  <div className="text-sm text-white/70">
                    {filteredDocs.length} of {docs.length} shown
                  </div>
                </div>
                <DocsTable docs={filteredDocs} onToggle={toggleDocActive} onDelete={deleteDoc} />
              </div>
            </section>
          )}

          {tab === "security" && (
            <section className="space-y-8">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
                <h3 className="text-lg font-semibold mb-4">Security & Activity</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">Last Password Reset</span>
                      <RefreshCcw size={16} className="text-white/60" />
                    </div>
                    <p className="mt-2 text-white/90">Never</p>
                    <button
                      onClick={resetPassword}
                      className="mt-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm"
                    >
                      Send Reset Link
                    </button>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">Active Sessions</span>
                      <FileText size={16} className="text-white/60" />
                    </div>
                    <p className="mt-2 text-white/90">This device · Chrome · Today 09:12</p>
                    <p className="text-white/60 text-sm">Revoke others in settings.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Subcomponents ---------- */
function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-white/80">{icon}</span>
        <span className="text-white/80 text-sm">{label}</span>
      </div>
      <span className="text-white/90">{value}</span>
    </div>
  );
}
function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-teal-600 via-gray-600 to-gray-600 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="p-2 rounded-lg bg-white/10">{icon}</div>
      </div>
      <div className="mt-3 text-3xl font-bold">{value}</div>
    </div>
  );
}
function DocsTable({
  docs, onToggle, onDelete, compact = false,
}: { docs: Doc[]; onToggle: (id: number) => void; onDelete: (id: number) => void; compact?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-md">
      <table className="w-full text-sm border border-white/20 rounded-2xl overflow-hidden border-collapse">
        <thead>
          <tr className="bg-teal-600 text-white text-left">
            {["Sl.No.", "File Name", "Category", "Uploaded", "Pages", "Size", "Status", "Actions"].map((h) => (
              <th key={h} className="px-4 py-3 border border-white/20">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-white">
          {docs.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center py-8 text-white/70">No data available in table</td>
            </tr>
          ) : (
            docs.map((d, idx) => (
              <tr key={d.id} className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors">
                <td className="px-4 py-3 border border-white/20">{idx + 1}</td>
                <td className="px-4 py-3 border border-white/20">{d.fileName}</td>
                <td className="px-4 py-3 border border-white/20">{d.category}</td>
                <td className="px-4 py-3 border border-white/20">{d.uploadedAt}</td>
                <td className="px-4 py-3 border border-white/20">{d.pages}</td>
                <td className="px-4 py-3 border border-white/20">{d.sizeMB.toFixed(2)} MB</td>
                <td className="px-4 py-3 border border-white/20">
                  <span className={`px-2 py-1 rounded-md text-xs ${d.active ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                    {d.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3 border border-white/20">
                  <div className={`flex ${compact ? "gap-2" : "gap-3"} flex-wrap`}>
                    <button className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/15">
                      <Eye size={16} /> View
                    </button>
                    <button
                      onClick={() => onToggle(d.id)}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded ${
                        d.active ? "bg-green-500/20 text-green-300 hover:bg-green-500/30" : "bg-red-500/20 text-red-300 hover:bg-red-500/30"
                      }`}
                    >
                      {d.active ? "Deactivate" : "Activate"}
                    </button>
                    <button onClick={() => onDelete(d.id)} className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-red-300 hover:bg-white/15">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}


