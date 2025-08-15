import React, { useState } from "react";
import { SiGoogledrive, SiDropbox } from "react-icons/si";

type FormData = {
  category: string;
  files: File[];
};

const AddDocumentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Root",
    files: [],
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...newFiles].slice(0, 10), // Only keep up to 10 files
    }));
  }
};

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.dataTransfer.files)],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6"
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Add Single/Bulk Document
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-5">
            {/* Document Category */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Document Category <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <select
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 flex-1"
                >
                  <option>Root</option>
                  <option>Finance</option>
                  <option>HR</option>
                  <option>IT</option>
                </select>
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                >
                  Add Document Category
                </button>
              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Upload Single/Bulk Document{" "}
                <span className="text-red-500">*</span>
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-blue-400 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 transition"
              >
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".png,.jpg,.jpeg,.pdf,.pptx,.docx"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <p className="text-gray-600">
                    Drop files here or{" "}
                    <span className="text-blue-600 underline">click</span> to
                    upload
                  </p>
                </label>
              </div>

              {/* Info text */}
              <p className="text-xs text-red-500">
                Up to 10 files can be uploaded. For more than 10 files, please
                use bulk upload.
              </p>
              <p className="text-xs text-red-500">
                Max file size: 10MB. Allowed extensions: PNG, JPG, JPEG, PDF,
                PPTX, DOCX. No Excel files allowed.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center border-l border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Upload files from drives
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="p-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600"
              >
                <SiGoogledrive size={24} />
              </button>
              <button
                type="button"
                className="p-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
              >
                <SiDropbox size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="reset"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDocumentForm;
