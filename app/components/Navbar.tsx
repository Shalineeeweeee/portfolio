"use client";

import { motion } from "framer-motion";

const links = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4">

      <div className="flex items-center justify-between
        max-w-7xl mx-auto
        rounded-full px-6 py-3
        bg-black/70 backdrop-blur-xl
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.8)]">

        {/* LOGO */}
        <div className="font-semibold text-white">
          Shalinee
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-400 hover:text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {link}

              {/* underline */}
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium"
        >
          Hire Me
        </motion.button>
      </div>
    </nav>
  );
}