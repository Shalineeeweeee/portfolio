"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    setHidden(latest > prev && latest > 100);
  });

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/70 backdrop-blur border border-white/10 px-6 py-3 rounded-full">

        <div>Shalinee</div>

        <div className="hidden md:flex gap-8 text-gray-400">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
        </div>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}