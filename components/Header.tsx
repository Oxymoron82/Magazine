"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const linkClass =
    "text-[11px] tracking-[0.28em] uppercase text-[#4A3F3C]/75 hover:text-[#4A3F3C] transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="relative w-full px-8 md:px-12 py-5 flex items-center justify-between bg-[#FFFBEB]/90 backdrop-blur-md shadow-[0_1px_0_rgba(74,63,60,0.12)]">
        <Link
          href="/#home"
          className="text-[12px] md:text-sm tracking-[0.35em] uppercase text-[#4A3F3C] hover:text-black transition"
        >
          The Issue №
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/#columns" className={linkClass}>
            Columns
          </Link>
          <Link href="/#latest" className={linkClass}>
            Latest
          </Link>
          <Link href="/#about" className={linkClass}>
            About
          </Link>
          <Link href="/#editors-note" className={linkClass}>
            Editor’s Note
          </Link>
          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <a
          href="https://www.instagram.com/the_issue_n/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center text-[#4A3F3C]/75 hover:text-[#4A3F3C] transition duration-300 hover:scale-110"
        >
          <FaInstagram className="w-[18px] h-[18px]" />
        </a>
      </div>
    </header>
  );
}