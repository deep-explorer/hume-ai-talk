import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { Navbar } from "@/components/containers/Navbar";
import { Footer } from "@/components/containers/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex items-center justify-center w-full min-h-[100vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
