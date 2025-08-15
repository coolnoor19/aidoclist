import React, { useState, useEffect } from "react";

interface Wing {
  id: number;
  name: string;
}

const AddWings: React.FC = () => {
  const [wings, setWings] = useState<Wing[]>([]);
  const [wingName, setWingName] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch wings from API
  const fetchWings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/wings"); // Replace with your backend URL
      if (!res.ok) throw new Error("Failed to fetch wings");
      const data = await res.json();
      setWings(data);
    } catch (error) {
      console.error("Error fetching wings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWings();
  }, []);

  // Handle Add Wing
  const handleAddWing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wingName.trim()) return;

    try {
      const res = await fetch("/api/wings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: wingName }),
      });
      if (!res.ok) throw new Error("Failed to add wing");

      setWingName(""); // Clear input
      fetchWings(); // Refresh list
    } catch (error) {
      console.error("Error adding wing:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/wings/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete wing");
      fetchWings();
    } catch (error) {
      console.error("Error deleting wing:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">➕ Add Wings</h2>

      {/* Form */}
      <form
        onSubmit={handleAddWing}
        className="flex flex-col md:flex-row gap-3 mb-6"
      >
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium text-gray-700">
            Wings <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={wingName}
            onChange={(e) => setWingName(e.target.value)}
            placeholder="Enter wing name..."
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="self-start md:self-end px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>

      {/* Table */}
      <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-3 py-2 border">Sl. No.</th>
            <th className="px-3 py-2 border">Wings</th>
            <th className="px-3 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} className="text-center py-4">
                Loading...
              </td>
            </tr>
          ) : wings.length > 0 ? (
            wings.map((wing, index) => (
              <tr key={wing.id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border">{index + 1}</td>
                <td className="px-3 py-2 border">{wing.name}</td>
                <td className="px-3 py-2 border text-center">
                  <button
                    onClick={() => handleDelete(wing.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="text-center py-4 text-gray-500 border"
              >
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-3">
        <p className="text-sm text-gray-600">
          Showing {wings.length > 0 ? 1 : 0} to {wings.length} of {wings.length}{" "}
          entries
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

export default AddWings;
