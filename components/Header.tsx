"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="relative w-full px-8 md:px-12 py-5 flex items-center justify-between">
        
        {/* 🔹 LOGO */}
        <Link
          href="/#home"
          className="text-[12px] md:text-sm tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          The Issue №
        </Link>

        {/* 🔹 NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/#columns"
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition"
          >
            Columns
          </Link>

          <Link
            href="/#latest"
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition"
          >
            Latest
          </Link>

          <Link
            href="/#about"
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="/#editors-note"
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition"
          >
            Editor’s Note
          </Link>

          <Link
            href="/#contact"
            className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        {/* 🔹 INSTAGRAM */}
        <a
          href="https://www.instagram.com/the_issue_n/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center text-white/70 hover:text-white transition duration-300 hover:scale-110"
        >
          <FaInstagram className="w-[18px] h-[18px]" />
        </a>

        {/* 🔹 BACKGROUND GRADIENT */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-transparent backdrop-blur-md" />
      </div>
    </header>
  );
}