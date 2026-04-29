"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,215,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 FRAME */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border border-yellow-500/10 rounded-xl m-6"></div>
      </div>

      {/* 🔥 GLOW ORB (FOCAL POINT) */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-yellow-400/20 blur-[120px] animate-pulse" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Shalinee
              </span>
            </h1>

            <p className="mt-5 text-gray-400 text-lg max-w-md">
              I design and build modern, responsive web applications with clean UI and smooth user experience.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">

              <button className="relative px-6 py-2 rounded-lg bg-yellow-500 text-black font-medium overflow-hidden group">
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 blur-lg transition"></div>
              </button>

              <button className="border border-yellow-500/30 px-6 py-2 rounded-lg hover:bg-yellow-500/10 transition">
                Contact
              </button>

            </div>

            {/* SKILLS */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              {["Full Stack", "Next.js", "MongoDB", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-yellow-500/20 rounded-full hover:border-yellow-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-2xl border border-yellow-500/20 p-6 bg-black/60 backdrop-blur-xl transition hover:-translate-y-2"
          >

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-yellow-500/10 blur-xl transition"></div>

            <p className="text-gray-400 text-xs tracking-widest">
              ● LIVE PROJECT
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Hospital Management System
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              Full-stack dashboard with patients, doctors & appointments
            </p>

            {/* preview box */}
            <div className="mt-6 h-40 rounded-lg bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center text-gray-500">
              Preview
            </div>

          </motion.div>

        </motion.div>

        {/* DIVIDER */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

        {/* PROJECTS */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">
            Selected{" "}
            <span className="text-yellow-500">Projects</span>
          </h2>
        </div>

      </div>
    </div>
  );
}