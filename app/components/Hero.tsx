"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(smoothY, [0, window.innerHeight], [8, -8]);
  const rotateY = useTransform(smoothX, [0, window.innerWidth], [-8, 8]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
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

          {/* BUTTONS */}
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

          {/* SKILLS */}
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

        {/* RIGHT VISUAL */}
        <div className="relative w-full h-[420px] flex items-center justify-center">

          {/* MAIN SHAPE */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="w-[260px] h-[260px]
            rounded-[28%]
            border border-yellow-500/20
            bg-yellow-400/5 backdrop-blur-xl"
          />

          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px]
            border border-yellow-500/10 rounded-full"
          />

          {/* INNER SHAPE */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px]
            border border-yellow-500/20 rounded-xl"
          />

          {/* GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-yellow-400/10 blur-[100px] rounded-full" />
        </div>

      </div>
    </section>
  );
}