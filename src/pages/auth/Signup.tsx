import React, { useState } from "react";

/**
 * Modern Signup page
 * - BG: bg-gradient-to-br from-teal-600 via-gray-800 to-black
 * - Fields: username, email, password, organization, and Submit
 * - Button styling matches your document-category component
 * - Subtle animated accents and focus rings (Tailwind only)
 */
const Signup: React.FC = () => {
  const [showPwd, setShowPwd] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    organization: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up API
    console.log("Signup payload:", form);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-600 via-gray-800 to-black flex items-center justify-center p-6">
      {/* Floating glassy blobs (decor) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl animate-[pulse_3.5s_ease-in-out_infinite]" />

      {/* Card */}
      <div className="w-full max-w-md relative">
        {/* Animated border ring */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-500/40 to-cyan-400/40 blur opacity-60 animate-[pulse_2.8s_ease-in-out_infinite]" />

        <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 sm:p-8 text-white">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-2 h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Join and supercharge your workflow.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white/90 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="e.g. jane_doe"
                autoComplete="username"
                className="w-full h-11 rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full h-11 rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPwd ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full h-11 rounded-lg border border-white/20 bg-white/10 px-3 pr-11 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute inset-y-0 right-0 px-3 text-white/70 hover:text-white transition"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? (
                    // Eye-off
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a3 3 0 104.24 4.24M9.88 4.64A9.7 9.7 0 0112 4.5c5.52 0 9.5 5.25 9.5 7.5-.25.91-1.61 3.07-4.21 4.86M6.07 6.07C3.88 7.61 2.5 9.77 2.5 12c0 2.25 3.98 7.5 9.5 7.5 1.1 0 2.14-.18 3.12-.51"/>
                    </svg>
                  ) : (
                    // Eye
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.5 12c0-2.25 3.98-7.5 9.5-7.5S21.5 9.75 21.5 12s-3.98 7.5-9.5 7.5S2.5 14.25 2.5 12z"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-white/90 mb-1">
                Organization Name
              </label>
              <input
                id="organization"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="e.g. AIDoc Systems"
                className="w-full h-11 rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold shadow-lg hover:opacity-90 active:scale-[.99] transition"
            >
              Sign up
            </button>
          </form>

          {/* Small helper */}
          <p className="mt-4 text-center text-sm text-white/70">
            Already have an account?{" "}
            <a href="/signin" className="text-teal-300 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
