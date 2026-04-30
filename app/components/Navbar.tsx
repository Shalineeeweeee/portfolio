"use client";

import { motion } from "framer-motion";

const links = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4">
      <div className="flex items-center justify-between backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          Shalinee
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href="#"
              className="relative text-gray-300 hover:text-white transition-colors"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {link}

              {/* underline animation */}
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm"
        >
          Hire Me
        </motion.button>
      </div>
    </nav>
  );
}