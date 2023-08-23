import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import classNames from "classnames";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "TweetHub",
  descripition: "A Next.js 13 Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={classNames(inter.className, "bg-dark-1")}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
