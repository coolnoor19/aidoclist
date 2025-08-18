import React, { useState } from "react";

export default function AddDocumentForm() {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !files) {
      alert("Please select a category and upload files");
      return;
    }
    alert(`Uploaded ${files.length} file(s) to category: ${category}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg bg-white/20 border border-white/30 text-white px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
            >
              <option value="">Choose category</option>
              <option value="finance">Finance</option>
              <option value="legal">Legal</option>
              <option value="hr">HR</option>
            </select>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Upload Files
            </label>
            <div className="border-2 border-dashed border-white/30 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-teal-400 transition">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />
              <label
                htmlFor="fileUpload"
                className="text-white/80 cursor-pointer"
              >
                Drag & Drop or <span className="text-teal-300">Browse</span>
              </label>
              {files && (
                <p className="mt-3 text-sm text-teal-200">
                  {files.length} file(s) selected
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-lg font-semibold">
            Quick Cloud Upload
          </h2>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 hover:bg-teal-500/60 transition"
          >
            <span>📂</span> Upload from Google Drive
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 hover:bg-teal-500/60 transition"
          >
            <span>☁️</span> Upload from Dropbox
          </button>

          <button
            type="submit"
            className="mt-auto w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 shadow-lg transition"
          >
            Upload Documents
          </button>
        </div>
      </form>
    </div>
  );
}

