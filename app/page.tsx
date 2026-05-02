"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import HeroVisual from "./components/HeroVisual";
import ProjectsSection from "./components/ProjectsSection";
import Parallax from "./components/Parallax";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <SectionWrapper id="home">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Hi, I am{" "}
              <span className="text-yellow-400">Shalinee</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-gray-400 max-w-md"
            >
              I design and build modern, responsive web applications with smooth UI and clean UX.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium">
                View Work
              </button>

              <button className="border border-white/20 px-6 py-2 rounded-lg hover:bg-white/5">
                Contact
              </button>
            </motion.div>

            {/* skills */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              {["Full Stack", "Next.js", "MongoDB", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-white/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT → parallax visual */}
          <Parallax speed={60}>
            <HeroVisual />
          </Parallax>

        </div>

      </SectionWrapper>

      {/* divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* PROJECTS */}
      <ProjectsSection />

    </main>
  );
}