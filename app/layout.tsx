import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Shalinee Portfolio",
  description: "Modern portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>

        <CursorGlow />
        <Navbar />

        {children}

      </body>
    </html>
  );
}