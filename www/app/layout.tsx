import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Skalara",
  description: "Automated project management for small tech teams.",
};

const SatoshiFont = localFont({
  src: "../lib/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background antialiased font-satoshi`,
          GeistSans.variable,
          GeistMono.variable,
          SatoshiFont.variable
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
