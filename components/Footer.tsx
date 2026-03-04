export default function Footer() {
  return (
    <footer id="contact" className="border-t mt-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="tracking-[0.2em] text-sm font-semibold mb-2">MAGAZINE</div>
          <p className="text-sm text-gray-600">
            A digital magazine about fashion, visual stories, and personal columns.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-2">Contact</div>
          <p className="text-gray-600">hello@magazine.com</p>
          <p className="text-gray-600">Instagram / TikTok</p>
        </div>

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
