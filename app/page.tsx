import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import CursorGlow from "./components/CursorGlow.tsx";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,0,0,0.1),transparent_40%)]" />

      <CursorGlow />
      <Navbar />

      <div className="px-6 py-10">

        {/* HERO */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I am{" "}
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                Shalinee
              </span>
            </h1>

            <p className="mt-4 text-gray-400 text-lg max-w-md">
              I design and build modern, responsive web applications with clean UI and smooth user experience.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <button className="relative bg-red-500 px-5 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition">
                View Work
              </button>

              <button className="border border-gray-600 hover:border-gray-400 px-5 py-2 rounded-lg transition">
                Contact
              </button>
            </div>

            {/* CHIPS */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">Full Stack</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">Next.js</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">MongoDB</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">UI/UX</span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative h-64 md:h-96 rounded-2xl p-[1px] bg-gradient-to-br from-red-500/40 via-transparent to-transparent rotate-[2deg]">

            <div className="h-full w-full rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 flex flex-col justify-center items-center text-center px-6">

              <p className="text-gray-400 text-xs tracking-widest animate-pulse">
                ● LIVE PROJECT
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Hospital Management System
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                Full-stack dashboard with patients, doctors & appointments
              </p>

            </div>

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-red-500/20 -z-10"></div>
          </div>

        </section>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* PROJECTS */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Selected <span className="text-red-500">Projects</span>
          </h2>

          <ProjectsSection />
        </div>

      </div>
    </div>
  );
}