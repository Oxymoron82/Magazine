"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-[11px] tracking-[0.28em] uppercase text-[#4A3F3C]/75 hover:text-[#4A3F3C] transition";

  const mobileLinkClass =
    "block border-b border-[#4A3F3C]/10 py-4 text-[12px] uppercase tracking-[0.32em] text-[#4A3F3C]";

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="relative w-full px-6 md:px-12 py-5 flex items-center justify-between bg-[#FFFBEB]/90 backdrop-blur-md shadow-[0_1px_0_rgba(74,63,60,0.12)]">
        <Link
          href="/"
          className="text-[12px] md:text-sm tracking-[0.35em] uppercase text-[#4A3F3C] hover:text-black transition"
          onClick={() => setOpen(false)}
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

          <Link href="/about" className={linkClass}>
            About
          </Link>

          <Link
            href="/partnerships"
            className="text-[11px] tracking-[0.28em] uppercase text-[#8A5A2B] hover:text-[#4A3F3C] transition"
          >
            Partnerships
          </Link>

          <Link href="/#editors-note" className={linkClass}>
            Editor’s Note
          </Link>

          <Link
            href="/trinity"
            className="text-[11px] tracking-[0.28em] uppercase text-[#1F1A17] hover:text-[#4A3F3C] transition"
          >
            ✦ Trinity
          </Link>

          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/the_issue_n/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-[#4A3F3C]/75 hover:text-[#4A3F3C] transition duration-300 hover:scale-110"
          >
            <FaInstagram className="w-[18px] h-[18px]" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden text-[11px] uppercase tracking-[0.32em] text-[#4A3F3C]"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden bg-[#FFFBEB]/95 backdrop-blur-md border-t border-[#4A3F3C]/10 px-6 pb-6 shadow-[0_12px_35px_rgba(74,63,60,0.08)]">
          <nav>
            <Link
              href="/#columns"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Columns
            </Link>

            <Link
              href="/#latest"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Latest
            </Link>

            <Link
              href="/about"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/partnerships"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Partnerships
            </Link>

            <Link
              href="/#editors-note"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Editor’s Note
            </Link>

            <Link
              href="/trinity"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              ✦ Trinity
            </Link>

            <Link
              href="/#contact"
              className="block py-4 text-[12px] uppercase tracking-[0.32em] text-[#4A3F3C]"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}