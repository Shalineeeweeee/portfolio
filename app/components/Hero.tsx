"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

export default function HeroCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth the motion (important)
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(smoothY, [-100, 100], [12, -12]);
  const rotateY = useTransform(smoothX, [-100, 100], [-12, 12]);

  // glow follows mouse
  const glowX = useTransform(smoothX, [-100, 100], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [-100, 100], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl border border-yellow-500/20 p-6 bg-black/60 backdrop-blur-xl overflow-hidden"
    >
      {/* ✨ Glow layer */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,215,0,0.15), transparent 60%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold">
          Hospital Management System
        </h3>

        <p className="text-gray-400 mt-2">
          Full-stack dashboard with patients, doctors & appointments
        </p>

        {/* preview box */}
        <motion.div
          className="mt-6 h-40 rounded-lg bg-yellow-500/10 flex items-center justify-center"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          Preview
        </motion.div>
      </div>
    </motion.div>
  );
}