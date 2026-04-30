"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverOn = () => setIsHovering(true);
    const hoverOff = () => setIsHovering(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-all duration-200"
      style={{
        transform: `translate(${pos.x - (isHovering ? 100 : 75)}px, ${
          pos.y - (isHovering ? 100 : 75)
        }px)`,
        width: isHovering ? "200px" : "150px",
        height: isHovering ? "200px" : "150px",
        background:
          "radial-gradient(circle, rgba(255,0,0,0.25), transparent 60%)",
        filter: "blur(50px)",
      }}
    />
  );
}