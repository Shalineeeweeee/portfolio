import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I am <span className="text-red-500">Shalinee</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg max-w-md">
            I design and build modern, responsive web applications with clean UI and smooth user experience.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-lg">
              View Work
            </button>

            <button className="border border-gray-600 hover:border-gray-400 transition px-5 py-2 rounded-lg">
              Contact
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="h-64 md:h-96 rounded-xl bg-gradient-to-br from-red-500/20 via-black to-black border border-red-500/20" />

      </section>

      {/* PROJECTS SECTION */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Selected <span className="text-red-500">Projects</span>
      </h2>

    </div>
  );
}