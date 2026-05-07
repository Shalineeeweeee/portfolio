"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 lg:px-12 py-32"
    >

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="mb-20">

          <h2 className="text-5xl font-bold">
            Selected <span className="text-yellow-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-lg">
            A selection of recent work focused on interaction,
            performance and clean UI systems.
          </p>

        </div>

        {/* projects */}
        <div className="space-y-32">

          {/* project */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-14 items-center"
          >

            {/* left */}
            <div>

              <h3 className="text-4xl font-semibold">
                Hospital Management System
              </h3>

              <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
                A full-stack healthcare dashboard with patient management,
                analytics and appointment scheduling.
              </p>

              {/* tech */}
              <div className="flex gap-3 mt-7 flex-wrap">

                {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* link */}
              <div className="mt-10 text-yellow-400 text-lg">
                View Project →
              </div>

            </div>

            {/* right visual */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] rounded-[32px] border border-white/10 bg-white/[0.03] overflow-hidden"
            >

              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />

              {/* fake image area */}
              <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl" />

            </motion.div>

          </motion.div>

          {/* placeholder */}
          <div className="h-[220px] rounded-[32px] border border-white/10 flex items-center justify-center text-gray-500 text-lg">
            More projects coming soon
          </div>

        </div>

      </div>

    </section>
  );
}