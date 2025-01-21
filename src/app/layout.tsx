import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/__molecules/Header";
import Footer from "@/components/__molecules/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center  ">
        <>
          <Header />
        </>
        {children}
        <Footer />
      </body>
    </html>
  );
}
