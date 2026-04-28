"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 opacity-20 
        bg-[linear-gradient(rgba(255,215,0,0.08)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,215,0,0.08)_1px,transparent_1px)] 
        bg-[size:40px_40px]" 
      />

      {/* 🔥 FRAME STRUCTURE */}
      <div className="absolute inset-10 border border-yellow-500/20 rounded-2xl pointer-events-none" />
      <div className="absolute inset-16 border border-yellow-500/10 rounded-2xl pointer-events-none" />

      {/* 🔥 SUBTLE GLOW */}
      <div className="absolute w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full top-20 right-20" />

      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Shalinee
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-lg">
            I design and build modern, responsive web applications
            with clean UI and smooth user experience.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-105 transition">
              View Work
            </button>

            <button className="px-6 py-3 rounded-lg border border-yellow-500/40 hover:bg-yellow-500/10 transition">
              Contact
            </button>
          </div>

          {/* TAGS */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {["Full Stack", "Next.js", "MongoDB", "UI/UX"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-yellow-500/20 rounded-full text-sm text-gray-400 hover:border-yellow-400 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD (FOCAL ELEMENT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative group"
        >
          {/* glow on hover */}
          <div className="absolute inset-0 rounded-2xl blur-xl bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition" />

          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 transition transform group-hover:-translate-y-2 group-hover:scale-[1.02]">

            <div className="bg-black rounded-2xl p-8 backdrop-blur-xl border border-yellow-500/20">

              <p className="text-xs text-gray-400 mb-2">
                ● LIVE PROJECT
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Hospital Management System
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Full-stack dashboard with patients, doctors & appointments
              </p>

              <div className="mt-6 h-40 bg-yellow-400/5 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Preview
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}