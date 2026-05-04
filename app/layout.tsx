import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import CursorGlow from "./components/CursorGlow";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-[#050505] text-white overflow-x-hidden">

        <CursorGlow />

        <SmoothScroll>
          <Navbar />
          <main className="pt-24">{children}</main>
        </SmoothScroll>

      </body>
    </html>
  );
}