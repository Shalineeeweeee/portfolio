"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Healthcare dashboard with patient management, analytics and appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "E-Commerce Platform",
    desc: "Performance-focused shopping experience with modern UI and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-6 lg:px-10 py-40"
    >

      <div className="max-w-[1600px] mx-auto">

        {/* heading */}
        <div className="mb-28">

          <div className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Selected Work
          </div>

          <h2 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-tight">
            Featured Projects
          </h2>

        </div>

        {/* projects */}
        <div className="space-y-40">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`
                grid lg:grid-cols-2 gap-20 items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[40px]"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover brightness-75 hover:scale-105 transition duration-700"
                />

              </motion.div>

              {/* TEXT */}
              <div>

                <div className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-5xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* tech */}
                <div className="mt-10 flex gap-3 flex-wrap">

                  {["Next.js", "MongoDB", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm border border-white/10 px-4 py-2 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <button className="mt-12 text-yellow-400 text-lg hover:translate-x-2 transition">
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