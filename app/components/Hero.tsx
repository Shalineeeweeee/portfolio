import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";

export default function HeroCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      className="relative rounded-2xl border border-yellow-500/20 p-6 bg-black/60 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-semibold">
        Hospital Management System
      </h3>

      <p className="text-gray-500 mt-2">
        Full-stack dashboard
      </p>

      <div className="mt-6 h-40 rounded-lg bg-yellow-500/10 flex items-center justify-center">
        Preview
      </div>
    </motion.div>
  );
}