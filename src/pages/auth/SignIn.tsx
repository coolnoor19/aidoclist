// import { useState } from "react";

// type FormState = {
//   username: string;
//   email: string;
//   password: string;
//   agree: boolean;
// };

// export default function SignIn() {
//   const [showPwd, setShowPwd] = useState(false);
//   const [form, setForm] = useState<FormState>({
//     username: "",
//     email: "",
//     password: "",
//     agree: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, type } = e.target;
//     const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // handle sign in here (API call)
//     console.log(form);
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black">
//       {/* Card */}
//       <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-7 space-y-6 ">
//         {/* Brand */}
//         <div className="flex items-center gap-2">
//           <div className="h-8 w-8 rounded-lg bg-brand-500 grid place-items-center text-white font-bold">
            
//           </div>
//           <div className="text-2xl font-semibold text-white">SIGN IN</div>
//         </div>

//         {/* Heading */}
//         <div className="space-y-1">
//           <h1 className="text-xl font-semibold text-white">
//             Adventure starts here <span aria-hidden>🚀</span>
//           </h1>
//           <p className="text-sm text-white">
//             Make your app management easy and fun!
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={onSubmit} className="space-y-4">
//           {/* Username */}
//           {/* <div>
//             <label htmlFor="username" className="block text-xs font-medium text-white tracking-wide">
//               USERNAME
//             </label>
//             <input
//               id="username"
//               name="username"
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Enter your username"
//               autoComplete="username"
//               className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
//               required
//             />
//           </div> */}

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-xs font-medium text-white tracking-wide">
//               EMAIL/OTP
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               autoComplete="email"
//               className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="block text-xs font-medium text-white tracking-wide">
//               PASSWORD
//             </label>
//             <div className="mt-1 relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPwd ? "text" : "password"}
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 autoComplete="current-password"
//                 className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPwd((s) => !s)}
//                 aria-label={showPwd ? "Hide password" : "Show password"}
//                 aria-pressed={showPwd}
//                 className="absolute inset-y-0 right-0 px-3 grid place-items-center text-gray-500 hover:text-gray-700"
//               >
//                 {showPwd ? (
//                   /* eye-off */
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
//                        stroke="currentColor" className="h-5 w-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
//                           d="M3 3l18 18M10.584 10.588a3 3 0 104.243 4.243M9.88 4.637A9.706 9.706 0 0112 4.5c5.523 0 9.5 5.25 9.5 7.5-.252.914-1.61 3.067-4.21 4.86M6.07 6.07C3.88 7.61 2.5 9.77 2.5 12c0 2.25 3.977 7.5 9.5 7.5 1.093 0 2.14-.18 3.12-.514"/>
//                   </svg>
//                 ) : (
//                   /* eye */
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
//                        stroke="currentColor" className="h-5 w-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
//                           d="M2.5 12c0-2.25 3.977-7.5 9.5-7.5S21.5 9.75 21.5 12s-3.977 7.5-9.5 7.5S2.5 14.25 2.5 12z"/>
//                     <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Agree */}
//           <label className="flex items-start gap-2 text-sm text-white select-none">
//             <input
//               type="checkbox"
//               name="agree"
//               checked={form.agree}
//               onChange={handleChange}
//               className="mt-0.5"
//               required
//             />
//             <span>
//               I agree to <a className="text-brand-600 hover:underline" href="#">privacy policy</a> &{" "}
//               <a className="text-brand-600 hover:underline" href="#">terms</a>.
//             </span>
//           </label>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full rounded-md bg-[#00857D] text-white py-2.5 font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-500 active:scale-[.99] transition cursor-pointer"
//           >
//             Sign in
//           </button>
//         </form>

//         {/* Footer link */}
//         <p className="text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="#" className="text-brand-600 font-medium hover:underline">
//             Sign up instead
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

type Tab = "password" | "otp";

export default function SignIn() {
  const [active, setActive] = useState<Tab>("password");

  // password tab
  const [showPwd, setShowPwd] = useState(false);
  const [idn, setIdn] = useState(""); // username / email
  const [pwd, setPwd] = useState("");

  // otp tab
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    const ok = /^\d{10}$/.test(mobile);
    if (!ok) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    setOtp("");
    setOtpSent(true);
    // await api.sendOtp(mobile)
  };

  const submitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ idn, pwd });
  };

  const submitOtp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ mobile, otp });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-gray-800 to-black p-4">
      {/* Card (glassy like Signup) */}
      <div className="w-full max-w-lg relative">
        {/* Soft animated glow */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-500/40 to-cyan-400/40 blur opacity-60 animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-4 sm:p-6 text-white">
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                active === "password"
                  ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow"
                  : "bg-white/10 text-white/85 hover:bg-white/15 border border-white/10"
              }`}
              onClick={() => setActive("password")}
            >
              Login with Password
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                active === "otp"
                  ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow"
                  : "bg-white/10 text-white/85 hover:bg-white/15 border border-white/10"
              }`}
              onClick={() => setActive("otp")}
            >
              Login with OTP
            </button>
          </div>

          {/* Panel */}
          <div className="rounded-xl border border-white/15 p-4 sm:p-5 bg-white/5">
            {active === "password" ? (
              <form onSubmit={submitPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Username / Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={idn}
                    onChange={(e) => setIdn(e.target.value)}
                    placeholder="Enter username or email"
                    className="mt-1 w-full h-11 rounded-md border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    autoComplete="username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={showPwd ? "text" : "password"}
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-11 rounded-md border border-white/20 bg-white/10 px-3 pr-11 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                      className="absolute inset-y-0 right-0 px-3 text-white/70 hover:text-white transition"
                      aria-label={showPwd ? "Hide password" : "Show password"}
                    >
                      {showPwd ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-lg hover:opacity-90 active:scale-[.99] transition"
                  >
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={submitOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative mt-1">
                    <input
                      value={mobile}
                      onChange={(e) =>
                        setMobile(e.target.value.replace(/\D/g, ""))
                      }
                      maxLength={10}
                      placeholder="Enter mobile number"
                      className="w-full h-11 rounded-md border border-white/20 bg-white/10 px-3 pr-28 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      inputMode="numeric"
                      required
                    />
                    <button
                      type="button"
                      onClick={sendOtp}
                      className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium shadow hover:opacity-90 transition"
                    >
                      Get OTP
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90">
                    OTP <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter OTP"
                    className="mt-1 w-full h-11 rounded-md border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-60"
                    inputMode="numeric"
                    maxLength={6}
                    disabled={!otpSent}
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-lg hover:opacity-90 active:scale-[.99] transition disabled:opacity-60"
                    disabled={!otpSent || otp.length < 4}
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

