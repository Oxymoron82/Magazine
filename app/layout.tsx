import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "GpHgqBE_vaKUdIqV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} bg-[#FFFBEB] text-neutral-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}