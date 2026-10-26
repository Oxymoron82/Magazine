import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <Image
        src="/images/editorial-2.jpg"
        alt="Helsinki at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center">

        <h1 className="cover-title">
          Individual stories.
        </h1>

        <h2 className="cover-subtitle">
          Fashion identity.
        </h2>

        <div className="cover-line mt-10 h-px w-20 bg-white/70" />

        <Link
          href="/magazine"
          className="cover-button mt-12 border border-white/70 px-10 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white hover:text-black"
        >
          Enter The Issue
          <span className="ml-4">→</span>
        </Link>

      </div>

      <style>{`

        .cover-title {
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.045em;

          opacity: 0;
          transform: translateX(-150px);

          animation: slideFromLeft 1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .cover-subtitle {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.2;

          margin-top: 12px;

          opacity: 0;
          transform: translateX(150px);

          animation: slideFromRight 1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s forwards;
        }

        .cover-line {
          opacity: 0;
          animation: fadeIn 1s ease 1.5s forwards;
        }

        .cover-button {
          opacity: 0;
          transform: translateY(25px);

          animation: buttonAppear 1s ease
            1.8s forwards;
        }

        @keyframes slideFromLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes buttonAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cover-title,
          .cover-subtitle,
          .cover-line,
          .cover-button {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

    </main>
  );
}