"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const rx = useTransform(useSpring(y), [0, window.innerHeight], [8, -8]);
  const ry = useTransform(useSpring(x), [0, window.innerWidth], [-8, 8]);

  return (
    <section id="home" className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-6xl font-bold">
            Hi, I am <span className="text-yellow-400">Shalinee</span>
          </h1>

          <p className="mt-4 text-gray-400">
            I build modern web apps with smooth UI.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-400 px-6 py-2 text-black rounded-lg">Work</button>
            <button className="border px-6 py-2 rounded-lg">Contact</button>
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          <motion.div style={{ rotateX: rx, rotateY: ry }} className="w-[260px] h-[260px] border border-yellow-500/20 rounded-[28%]" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity }} className="absolute w-[320px] h-[320px] border border-yellow-500/10 rounded-full" />
          <div className="absolute w-[300px] h-[300px] bg-yellow-400/10 blur-[100px] rounded-full" />
        </div>

      </div>
    </section>
  );
}