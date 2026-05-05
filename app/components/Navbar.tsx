"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between
        bg-black/70 backdrop-blur-xl border border-white/10
        rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">

        <div className="font-semibold">Shalinee</div>

        <div className="hidden md:flex gap-8 text-gray-400">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
        </div>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}