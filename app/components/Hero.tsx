"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-12">

      {/* BIG BACK TEXT */}
      <h1 className="absolute text-[18vw] font-bold text-white/5 leading-none pointer-events-none select-none">
        SHALINEE
      </h1>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* MAIN TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Designing <br />
          <span className="text-yellow-400">modern experiences</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-lg text-lg"
        >
          I build high-quality web applications with strong focus on interaction, motion, and user experience.
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

            <div className="absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
          </button>
        </motion.div>

      </div>

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full" />

    </section>
  );
}