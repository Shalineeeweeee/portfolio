"use client";

import { motion } from "framer-motion";

export default function HeroBlob() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">

      {/* main blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          borderRadius: ["40%", "50%", "40%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[260px] h-[260px] 
        bg-yellow-400/20 
        blur-[80px] rounded-full"
      />

      {/* secondary glow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[180px] h-[180px] 
        bg-yellow-500/10 
        blur-[60px] rounded-full"
      />

    </div>
  );
}