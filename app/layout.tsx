import { Geist } from "next/font/google";
import "./globals.css";

import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-[#050505] text-white overflow-x-hidden">

        {/* Cursor */}
        <CursorGlow />

        {/* Smooth Scroll */}
        <SmoothScroll>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="pt-24 relative">
            {children}
          </main>

        </SmoothScroll>

      </body>
    </html>
  );
}
