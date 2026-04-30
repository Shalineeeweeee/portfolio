"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function HeroCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(smoothY, [-100, 100], [12, -12]);
  const rotateY = useTransform(smoothX, [-100, 100], [-12, 12]);

  const handleMouseMove = (e: any) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      className="rounded-2xl border border-white/10 bg-black p-6 shadow-xl"
    >
      <h3 className="text-2xl font-semibold">
        Hospital Management System
      </h3>

      <p className="text-gray-400 mt-2">
        Full-stack dashboard with patients & doctors
      </p>

      <div className="mt-6 h-40 rounded-lg bg-yellow-500/10 flex items-center justify-center">
        Preview
      </div>
    </motion.div>
  );
}