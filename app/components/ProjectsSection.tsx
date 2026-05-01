"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

function ProjectCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group rounded-xl border border-white/10 bg-black/80 backdrop-blur p-6"
    >
      <h3 className="text-xl font-semibold">
        Hospital Management System
      </h3>

      <p className="text-gray-400 mt-2">
        Full-stack system with patients, doctors, APIs & dashboard UI.
      </p>

      {/* TECH */}
      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded bg-white/5 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ACTION */}
      <div className="mt-6 flex gap-4">
        <button className="text-yellow-400 hover:underline">
          Live →
        </button>
        <button className="text-gray-400 hover:text-white">
          Code
        </button>
      </div>

      {/* subtle hover glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl pointer-events-none" />
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">

      {/* HEADING */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Selected <span className="text-yellow-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-2">
          A few things I’ve built recently.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        <ProjectCard />

        {/* Placeholder */}
        <div className="rounded-xl border border-white/10 bg-black/50 p-6 flex items-center justify-center text-gray-500">
          More projects coming soon
        </div>

      </div>

    </SectionWrapper>
  );
}