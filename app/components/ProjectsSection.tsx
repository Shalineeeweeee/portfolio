"use client";

import SectionWrapper from "./SectionWrapper";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Selected <span className="text-yellow-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-md">
          A few things I’ve built recently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="relative rounded-xl border border-white/10 bg-black/80 p-6 backdrop-blur group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl" />
          <div className="relative z-10">
            <h3 className="text-xl font-semibold">Hospital Management</h3>
            <p className="text-gray-400 mt-2">
              Full-stack system with APIs and dashboard UI.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/50 p-6 flex items-center justify-center text-gray-500">
          More projects coming soon
        </div>

      </div>

    </SectionWrapper>
  );
}