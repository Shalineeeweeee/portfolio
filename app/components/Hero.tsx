"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // smooth motion
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // transform into subtle tilt
  const rotateX = useTransform(smoothY, [0, window.innerHeight], [8, -8]);
  const rotateY = useTransform(smoothX, [0, window.innerWidth], [-8, 8]);

  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">

      {/* MAIN SHAPE */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="w-[260px] h-[260px] 
        border border-yellow-500/20 
        rounded-[30%] 
        bg-yellow-400/5 backdrop-blur-xl"
      />

      {/* ROTATING RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[320px] h-[320px] 
        border border-yellow-500/10 rounded-full"
      />

      {/* SECOND RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] 
        border border-yellow-500/20 rounded-xl"
      />

      {/* SOFT GLOW */}
      <div className="absolute w-[300px] h-[300px] bg-yellow-400/10 blur-[100px] rounded-full" />

    </div>
  );
}