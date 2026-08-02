"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-[10px] lg:text-[11px] tracking-[0.24em] lg:tracking-[0.28em] uppercase text-[#4A3F3C]/75 hover:text-[#4A3F3C] transition whitespace-nowrap";

  const mobileLinkClass =
    "block border-b border-[#4A3F3C]/10 py-4 text-[12px] uppercase tracking-[0.32em] text-[#4A3F3C]";

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="relative flex w-full items-center justify-between bg-[#FFFBEB]/90 px-6 py-5 shadow-[0_1px_0_rgba(74,63,60,0.12)] backdrop-blur-md md:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 text-[12px] uppercase tracking-[0.35em] text-[#4A3F3C] transition hover:text-black md:text-sm"
          onClick={() => setOpen(false)}
        >
          The Issue №
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-9">
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
            className="whitespace-nowrap text-[10px] uppercase tracking-[0.24em] text-[#8A5A2B] transition hover:text-[#4A3F3C] lg:text-[11px] lg:tracking-[0.28em]"
          >
            Partnerships
          </Link>

          <Link href="/services" className={linkClass}>
            Services
          </Link>

          <Link href="/behind-the-issue" className={linkClass}>
            Behind
          </Link>

          <Link href="/#editors-note" className={linkClass}>
            Editor’s Note
          </Link>

          <Link
            href="/trinity"
            className="whitespace-nowrap text-[10px] uppercase tracking-[0.24em] text-[#1F1A17] transition hover:text-[#4A3F3C] lg:text-[11px] lg:tracking-[0.28em]"
          >
            ✦ Trinity
          </Link>

          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href="https://www.instagram.com/the_issue_n/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-[#4A3F3C]/75 transition duration-300 hover:scale-110 hover:text-[#4A3F3C]"
          >
            <FaInstagram className="h-[18px] w-[18px]" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="text-[11px] uppercase tracking-[0.32em] text-[#4A3F3C] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-[#4A3F3C]/10 bg-[#FFFBEB]/95 px-6 pb-6 shadow-[0_12px_35px_rgba(74,63,60,0.08)] backdrop-blur-md md:hidden"
        >
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
              href="/services"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/behind-the-issue"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Behind The Issue
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