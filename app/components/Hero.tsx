"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-10 pt-32"
    >
      <div className="max-w-[1400px] mx-auto w-full">

        <div className="grid lg:grid-cols-[1fr_520px] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-8"
            >
              Full Stack Developer
            </motion.p>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-semibold tracking-tight leading-[0.92]"
            >

              <span className="block text-[clamp(4rem,8vw,7rem)]">
                Building
              </span>

              <span className="block text-[clamp(4rem,8vw,7rem)] text-yellow-400">
                digital
              </span>

              <span className="block text-[clamp(4rem,8vw,7rem)]">
                products
              </span>

            </motion.h1>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              Full-stack developer focused on creating modern,
              scalable and visually polished web applications
              with clean user experiences.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-12"
            >

              <button className="h-14 px-8 rounded-full bg-yellow-400 text-black font-medium hover:scale-[1.02] transition-all duration-300">
                View Work
              </button>

              <button className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300">
                Contact
              </button>

            </motion.div>

          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >

            {/* ambient glow */}
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl scale-90 rounded-full" />

            {/* browser frame */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0b0b0b] backdrop-blur-xl">

              {/* top bar */}
              <div className="h-14 border-b border-white/10 flex items-center gap-3 px-5">

                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

              </div>

              {/* image */}
              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop"
                  alt="workspace"
                  className="w-full aspect-[4/5] object-cover brightness-75 contrast-125"
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

            </div>

            {/* floating stats card */}
            <div className="absolute -bottom-8 -left-8 w-72 bg-black/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">

              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Current Focus
              </div>

              <div className="mt-4 text-2xl font-semibold leading-snug">
                Designing scalable healthcare dashboards
              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full border border-white/10 text-sm text-zinc-300"
                  >
                    {tech}
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