export default function ProjectsSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Selected <span className="text-red-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Project 1 */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#111] to-black border border-red-500/30 hover:shadow-[0_0_30px_rgba(255,0,0,0.25)] hover:-translate-y-2 transition duration-300">

          <h3 className="text-xl font-semibold">
            Hospital Management System
          </h3>

          <p className="text-gray-400 mt-2">
            Full-stack system with patient and doctor management, APIs, and dashboard UI.
          </p>

          {/* Tech */}
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="bg-red-500/20 px-3 py-1 rounded text-sm">Next.js</span>
            <span className="bg-red-500/20 px-3 py-1 rounded text-sm">MongoDB</span>
            <span className="bg-red-500/20 px-3 py-1 rounded text-sm">Tailwind</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)]">
              Live
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg">
              Code
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#111] to-black border border-red-500/20 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:-translate-y-2 transition duration-300">

          <h3 className="text-xl font-semibold">
            Coming Soon
          </h3>

          <p className="text-gray-400 mt-2">
            More projects will be added here.
          </p>

        </div>

      </div>
    </section>
  );
}