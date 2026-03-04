export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFBEB]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="tracking-[0.2em] text-sm font-semibold"
        >
          MAGAZINE
        </a>

        {/* NAV — как в тёмном варианте */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-700">
          <a href="#columns" className="hover:text-black transition">
            Columns
          </a>
          <a href="#stories" className="hover:text-black transition">
            Photo Stories
          </a>
          <a href="#latest" className="hover:text-black transition">
            Latest
          </a>
          <a href="#about" className="hover:text-black transition">
            About
          </a>
<a href="#editors-note" className="hover:text-black transition">
  Editor&apos;s Note
</a>
          <a href="#contact" className="hover:text-black transition">
            Contacts
          </a>
        </nav>

        {/* Social / placeholder */}
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
