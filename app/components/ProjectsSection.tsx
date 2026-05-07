"use client";

import SectionWrapper from "./SectionWrapper";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ProjectsSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <SectionWrapper id="projects">

      {/* HEADER */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Selected <span className="text-yellow-400">Work</span>
        </h2>

        <p className="text-gray-400 mt-3 max-w-lg">
          A selection of projects focused on performance, design and interaction.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-28">

        {/* PROJECT ITEM */}
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-3xl font-semibold">
              Hospital Management System
            </h3>

            <p className="text-gray-400 mt-4 max-w-md">
              Full-stack dashboard with patients, doctors, APIs and analytics.
            </p>

            {/* TECH */}
            <div className="flex gap-3 mt-6 text-sm">
              {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINK */}
            <div className="mt-8 text-yellow-400 flex items-center gap-2">
              View Project
              <span className="group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[300px] flex items-center justify-center">

            {/* cursor-follow glow */}
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              className="absolute w-40 h-40 bg-yellow-400/20 blur-3xl rounded-full"
            />

            {/* main preview surface */}
            <motion.div
              variants={{
                hover: {
                  scale: 1.05,
                  rotate: 2,
                },
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-full h-full rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent backdrop-blur"
            />
          </div>

        </motion.div>

        {/* SECOND PROJECT (placeholder) */}
        <div className="border border-white/10 rounded-xl p-10 text-center text-gray-500">
          More projects coming soon
        </div>

      </div>

    </SectionWrapper>
  );
}