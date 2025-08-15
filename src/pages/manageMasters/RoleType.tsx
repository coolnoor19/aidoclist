import React, { useState, useEffect } from "react";

interface RoleTypeData {
  id: number;
  wing: string;
  roleType: string;
}

interface Wing {
  id: number;
  name: string;
}

const RoleType: React.FC = () => {
  const [wings, setWings] = useState<Wing[]>([]);
  const [form, setForm] = useState({ wing: "", roleType: "" });
  const [data, setData] = useState<RoleTypeData[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch wings
  useEffect(() => {
    const fetchWings = async () => {
      try {
        const res = await fetch("/api/wings");
        const result = await res.json();
        setWings(result);
      } catch (error) {
        console.error("Error fetching wings:", error);
      }
    };
    fetchWings();
  }, []);

  // Fetch role types
  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/role-types");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Handle input changes (generic for any field)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Save role type
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    if (!form.wing || !form.roleType.trim()) return;

    try {
      const res = await fetch("/api/role-types", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        fetchRoles();
        setForm({ wing: "", roleType: "" }); // reset form
      }
    } catch (error) {
      console.error("Error saving role:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Role Type</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
          Add Wings
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wings <span className="text-red-500">*</span>
          </label>
          <select
            name="wing"
            value={form.wing}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Roles Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="roleType"
            value={form.roleType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter role type"
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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-3 py-2 border">Sl.No.</th>
              <th className="px-3 py-2 border">Wings</th>
              <th className="px-3 py-2 border">Roles Type</th>
              <th className="px-3 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{index + 1}</td>
                  <td className="px-3 py-2 border">{item.wing}</td>
                  <td className="px-3 py-2 border">{item.roleType}</td>
                  <td className="px-3 py-2 border">
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleType;
