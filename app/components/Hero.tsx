"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-12 pt-28 overflow-hidden"
    >
      {/* subtle ambient */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-400/[0.04] blur-[140px]" />

      <div className="max-w-[1450px] mx-auto w-full relative z-10">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-10"
            >

              <div className="w-10 h-[1px] bg-yellow-400" />

              <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                Full Stack Developer
              </span>

            </motion.div>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-semibold tracking-[-0.06em] leading-[0.92]"
            >

              <span className="block text-[clamp(4rem,8vw,7.5rem)] text-white">
                Building
              </span>

              <span className="block text-[clamp(4rem,8vw,7.5rem)] text-yellow-400">
                digital
              </span>

              <span className="block text-[clamp(4rem,8vw,7.5rem)] text-white">
                products
              </span>

            </motion.h1>

            {/* desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 max-w-xl text-zinc-400 text-lg leading-relaxed"
            >
              I design and develop scalable web experiences
              with strong attention to interaction, performance
              and visual clarity.
            </motion.p>

            {/* actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-5 mt-12"
            >

              <button className="h-14 px-8 rounded-full bg-yellow-400 text-black font-medium hover:scale-[1.02] transition-all">
                View Projects
              </button>

              <button className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 transition-all">
                Contact
              </button>

            </motion.div>

            {/* metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-12 mt-16"
            >

              <div>
                <div className="text-3xl font-semibold">12+</div>
                <div className="text-sm text-zinc-500 mt-1">
                  Projects Built
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold">2+</div>
                <div className="text-sm text-zinc-500 mt-1">
                  Years Learning
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold">100%</div>
                <div className="text-sm text-zinc-500 mt-1">
                  Responsive UI
                </div>
              </div>

            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* outer glow */}
            <div className="absolute inset-0 bg-yellow-400/[0.05] blur-3xl scale-95" />

            {/* browser window */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">

              {/* topbar */}
              <div className="h-14 border-b border-white/10 flex items-center justify-between px-5">

                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="text-xs text-zinc-600 tracking-[0.2em] uppercase">
                  Live Project Preview
                </div>

              </div>

              {/* image */}
              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                  alt="Project preview"
                  className="w-full aspect-[16/10] object-cover brightness-[0.78]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              </div>

            </div>

            {/* floating card */}
            <div className="absolute -bottom-10 -left-10 bg-[#0d0d0d] border border-white/10 rounded-[24px] p-6 w-[280px] backdrop-blur-xl">

              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Current Focus
              </div>

              <div className="mt-4 text-2xl font-semibold leading-tight">
                Premium dashboard interfaces
              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                {["Next.js", "TypeScript", "Framer"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-2 rounded-full border border-white/10 text-zinc-400"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}