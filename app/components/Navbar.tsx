"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 100) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4"
    >
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
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}