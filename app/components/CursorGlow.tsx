"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverOn = () => setHover(true);
    const hoverOff = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-all duration-200"
      style={{
        transform: `translate(${pos.x - (hover ? 120 : 100)}px, ${
          pos.y - (hover ? 120 : 100)
        }px)`,
        width: hover ? 240 : 200,
        height: hover ? 240 : 200,
        background:
          "radial-gradient(circle, rgba(255,215,0,0.25), transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  );
}