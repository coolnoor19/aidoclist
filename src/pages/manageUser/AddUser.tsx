// import React, { useState } from "react";

// const AddUserForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     fullName: "",
//     mobile: "",
//     email: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     wings: "",
//     roleType: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Add New User</h2>

//       {/* Note */}
//       <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-6">
//         <p>
//           <strong>Note:</strong> First you add wings and assign roles before you
//           add new user.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Username */}
//         <div>
//           <label className="block font-medium">
//             Username <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Full Name */}
//         <div>
//           <label className="block font-medium">
//             Full Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Mobile No */}
//         <div>
//           <label className="block font-medium">
//             Mobile No <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Email Id */}
//         <div>
//           <label className="block font-medium">
//             Email Id <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Gender */}
//         <div>
//           <label className="block font-medium">
//             Gender <span className="text-red-500">*</span>
//           </label>
//           <div className="flex space-x-4 mt-2">
//             {["Male", "Female", "Other"].map((g) => (
//               <label key={g} className="flex items-center space-x-1">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value={g}
//                   checked={formData.gender === g}
//                   onChange={handleChange}
//                 />
//                 <span>{g}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block font-medium">
//             Password <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block font-medium">
//             Confirm Password <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>

//         {/* Wings */}
//         <div>
//           <label className="block font-medium">
//             Wings <span className="text-red-500">*</span>
//           </label>
//           <select
//             name="wings"
//             value={formData.wings}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           >
//             <option value="">---- Select Wings Name ----</option>
//             <option value="wing1">Wing 1</option>
//             <option value="wing2">Wing 2</option>
//           </select>
//         </div>

//         {/* Roles Type */}
//         <div>
//           <label className="block font-medium">
//             Roles Type <span className="text-red-500">*</span>
//           </label>
//           <select
//             name="roleType"
//             value={formData.roleType}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           >
//             <option value="">---- Select Roles Name ----</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>

//         {/* Submit */}
//         <div className="md:col-span-3 flex justify-center mt-4">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;

import React, { useState } from "react";

const AddUserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    mobile: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    wings: "",
    roleType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Add New User</h2>

        {/* Note */}
        <div className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl mb-6">
          <p>
            <strong>Note:</strong> First add <b>wings</b> and assign <b>roles</b> before you add a new user.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Username */}
          <div>
            <label className="block font-medium text-white mb-1">
              Username <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter username"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block font-medium text-white mb-1">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter full name"
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block font-medium text-white mb-1">
              Mobile No <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Email Id */}
          <div>
            <label className="block font-medium text-white mb-1">
              Email Id <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter email address"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium text-white mb-1">
              Gender <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-4 mt-2 text-white">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="accent-teal-500"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-white mb-1">
              Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium text-white mb-1">
              Confirm Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Re-enter password"
            />
          </div>

          {/* Wings */}
          <div>
            <label className="block font-medium text-white mb-1">
              Wings <span className="text-red-400">*</span>
            </label>
            <select
              name="wings"
              value={formData.wings}
              onChange={handleChange}
              className="select-dark w-full border border-white/20 bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">---- Select Wings Name ----</option>
              <option value="wing1">Wing 1</option>
              <option value="wing2">Wing 2</option>
            </select>
          </div>

          {/* Roles Type */}
          <div>
            <label className="block font-medium text-white mb-1">
              Roles Type <span className="text-red-400">*</span>
            </label>
            <select
              name="roleType"
              value={formData.roleType}
              onChange={handleChange}
              className="select-dark w-full border border-white/20 bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">---- Select Roles Name ----</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-3 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-lg shadow transition cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
  