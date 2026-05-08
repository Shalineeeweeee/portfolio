"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none mix-blend-screen"
      style={{
        width: 30,
        height: 30,
        borderRadius: "999px",
        background: "#facc15",
        transform: `translate(${pos.x - 15}px, ${pos.y - 15}px)`,
        transition: "transform 0.05s linear",
      }}
    />
  );
}