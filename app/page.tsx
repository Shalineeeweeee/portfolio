import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">

      <CursorGlow />
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Selected{" "}
          <span className="bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <ProjectsSection />
      </div>
    </div>
  );
}