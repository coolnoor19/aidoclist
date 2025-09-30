import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";

interface Wing {
  id: number;
  name: string;
}

const AddWings: React.FC = () => {
  const [wings, setWings] = useState<Wing[]>([]);
  const [wingName, setWingName] = useState("");
  const [loading] = useState(false);

  // Add Wing (local)
  const handleAddWing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wingName.trim()) return;

    const newWing: Wing = { id: wings.length + 1, name: wingName.trim() };
    setWings((prev) => [...prev, newWing]);
    setWingName("");
  };

  // Delete Wing (local)
  const handleDelete = (id: number) => {
    setWings((prev) => prev.filter((w) => w.id !== id));
  };

  // (Optional) Edit stub
  const handleEdit = (id: number) => {
    const current = wings.find((w) => w.id === id);
    if (!current) return;
    const name = prompt("Edit wing name:", current.name);
    if (name && name.trim()) {
      setWings((prev) =>
        prev.map((w) => (w.id === id ? { ...w, name: name.trim() } : w))
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">➕ Add Wings</h2>

        {/* Form */}
        <form
          onSubmit={handleAddWing}
          className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-6 md:p-8"
        >
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-white">
              Wings <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={wingName}
              onChange={(e) => setWingName(e.target.value)}
              placeholder="Enter wing name..."
              className="border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="self-start md:self-end px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition cursor-pointer"
          >
            Add
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm rounded-lg overflow-hidden border border-white/20 border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-3 py-2 border border-white/20 text-left">Sl. No.</th>
                <th className="px-3 py-2 border border-white/20 text-left">Wings</th>
                <th className="px-3 py-2 border border-white/20 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-white">
              {loading ? (
                <tr>
                  <td colSpan={3} className="text-center py-4 border border-white/20">
                    Loading...
                  </td>
                </tr>
              ) : wings.length > 0 ? (
                wings.map((wing, index) => (
                  <tr
                    key={wing.id}
                    className="odd:bg-white/5 even:bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    <td className="px-3 py-2 border border-white/20">{index + 1}</td>
                    <td className="px-3 py-2 border border-white/20">{wing.name}</td>
                    <td className="px-3 py-2 border border-white/20">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleEdit(wing.id)}
                          className="p-1 rounded hover:bg-white/10 cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(wing.id)}
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
                  <td colSpan={3} className="text-center py-4 border border-white/20">
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
          <p className="text-sm text-white">
            Showing {wings.length > 0 ? 1 : 0} to {wings.length} of {wings.length} entries
          </p>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 border border-white/20 rounded hover:bg-white/10">←</button>
            <button className="px-3 py-1 bg-teal-600 text-white rounded">1</button>
            <button className="px-2 py-1 border border-white/20 rounded hover:bg-white/10">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWings;

