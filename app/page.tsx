"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import HeroCard from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">

      {/* ================= HERO ================= */}
      <SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Shalinee
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-gray-400 text-lg max-w-md"
            >
              I design and build modern, responsive web applications with clean UI and smooth user experience.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="relative px-6 py-2 rounded-lg bg-yellow-500 text-black font-medium overflow-hidden group">
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 blur-lg transition"></div>
              </button>

              <button className="border border-yellow-500/30 px-6 py-2 rounded-lg hover:bg-yellow-500/10 transition">
                Contact
              </button>
            </motion.div>

            {/* SKILLS */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              {["Full Stack", "Next.js", "MongoDB", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-yellow-500/20 rounded-full hover:border-yellow-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT → reusable hero card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <HeroCard />
          </div>

        </div>

      </SectionWrapper>

      {/* ================= DIVIDER ================= */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* ================= PROJECTS ================= */}
      <ProjectsSection />

    </main>
  );
}