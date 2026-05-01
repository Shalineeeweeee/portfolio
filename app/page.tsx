"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import HeroVisual from "./components/HeroVisual";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold leading-tight"
            >
              Hi, I am{" "}
              <span className="text-yellow-400">Shalinee</span>
            </motion.h1>

            <p className="mt-5 text-gray-400 max-w-md">
              I build modern web apps with smooth UI and clean UX.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg">
                View Work
              </button>
              <button className="border border-white/20 px-6 py-2 rounded-lg">
                Contact
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <HeroVisual />

        </div>
      </SectionWrapper>

      {/* PROJECTS */}
      <ProjectsSection />

    </main>
  );
}