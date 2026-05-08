"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    desc: "A full-stack healthcare dashboard with patient management, analytics and appointment scheduling.",
  },

  {
    title: "E-Commerce Platform",
    desc: "Modern shopping platform focused on UX, performance and scalable architecture.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 lg:px-12 py-32"
    >

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="mb-28">

          <h2 className="text-5xl md:text-6xl font-bold">
            Selected <span className="text-yellow-400">Projects</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-lg text-lg">
            A curated selection of recent interfaces and digital products.
          </p>

        </div>

        {/* projects */}
        <div className="space-y-40">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`
                grid lg:grid-cols-2 gap-16 items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[32px] border border-white/10 overflow-hidden bg-[#0d0d0d]"
              >

                <div className="h-12 border-b border-white/10 flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">

                  <div className="text-4xl font-bold text-white/10">
                    PREVIEW
                  </div>

                </div>

              </motion.div>

              {/* TEXT */}
              <div>

                <h3 className="text-4xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
                  {project.desc}
                </p>

                <div className="flex gap-3 mt-8 flex-wrap">

                  {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <button className="mt-10 text-yellow-400 text-lg hover:translate-x-1 transition">
                  View Project →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}