 import Link from "next/link";

export default function CreatedBy() {
  return (
    <section className="bg-editorial-bg text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8 border-y border-neutral-200/70 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-neutral-500">
              The Issue №
            </p>

            <p className="mt-4 max-w-md text-sm leading-[1.8] text-neutral-600">
              An independent editorial magazine designed and developed by
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-serif text-3xl text-editorial-text">
              Maria S.
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              UI/UX Designer · Frontend Developer · Editorial Creative
            </p>

            <Link
              href="/behind-the-issue"
              className="mt-5 inline-block text-xs uppercase tracking-[0.23em] underline decoration-neutral-400 underline-offset-8 transition hover:text-neutral-500"
            >
              Explore the work behind The Issue →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}