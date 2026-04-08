import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Playfair_Display, Inter, Libre_Bodoni } from "next/font/google";

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

const didot = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-didot",
  display: "swap",
  weight: ["400", "500"],
});

// 🔥 добавили Bebas из папки /public/fonts
const bebas = localFont({
  src: "../public/fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} ${didot.variable} ${bebas.variable} bg-[#FFFBEB] text-neutral-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}