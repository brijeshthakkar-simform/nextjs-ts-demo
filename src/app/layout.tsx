import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import ContextProvider from "./providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Management app",
  description: "A simple Task Management app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader height={2} color="#000" />
        <ContextProvider>
          <div className="w-full">{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
