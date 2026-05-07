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
      className="fixed pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        width: 160,
        height: 160,
        borderRadius: "999px",
        background:
          "radial-gradient(circle, rgba(250,204,21,0.18), transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}