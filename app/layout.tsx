import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Shalinee | Full Stack Developer",
  description: "Modern web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

        {/* cursor */}
        <CursorGlow />

        {/* smooth scroll */}
        <SmoothScroll>

          {/* navbar */}
          <Navbar />

          {/* main content */}
          <main className="pt-24">
            {children}
          </main>

        </SmoothScroll>

      </body>
    </html>
  );
}
