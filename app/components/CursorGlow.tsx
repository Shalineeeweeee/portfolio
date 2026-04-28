"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-6 h-6 rounded-full bg-blue-400/30 blur-md pointer-events-none z-50"
    />
  );
}