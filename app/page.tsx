"use client";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <>

      {/* HERO */}
      <Hero />

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* PROJECTS */}
      <ProjectsSection />

    </>
  );
}