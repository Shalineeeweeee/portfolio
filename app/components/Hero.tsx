"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 overflow-hidden bg-[#050816] text-white">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full bottom-10 right-10" />

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
              Shalinee
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-lg">
            I design and build modern, responsive web applications
            with clean UI and smooth user experience.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-semibold hover:scale-105 transition">
              View Work
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/10 transition">
              Contact
            </button>
          </div>

          {/* TECH TAGS */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {["Full Stack", "Next.js", "MongoDB", "UI/UX"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE (PROJECT CARD) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* GLOW BORDER */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-yellow-400">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 backdrop-blur-xl">

              <p className="text-xs text-gray-400 mb-2">
                ● LIVE PROJECT
              </p>

              <h2 className="text-2xl font-semibold">
                Hospital Management System
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Full-stack dashboard with patients, doctors & appointments
              </p>

              {/* FAKE IMAGE AREA */}
              <div className="mt-6 h-40 bg-gradient-to-br from-blue-500/10 to-yellow-400/10 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Preview
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}