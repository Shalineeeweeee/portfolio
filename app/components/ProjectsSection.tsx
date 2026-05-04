"use client";

import SectionWrapper from "./SectionWrapper";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">

      <h2 className="text-3xl font-bold mb-10">
        Selected <span className="text-yellow-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl">Hospital Management</h3>
          <p className="text-gray-400 mt-2">Full stack dashboard system.</p>
        </div>

        <div className="border border-white/10 p-6 rounded-xl text-gray-500 flex items-center justify-center">
          Coming Soon
        </div>

      </div>

    </SectionWrapper>
  );
}