import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFBEB]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/#home" className="tracking-[0.2em] text-sm font-semibold">
          MAGAZINE
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-700">
          <Link href="/#columns" className="hover:text-black transition">
            Columns
          </Link>
       {/*   <Link href="/#stories" className="hover:text-black transition">
            Photo Stories
          </Link> */}
          <Link href="/#latest" className="hover:text-black transition">
            Latest
          </Link>
          <Link href="/#about" className="hover:text-black transition">
            About
          </Link>

          {/* короткий блок Editor’s Note на главной */}
          <Link href="/#editors-note" className="hover:text-black transition">
            Editor&apos;s Note
          </Link>

          {/* футер на главной */}
          <Link href="/#contact" className="hover:text-black transition">
            Contacts
          </Link>
        </nav>

        <a
          href="#"
          className="text-sm text-neutral-600 hover:text-black transition"
        >
          IG
        </a>
      </div>
    </header>
  );
}