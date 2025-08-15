import React, { useState } from "react";

type DocumentFilters = {
  project: string;
  customer: string;
  wings: string;
  keyword: string;
};

const DocumentsList: React.FC = () => {
  const [filters, setFilters] = useState<DocumentFilters>({
    project: "",
    customer: "",
    wings: "",
    keyword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with filters:", filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-4 md:p-6"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            Documents List
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              name="project"
              value={filters.project}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
            </select>

            <select
              name="customer"
              value={filters.customer}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Customer</option>
              <option value="customer1">Customer 1</option>
              <option value="customer2">Customer 2</option>
            </select>

            <select
              name="wings"
              value={filters.wings}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Wings</option>
              <option value="wing1">Wing 1</option>
              <option value="wing2">Wing 2</option>
            </select>

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Document
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Search By Keywords"
            name="keyword"
            value={filters.keyword}
            onChange={handleChange}
            className="flex-1 border rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["All(0)", "Root(0)", "whatsapp(0)"].map((label) => (
            <button
              key={label}
              type="button"
              className={`px-3 py-1 rounded-full border text-sm ${
                label === "All(0)"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
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
                  "Action",
                ].map((header) => (
                  <th key={header} className="px-3 py-2 border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={10}
                  className="text-center text-gray-500 py-4 border"
                >
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-3 text-sm text-gray-500">
          Showing 0 to 0 of 0 entries
        </div>
      </form>
    </div>
  );
};

export default DocumentsList;
