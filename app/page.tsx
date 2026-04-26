"use client";

import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <Navbar />

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I am <span className="text-red-500">Shalinee</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg max-w-md">
            I design and build modern, responsive web applications with clean UI and smooth user experience.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
            >
              View Work
            </button>

            <button
              type="button"
              className="border border-gray-600 hover:border-gray-400 px-5 py-2 rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="h-64 md:h-96 rounded-xl border border-red-500/20 overflow-hidden">
          <img
            src="/hospital.png"
            alt="Project preview"
            className="h-full w-full object-cover"
          />
        </div>

      </section>

      <div className="mt-24 max-w-6xl mx-auto">
        <ProjectsSection />
      </div>

    </div>
  );
}