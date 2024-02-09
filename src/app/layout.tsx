import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "./globals.css";
import ContextProvider from "./providers/ContextProvider";
import Navbar from "./components/navbar";

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
        <NextTopLoader height={2} color="#fff" />
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <ContextProvider>
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </ContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
