"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-12 pt-32"
    >

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-[0.9]"
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
            className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            Full-stack developer creating modern, responsive and visually polished web experiences.
          </motion.p>

          {/* buttons */}
          <div className="mt-12 flex gap-4">

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:scale-[1.02] transition">
              View Work
            </button>

            <button className="border border-white/10 px-8 py-3 rounded-full hover:bg-white/5 transition">
              Contact
            </button>

          </div>

        </div>

        {/* RIGHT → FEATURED VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >

          <div className="rounded-[32px] border border-white/10 overflow-hidden bg-[#0d0d0d]">

            {/* fake browser bar */}
            <div className="h-12 border-b border-white/10 flex items-center px-5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* preview */}
            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">

              <div className="text-5xl font-bold text-white/10">
                PROJECT
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}