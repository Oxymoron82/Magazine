export default function SubmitBlock() {
  return (
    <section className="mt-20 md:mt-24">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="rounded-2xl border border-neutral-200 bg-white/50 p-8 md:p-12 text-center">
          
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Editorial
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-neutral-900">
            Submit your story
          </h2>

          <p className="mt-4 text-neutral-700 max-w-xl mx-auto leading-relaxed">
            We are always open to new voices, visual stories, and personal perspectives.
            If you’d like to be featured, send your work to our editorial team.
          </p>

          <a
            href="mailto:submissions@theissue.xyz"
            className="inline-block mt-8 px-6 py-3 border border-neutral-900 rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition"
          >
            submissions@theissue.xyz
          </a>

        </div>
      </div>
    </section>
  );
}