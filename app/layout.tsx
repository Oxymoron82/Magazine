import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Playfair_Display,
  Inter,
  Bodoni_Moda,
  Inria_Serif,
} from "next/font/google";
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

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theissue.xyz"),
  title: {
    default: "The Issue",
    template: "%s | The Issue",
  },
  description:
    "The Issue is an independent online magazine about transformation, business, visual culture, and personal stories.",
  alternates: {
    canonical: "https://theissue.xyz",
  },
  verification: {
    google: "GpHgqBE_vaKUdIqV",
    other: {
      "p:domain_verify": "c0282f57a5bf9225bba2f1ddfeb5e36d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} ${bodoni.variable} ${inria.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}