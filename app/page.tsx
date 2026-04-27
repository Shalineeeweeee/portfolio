"use client";

import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500/10 rounded-full blur-3xl"></div>
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

      <div className="h-64 md:h-96 rounded-xl border border-red-500/20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-red-500/10 via-black to-black">

        <p className="text-gray-400 text-sm">Currently Building</p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Hospital Management System
          </h3>

        <p className="mt-2 text-gray-500 text-sm px-6">
          Full-stack dashboard with patients, doctors & appointments
        </p>

      </div>
      </section>

      <div className="mt-24 max-w-6xl mx-auto">
        <ProjectsSection />
      </div>

    </div>
  );
}