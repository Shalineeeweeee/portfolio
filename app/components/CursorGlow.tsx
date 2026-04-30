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
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
        width: "200px",
        height: "200px",
        background:
          "radial-gradient(circle, rgba(255,215,0,0.25), transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  );
}