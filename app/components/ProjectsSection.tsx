import SectionWrapper from "./SectionWrapper";

export default function ProjectsSection() {
  return (
    <SectionWrapper>

      <h2 className="text-3xl font-bold mb-10">
        Selected <span className="text-yellow-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="rounded-xl border border-white/10 bg-black p-6 shadow-xl">
          <h3 className="text-xl font-semibold">
            Hospital Management System
          </h3>

          <p className="text-gray-400 mt-2">
            Full-stack system with APIs and dashboard UI.
          </p>

          <div className="flex gap-2 mt-4 text-sm">
            {["Next.js", "MongoDB", "Tailwind"].map((t) => (
              <span key={t} className="bg-yellow-500/10 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black p-6 flex items-center justify-center text-gray-500">
          Coming Soon
        </div>

      </div>

    </SectionWrapper>
  );
}