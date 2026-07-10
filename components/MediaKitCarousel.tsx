"use client";

import Image from "next/image";
import { useState } from "react";

const mediaKitPages = [1, 2, 3, 4, 5, 6, 7, 8];

export default function MediaKitCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const showPrevious = () => {
    setDirection("previous");

    setCurrentPage((page) =>
      page === 0 ? mediaKitPages.length - 1 : page - 1
    );
  };

  const showNext = () => {
    setDirection("next");

    setCurrentPage((page) =>
      page === mediaKitPages.length - 1 ? 0 : page + 1
    );
  };

  const openPage = (index: number) => {
    setDirection(index > currentPage ? "next" : "previous");
    setCurrentPage(index);
  };

  return (
    <div className="mt-14">
      <div className="relative mx-auto w-full max-w-4xl">
        {/* CAROUSEL */}
        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden bg-white/30 shadow-[0_18px_60px_rgba(74,63,60,0.14)]">
            <div
              key={mediaKitPages[currentPage]}
              className={
                direction === "next"
                  ? "media-kit-slide media-kit-slide-next"
                  : "media-kit-slide media-kit-slide-previous"
              }
            >
              <Image
                src={`/media-kit/${mediaKitPages[currentPage]}.png`}
                alt={`The Issue № media kit page ${
                  mediaKitPages[currentPage]
                }`}
                fill
                priority={currentPage === 0}
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain"
              />
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous media kit page"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:-left-7 md:h-14 md:w-14"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5M11 18L5 12L11 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next media kit page"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:-right-7 md:h-14 md:w-14"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* PAGE COUNTER */}
        <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
          <span>Collaboration Book</span>

          <span>
            {String(currentPage + 1).padStart(2, "0")} /{" "}
            {String(mediaKitPages.length).padStart(2, "0")}
          </span>
        </div>

        {/* DOTS */}
        <div className="mt-5 flex justify-center gap-2">
          {mediaKitPages.map((page, index) => (
            <button
              key={page}
              type="button"
              onClick={() => openPage(index)}
              aria-label={`Open media kit page ${page}`}
              aria-current={currentPage === index ? "page" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-8 bg-neutral-800"
                  : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .media-kit-slide {
          position: absolute;
          inset: 0;
          animation-duration: 600ms;
          animation-timing-function: ease;
          animation-fill-mode: both;
        }

        .media-kit-slide-next {
          animation-name: mediaKitNext;
        }

        .media-kit-slide-previous {
          animation-name: mediaKitPrevious;
        }

        @keyframes mediaKitNext {
          from {
            opacity: 0;
            transform: translateX(18px) scale(0.995);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes mediaKitPrevious {
          from {
            opacity: 0;
            transform: translateX(-18px) scale(0.995);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .media-kit-slide {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}