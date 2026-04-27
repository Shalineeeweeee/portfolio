export default function ProjectsSection() {
  return (
    <div id="projects" className="grid md:grid-cols-2 gap-8">

      {/* PROJECT CARD */}
      <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-red-500/40 to-transparent hover:scale-[1.02] transition">

        <div className="rounded-xl bg-black/80 backdrop-blur border border-white/10 p-6 h-full">

          <h3 className="text-xl font-semibold">
            Hospital Management System
          </h3>

          <p className="text-gray-400 mt-2">
            Full-stack system with patient and doctor management, APIs, and dashboard UI.
          </p>

          {/* TECH */}
          <div className="flex gap-2 mt-4 text-sm">
            <span className="bg-red-500/20 px-2 py-1 rounded">Next.js</span>
            <span className="bg-red-500/20 px-2 py-1 rounded">MongoDB</span>
            <span className="bg-red-500/20 px-2 py-1 rounded">Tailwind</span>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <button className="bg-red-500 px-4 py-2 rounded hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]">
              Live
            </button>

            <button className="border border-gray-600 px-4 py-2 rounded hover:border-gray-400">
              Code
            </button>
          </div>
        </div>

        {/* glow */}
        <div className="absolute inset-0 rounded-xl blur-2xl bg-red-500/10 -z-10"></div>
      </div>

      {/* SECOND CARD */}
      <div className="p-6 rounded-xl border border-gray-800 bg-black/50 backdrop-blur">
        <h3 className="text-xl font-semibold">Coming Soon</h3>
        <p className="text-gray-500 mt-2">
          More projects will be added here.
        </p>
      </div>

    </div>
  );
}