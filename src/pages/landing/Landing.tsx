import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

/**
 * Small helper for fade-in on scroll using IntersectionObserver.
 */
const FadeIn: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
//   { label: "Portfolio", to: "portfolio" },
//   { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

const Landing: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink/solid navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="font-[Inter,ui-sans-serif,system-ui] text-slate-800">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white/70 backdrop-blur"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div
              className="text-xl font-extrabold tracking-tight text-sky-700 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              AI Docs
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to} className="list-none">
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-72}
                    duration={500}
                    activeClass="text-sky-600"
                    className="cursor-pointer text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="list-none">
                <a
                  href="#contact"
                  onClick={(e) => e.preventDefault()}
                  className="ml-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700 transition-colors"
                >
                  Start Now
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-sky-600"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.to} className="list-none">
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-72}
                    duration={500}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main className="mt-16">
        {/* ================= HOME ================= */}
        <section
          id="home"
          className="relative min-h-[88vh] grid place-items-center overflow-hidden"
        >
          {/* Background image with gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(14,165,233,0.15), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop')",
            }}
          />
          <div className="mx-auto max-w-5xl px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Empower Your Future with <span className="text-sky-600">MyApp</span>
              </h1>
              <p className="mt-5 text-slate-700 text-base sm:text-lg max-w-3xl mx-auto">
                A modern platform to streamline your workflow, boost productivity, and build
                delightful experiences.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => e.preventDefault()}
                  className="rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700 active:scale-[.99] transition"
                >
                  Start Now
                </a>
                <Link
                  to="about"
                  smooth
                  offset={-72}
                  duration={500}
                  className="cursor-pointer rounded-md border border-sky-200 bg-white px-6 py-3 font-semibold text-sky-700 shadow hover:bg-sky-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                About <span className="text-sky-600">MyApp</span>
              </h2>
            </FadeIn>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <FadeIn>
                <p className="text-slate-700 leading-relaxed text-lg">
                  MyApp helps teams collaborate better, automate repetitive tasks, and ship
                  products faster. With a clean, intuitive interface and powerful features, you’ll
                  keep your focus on what matters: delivering value.
                </p>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Built with modern technologies and best practices, MyApp scales with your
                  business. Join thousands of users who improved efficiency and created standout
                  experiences.
                </p>
              </FadeIn>
              <FadeIn>
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1974&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full rounded-xl shadow-lg object-cover"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="py-20 bg-sky-50">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Our <span className="text-sky-600">Services</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-3xl">
                From strategy to execution, we provide solutions that help you move faster and
                smarter.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automation",
                  desc: "Eliminate manual tasks and streamline your processes with smart automation.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1 14.93V17a1 1 0 11-2 0v-.07A8.001 8.001 0 014.07 13H4a1 1 0 110-2h.07A8.001 8.001 0 0111 4.07V4a1 1 0 112 0v.07A8.001 8.001 0 0119.93 11H20a1 1 0 110 2h-.07A8.001 8.001 0 0113 16.93Z" />
                    </svg>
                  ),
                },
                {
                  title: "Analytics",
                  desc: "Real-time dashboards and insights to guide your decisions with confidence.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v2H3V3zm2 4h3v14H5V7zm5 5h3v9h-3v-9zm5-4h3v13h-3V8z" />
                    </svg>
                  ),
                },
                {
                  title: "Integrations",
                  desc: "Connect your favorite tools and create a unified, efficient workflow.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2a5 5 0 015 5v2h-2V7a3 3 0 10-3 3h2v2H7a5 5 0 110-10zm10 9h-2v2h2a3 3 0 11-3 3v-2h-2v2a5 5 0 105-5z" />
                    </svg>
                  ),
                },
                {
                  title: "Collaboration",
                  desc: "Share, comment, and ship together with seamless teamwork features.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3A3 3 0 0016 5a3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  ),
                },
                {
                  title: "Security",
                  desc: "Enterprise-grade security to keep your data safe and compliant.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1l9 4v6c0 5-3.8 9.74-9 11-5.2-1.26-9-6-9-11V5l9-4zm0 6a3 3 0 00-3 3v3h6V10a3 3 0 00-3-3z" />
                    </svg>
                  ),
                },
                {
                  title: "Support",
                  desc: "We’re here for you—documentation, tutorials, and world-class support.",
                  icon: (
                    <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20h8v-8a10 10 0 00-8-12zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92A3.5 3.5 0 0013 13h-2v-.5a4.5 4.5 0 011.33-3.17l1.24-1.26a1.75 1.75 0 10-2.47-2.47l-.6.6L8.9 4.9a3.25 3.25 0 114.6 4.35z" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <FadeIn key={i}>
                  <div className="group rounded-xl bg-white p-6 shadow hover:shadow-lg transition hover:-translate-y-0.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100">
                      {s.icon}
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        {/* <section id="portfolio" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Recent <span className="text-sky-600">Work</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-3xl">
                A glimpse at projects where we’ve helped clients achieve remarkable results.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Revamp",
                  desc: "Improved conversion and performance for a global retailer.",
                  img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  title: "SaaS Dashboard",
                  desc: "Analytics platform with real-time visualizations and alerts.",
                  img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  title: "Mobile Experience",
                  desc: "Cross-platform app delivering seamless user experiences.",
                  img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((p, i) => (
                <FadeIn key={i}>
                  <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow hover:shadow-lg transition">
                    <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-semibold text-slate-900">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                      <a
                        href="#"
                        className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:text-sky-700"
                      >
                        View Project →
                      </a>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section> */}

        {/* ================= BLOG ================= */}
        {/* <section id="blog" className="py-20 bg-sky-50">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Latest <span className="text-sky-600">Insights</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-3xl">
                Tips, tutorials, and stories from our team to help you grow faster.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Design Systems that Scale",
                  img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1974&auto=format&fit=crop",
                  excerpt:
                    "Learn the building blocks of scalable UI and how to keep your design system consistent.",
                },
                {
                  title: "Automate the Boring Stuff",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop",
                  excerpt:
                    "Explore practical automations to reduce toil and reclaim time for creative work.",
                },
                {
                  title: "A Guide to Cloud Costs",
                  img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1974&auto=format&fit=crop",
                  excerpt:
                    "Understand, forecast, and optimize your cloud spend without slowing down teams.",
                },
              ].map((b, i) => (
                <FadeIn key={i}>
                  <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow hover:shadow-lg transition">
                    <img src={b.img} alt={b.title} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-semibold text-slate-900">{b.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{b.excerpt}</p>
                      <a
                        href="#"
                        className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:text-sky-700"
                      >
                        Read More →
                      </a>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section> */}

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Get in <span className="text-sky-600">Touch</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-3xl">
                Have a project in mind or just want to say hello? We’d love to hear from you.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {/* Form */}
              <FadeIn>
                <form
                  className="rounded-xl border border-slate-100 bg-white p-6 shadow"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks! This demo form does not submit anywhere.");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Name</label>
                      <input
                        type="text"
                        required
                        className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        required
                        className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">Message</label>
                      <textarea
                        rows={5}
                        required
                        className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </FadeIn>

              {/* Contact Details & Map Placeholder */}
              <FadeIn>
                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-100 bg-white p-6 shadow">
                    <h3 className="font-semibold text-slate-900">Contact Details</h3>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      <li>Email: support@myapp.io</li>
                      <li>Phone: (555) 123-4567</li>
                      <li>Mon–Fri: 9:00–18:00</li>
                    </ul>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=1974&auto=format&fit=crop"
                    alt="Map placeholder"
                    className="w-full rounded-xl object-cover shadow h-64"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-xl font-extrabold text-sky-700">AI Docs</div>
              <p className="mt-2 text-sm text-slate-600">
                © {new Date().getFullYear()} MyApp, Inc. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.to} className="list-none">
                    <Link
                      to={item.to}
                      smooth
                      offset={-72}
                      duration={500}
                      className="cursor-pointer text-slate-600 hover:text-sky-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Follow Us</h4>
              <ul className="mt-3 flex gap-4 text-slate-600">
                <li className="list-none">
                  <a className="hover:text-sky-600" href="#" aria-label="Twitter">
                    {/* Twitter icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.22 4.22 0 001.85-2.32 8.45 8.45 0 01-2.66 1.02 4.21 4.21 0 00-7.2 3.84A12 12 0 013 4.67a4.2 4.2 0 001.3 5.62 4.18 4.18 0 01-1.9-.52v.05a4.2 4.2 0 003.38 4.12c-.46.12-.94.18-1.43.07a4.2 4.2 0 003.93 2.92A8.45 8.45 0 012 19.54 12 12 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0022.46 6z" />
                    </svg>
                  </a>
                </li>
                <li className="list-none">
                  <a className="hover:text-sky-600" href="#" aria-label="LinkedIn">
                    {/* LinkedIn icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C21.4 7.6 24 10.01 24 14.28V24h-5v-8.66c0-2.06-.04-4.71-2.87-4.71-2.87 0-3.31 2.24-3.31 4.56V24h-5V8z" />
                    </svg>
                  </a>
                </li>
                <li className="list-none">
                  <a className="hover:text-sky-600" href="#" aria-label="GitHub">
                    {/* GitHub icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.53v-1.87c-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.23-1.6-1.23-1.6-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.98 1.68 2.56 1.2 3.17.92.1-.72.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.41 0-1.2.43-2.18 1.14-2.96-.11-.28-.49-1.43.1-2.98 0 0 .92-.3 3.02 1.13.88-.25 1.83-.37 2.77-.37s1.89.12 2.77.37c2.1-1.43 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.71.78 1.14 1.76 1.14 2.96 0 4.2-2.57 5.12-5.01 5.39.39.33.74.98.74 1.98v2.94c0 .29.2.63.76.53A10.51 10.51 0 0023 11.5C23 5.24 18.26.5 12 .5z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

