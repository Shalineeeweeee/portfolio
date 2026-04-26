export default function ProjectsSection() {
  return (
    <section className="bg-black text-white">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project Card */}
        <div className="bg-[#111] rounded-2xl p-6 border border-red-500/20 hover:border-red-500 transition">
          <h3 className="text-xl font-semibold mb-2">
            Hospital Management System
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Full-stack system with patient and doctor management, APIs, and dashboard UI.
          </p>

          <div className="flex gap-2 flex-wrap text-xs mb-4">
            <span className="bg-red-500/20 px-2 py-1 rounded">Next.js</span>
            <span className="bg-red-500/20 px-2 py-1 rounded">MongoDB</span>
            <span className="bg-red-500/20 px-2 py-1 rounded">Tailwind</span>
          </div>

          <div className="flex gap-3">
            <button className="bg-red-500 px-4 py-2 rounded">Live</button>
            <button className="border border-gray-600 px-4 py-2 rounded">Code</button>
          </div>
        </div>

        {/* Placeholder */}
        <div className="bg-[#111] rounded-2xl p-6 border border-red-500/10">
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-gray-500 text-sm">
            More projects will be added here.
          </p>
        </div>

      </div>
    </section>
  );
}