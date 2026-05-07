"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 pt-6">

      <nav className="max-w-7xl mx-auto rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-5 flex items-center justify-between">

        {/* logo */}
        <div className="text-xl font-semibold">
          Shalinee
        </div>

        {/* links */}
        <div className="hidden md:flex gap-10 text-gray-400">
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

        {/* button */}
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:scale-[1.03] transition">
          Hire Me
        </button>

      </nav>

    </header>
  );
}