"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.className =
      "fixed w-40 h-40 bg-red-500/20 blur-3xl rounded-full pointer-events-none z-50";

    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX - 80 + "px";
      glow.style.top = e.clientY - 80 + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
}