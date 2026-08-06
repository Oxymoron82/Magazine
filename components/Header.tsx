"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#4A3F3C]/75 transition hover:text-[#4A3F3C] xl:text-[10px] xl:tracking-[0.22em]";

  const highlightedLinkClass =
    "whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#8A5A2B] transition hover:text-[#4A3F3C] xl:text-[10px] xl:tracking-[0.22em]";

  const projectLinkClass =
    "whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#1F1A17] transition hover:text-[#4A3F3C] xl:text-[10px] xl:tracking-[0.22em]";

  const mobileLinkClass =
    "block border-b border-[#4A3F3C]/10 py-4 text-[12px] uppercase tracking-[0.32em] text-[#4A3F3C]";

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="relative flex w-full items-center justify-between bg-[#FFFBEB]/90 px-5 py-5 shadow-[0_1px_0_rgba(74,63,60,0.12)] backdrop-blur-md md:px-6 lg:px-8 xl:px-12">
        <Link
          href="/"
          className="shrink-0 text-[11px] uppercase tracking-[0.3em] text-[#4A3F3C] transition hover:text-black lg:text-[12px] xl:text-sm xl:tracking-[0.35em]"
          onClick={closeMenu}
        >
          The Issue №
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 md:flex lg:gap-4 xl:gap-5 2xl:gap-6"
        >
          <Link href="/#columns" className={linkClass}>
            Columns
          </Link>

          <Link href="/#latest" className={linkClass}>
            Latest
          </Link>

          <Link href="/about" className={linkClass}>
            About
          </Link>

          <Link href="/partnerships" className={highlightedLinkClass}>
            Partnerships
          </Link>

          <Link href="/services" className={linkClass}>
            Services
          </Link>

          <Link href="/behind-the-issue" className={linkClass}>
            Behind
          </Link>

          <Link href="/editors-note" className={linkClass}>
            Editor&apos;s Note
          </Link>

          <Link href="/studio-journal" className={linkClass}>
            Studio Journal
          </Link>

          <Link href="/trinity" className={projectLinkClass}>
            ✦ Trinity
          </Link>

          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-4 lg:gap-5">
          <a
            href="https://www.instagram.com/the_issue_n/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open The Issue № on Instagram"
            className="flex items-center justify-center text-[#4A3F3C]/75 transition duration-300 hover:scale-110 hover:text-[#4A3F3C]"
          >
            <FaInstagram className="h-[17px] w-[17px] xl:h-[18px] xl:w-[18px]" />
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

      {/* MOBILE NAVIGATION */}
      {open ? (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[#4A3F3C]/10 bg-[#FFFBEB]/95 px-6 pb-6 shadow-[0_12px_35px_rgba(74,63,60,0.08)] backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <Link
              href="/#columns"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Columns
            </Link>

            <Link
              href="/#latest"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Latest
            </Link>

            <Link
              href="/about"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              href="/partnerships"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Partnerships
            </Link>

            <Link
              href="/services"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Services
            </Link>

            <Link
              href="/behind-the-issue"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Behind The Issue
            </Link>

            <Link
              href="/editors-note"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Editor&apos;s Note
            </Link>

            <Link
              href="/studio-journal"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Studio Journal
            </Link>

            <Link
              href="/trinity"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              ✦ Trinity
            </Link>

            <Link
              href="/#contact"
              className="block py-4 text-[12px] uppercase tracking-[0.32em] text-[#4A3F3C]"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}