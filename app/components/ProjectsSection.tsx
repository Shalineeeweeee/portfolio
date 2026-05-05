"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">

      <h2 className="text-4xl font-bold mb-20">
        Selected <span className="text-yellow-400">Work</span>
      </h2>

      <div className="space-y-24">

        {/* PROJECT */}
        <motion.div
          whileHover="hover"
          className="group grid lg:grid-cols-2 gap-10 items-center"
        >

          {/* TEXT */}
          <div>
            <h3 className="text-3xl font-semibold">
              Hospital Management System
            </h3>

            <p className="text-gray-400 mt-4 max-w-md">
              Full-stack dashboard with patients, doctors & appointment system.
            </p>

            <div className="mt-6 text-yellow-400 flex items-center gap-2">
              View Project
              <span className="group-hover:translate-x-2 transition">→</span>
            </div>
          </div>

          {/* VISUAL */}
          <motion.div
            variants={{
              hover: { scale: 1.05 },
            }}
            className="h-[280px] rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent border border-white/10"
          />

        </motion.div>

      </div>

    </SectionWrapper>
  );
}