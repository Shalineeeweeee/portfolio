import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500/10 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="px-6 py-10">

        {/* HERO */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

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
              <button className="bg-red-500 hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition px-5 py-2 rounded-lg">
                View Work
              </button>

              <button className="border border-gray-600 hover:border-gray-400 transition px-5 py-2 rounded-lg">
                Contact
              </button>
            </div>

            {/* 🔥 CENTER FILL (chips) */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">
                Full Stack
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">
                Next.js
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">
                MongoDB
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full hover:border-red-500 transition">
                UI/UX
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-64 md:h-96 translate-y-6 md:translate-y-10 rounded-xl border border-red-500/20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-red-500/10 via-black to-black hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition duration-300">

            <p className="text-gray-400 text-sm tracking-wide">
              CURRENTLY BUILDING
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Hospital Management System
            </h3>

            <p className="mt-2 text-gray-500 text-sm px-6">
              Full-stack dashboard with patients, doctors & appointments
            </p>

          </div>

        </section>

        {/* 🔥 Divider */}
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