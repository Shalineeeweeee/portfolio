"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
        background: "radial-gradient(circle, rgba(255,215,0,0.25), transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  );
}