export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto mb-12">

      <h1 className="font-bold text-lg text-white">
        Shalinee
      </h1>

      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#" className="hover:text-white transition">
          Contact
        </a>
      </div>

    </nav>
  );
}