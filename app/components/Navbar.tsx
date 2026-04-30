"use client";

import { motion } from "framer-motion";

const links = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-4">
      <div className="flex items-center justify-between 
        bg-black/70 border border-white/10 
        rounded-full px-6 py-3 backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,0,0,0.8)]">

        <div className="font-semibold text-lg">Shalinee</div>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href="#"
              className="relative text-gray-400 hover:text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {link}
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
              />
            </motion.a>
          ))}
        </div>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm">
          Hire Me
        </button>
      </div>
    </nav>
  );
}