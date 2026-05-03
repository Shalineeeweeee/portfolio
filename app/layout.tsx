import { Geist } from "next/font/google";
import "./globals.css";

import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="overflow-x-hidden">

        <CursorGlow />

        <SmoothScroll>
          <Navbar />

          <main className="pt-24">
            {children}
          </main>
        </SmoothScroll>

      </body>
    </html>
  );
}
