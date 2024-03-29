import "../globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TweetHub",
  descripition: "A Next.js 13 Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <main className="flex flex-row">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
