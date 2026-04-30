import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shalinee | Full Stack Developer",
  description:
    "Portfolio of Shalinee – building modern, responsive and animated web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* 🔥 Cursor */}
        <CursorGlow />

        {/* 🔥 Smooth Scroll */}
        <SmoothScroll>

          {/* 🔥 Navbar */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex flex-col">
            {children}
          </main>

        </SmoothScroll>

      </body>
    </html>
  );
}
