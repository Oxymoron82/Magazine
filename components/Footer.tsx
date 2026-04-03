export default function Footer() {
  return (
    <footer id="contact" className="border-t mt-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        
        {/* ABOUT */}
        <div>
          <div className="tracking-[0.2em] text-sm font-semibold mb-2">MAGAZINE</div>
          <p className="text-sm text-gray-600">
            A digital magazine about fashion, visual stories, and personal columns.
          </p>
        </div>

        {/* CONTACT / SUBMIT */}
        <div className="text-sm">
          <div className="font-medium mb-2">Contact</div>

          <a
            href="mailto:hello@theissue.xyz"
            className="block text-gray-600 hover:text-black transition"
          >
            hello@theissue.xyz
          </a>

          <div className="mt-3 font-medium">Submit your story</div>

          <a
            href="mailto:submissions@theissue.xyz"
            className="block text-gray-600 hover:text-black transition"
          >
            submissions@theissue.xyz
          </a>

          <p className="text-gray-500 mt-2 text-xs">
            For pitches, articles, and visual stories
          </p>
        </div>

        {/* NEWSLETTER */}
        <div className="text-sm">
          <div className="font-medium mb-2">Newsletter</div>
          <div className="flex gap-2">
            <input
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="Email"
            />
            <button className="border rounded-lg px-3 py-2 hover:bg-black hover:text-white transition">
              Join
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}