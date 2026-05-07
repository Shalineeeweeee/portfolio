"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 300,
    damping: 25,
  });

  const smoothY = useSpring(y, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * 0.06);
      y.set((e.clientY - window.innerHeight / 2) * 0.06);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-12 relative overflow-hidden"
    >

      {/* background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18vw] font-bold text-white/[0.03]">
          SHALINEE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* left */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-[0.95]"
          >
            Building <br />

            <span className="text-yellow-400">
              digital products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-gray-400 max-w-xl"
          >
            Full-stack developer focused on creating modern,
            responsive and visually polished web experiences.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:scale-[1.03] transition">
              View Work
            </button>

            <button className="border border-white/10 px-8 py-3 rounded-full hover:bg-white/5 transition">
              Contact
            </button>

          </motion.div>

        </div>

        {/* right */}
        <div className="flex items-center justify-center lg:justify-end">

          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="relative w-[320px] h-[320px]"
          >

            {/* glow */}
            <div className="absolute -inset-16 bg-yellow-400/10 blur-[100px] rounded-full" />

            {/* outer */}
            <div className="absolute inset-0 rounded-[32%] border border-yellow-400/15 bg-yellow-400/5 backdrop-blur-2xl" />

            {/* inner */}
            <div className="absolute inset-10 rounded-[24%] border border-yellow-400/10" />

          </motion.div>

        </div>

      </div>

    </section>
  );
}