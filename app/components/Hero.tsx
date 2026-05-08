"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-32 overflow-hidden"
    >

      {/* AMBIENT LIGHT */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[160px] rounded-full" />

      <div className="relative max-w-[1600px] mx-auto w-full">

        {/* MASSIVE BACKGROUND NAME */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[20vw] font-bold leading-none text-white/[0.03] pointer-events-none select-none">

          SHALINEE

        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* LEFT */}
          <div className="relative z-10">

            {/* small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-10"
            >
              Full Stack Developer
            </motion.div>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold leading-[0.9] tracking-tight"
            >

              <span className="block text-[clamp(4rem,10vw,9rem)]">
                Designing
              </span>

              <span className="block text-yellow-400 text-[clamp(4rem,10vw,9rem)] ml-[10%]">
                modern
              </span>

              <span className="block text-[clamp(4rem,10vw,9rem)]">
                experiences
              </span>

            </motion.h1>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-14 max-w-xl text-lg text-gray-400 leading-relaxed"
            >
              I create immersive digital products with strong focus on interaction, motion and premium user experience.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-14 flex gap-5"
            >

              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-medium hover:scale-[1.03] transition">
                View Work
              </button>

              <button className="border border-white/10 px-8 py-4 rounded-full hover:bg-white/5 transition">
                Contact
              </button>

            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[700px] hidden lg:block"
          >

            {/* main image */}
            <div className="absolute top-0 right-0 w-[85%] h-[520px] overflow-hidden rounded-[40px]">

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent z-10" />

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
              />

            </div>

            {/* floating card */}
            <div className="absolute bottom-0 left-0 w-[340px] bg-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">

              <div className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Currently
              </div>

              <div className="mt-4 text-3xl font-semibold leading-tight">
                Building scalable web experiences
              </div>

              <div className="mt-8 flex gap-3 flex-wrap text-sm">

                <span className="border border-white/10 px-3 py-2 rounded-full">
                  Next.js
                </span>

                <span className="border border-white/10 px-3 py-2 rounded-full">
                  Framer Motion
                </span>

                <span className="border border-white/10 px-3 py-2 rounded-full">
                  Tailwind
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}