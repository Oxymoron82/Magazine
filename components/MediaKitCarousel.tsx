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
    if (index === currentPage) return;

    setDirection(index > currentPage ? "next" : "previous");
    setCurrentPage(index);
  };

  return (
    <div className="mt-10 w-full md:mt-14">
      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* CAROUSEL */}
        <div className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3EDE3] shadow-[0_24px_80px_rgba(74,63,60,0.14)] sm:aspect-[16/9]">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 96vw, 1600px"
                className="object-contain"
              />
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous media kit page"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:left-4 sm:h-12 sm:w-12 md:left-6 md:h-14 md:w-14"
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
                strokeWidth="1.6"
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
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:right-4 sm:h-12 sm:w-12 md:right-6 md:h-14 md:w-14"
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
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* PAGE COUNTER */}
        <div className="mt-5 flex items-center justify-between px-4 text-[9px] uppercase tracking-[0.26em] text-neutral-500 sm:px-0 sm:text-xs sm:tracking-[0.3em]">
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

      <style>{`
        .media-kit-slide {
          position: absolute;
          inset: 0;
          animation-duration: 600ms;
          animation-timing-function: ease;
          animation-fill-mode: both;
          will-change: opacity, transform;
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
            transform: translateX(20px) scale(0.995);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes mediaKitPrevious {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.995);
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