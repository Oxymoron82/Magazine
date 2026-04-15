"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/25 backdrop-blur-md">
      <div className="w-full px-8 md:px-12 py-5 flex items-center justify-between">
        <Link
          href="/#home"
          className="tracking-[0.2em] text-base md:text-lg font-semibold text-white"
        >
          MAGAZINE
        </Link>

        <nav className="hidden md:flex gap-8 text-base font-semibold text-white/95">
          <Link href="/#columns" className="hover:text-white transition">
            Columns
          </Link>
          <Link href="/#latest" className="hover:text-white transition">
            Latest
          </Link>
          <Link href="/#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/#editors-note" className="hover:text-white transition">
            Editor&apos;s Note
          </Link>
          <Link href="/#contact" className="hover:text-white transition">
            Contacts
          </Link>
        </nav>

        {/* 🔥 Instagram link */}
        <a
          href="https://www.instagram.com/the_issue_n/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-white/95 hover:text-white transition"
        >
          IG
        </a>
      </div>
    </header>
  );
}