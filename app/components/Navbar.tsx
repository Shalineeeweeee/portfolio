"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 pt-6">

      <nav className="max-w-[1600px] mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-semibold tracking-tight">
          Shalinee
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-[0.2em] text-gray-400">

          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* CTA */}
        <button className="border border-white/10 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
          Let’s Talk
        </button>

      </nav>

    </header>
  );
}