"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,       // smoothness
      duration: 1.2,    // timing
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // prevents weird edge cases later
    lenis.on("scroll", () => {});

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}