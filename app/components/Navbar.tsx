"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 pt-6">

      <nav className="max-w-7xl mx-auto border border-white/10 rounded-full px-8 py-5 flex items-center justify-between bg-black/60 backdrop-blur-xl">

        <div className="text-2xl font-semibold">
          Shalinee
        </div>

        <div className="hidden md:flex gap-12 text-gray-400">

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

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:scale-[1.02] transition">
          Hire Me
        </button>

      </nav>

    </header>
  );
}