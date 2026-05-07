"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth cursor
  const smoothX = useSpring(x, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  // subtle rotation based on cursor
  const rotateX = useTransform(smoothY, [0, window.innerHeight || 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, window.innerWidth || 1], [-8, 8]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-12"
    >
      {/* BIG BACK TEXT */}
      <h1 className="absolute text-[18vw] font-bold text-white/5 leading-none pointer-events-none select-none">
        SHALINEE
      </h1>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Designing <br />
            <span className="text-yellow-400">modern experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-lg text-lg"
          >
            I build high-quality web applications with strong focus on interaction,
            motion, and user experience.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <button className="group relative px-8 py-3 rounded-full border border-white/20 overflow-hidden">
              <span className="relative z-10">View Work</span>

              {/* hover fill */}
              <div className="absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT INTERACTIVE VISUAL */}
        <div className="relative w-full h-[420px] flex items-center justify-center">

          {/* MAIN SHAPE */}
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
              rotateX,
              rotateY,
            }}
            className="absolute w-64 h-64 rounded-[30%]
            bg-gradient-to-br from-yellow-400/20 to-transparent
            border border-yellow-400/20 backdrop-blur-xl"
          />

          {/* ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] rounded-full border border-yellow-400/10"
          />

          {/* INNER ROTATION */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px] border border-yellow-400/20 rounded-xl"
          />

          {/* GLOW */}
          <div className="absolute w-[350px] h-[350px] bg-yellow-400/10 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
}