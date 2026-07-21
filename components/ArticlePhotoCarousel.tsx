"use client";

import Image from "next/image";
import { useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ArticlePhotoCarouselProps = {
  images: CarouselImage[];
  caption?: string;
};

export default function ArticlePhotoCarousel({
  images,
  caption = "View more photographs",
}: ArticlePhotoCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  if (!images.length) return null;

  const showPrevious = () => {
    setDirection("previous");

    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setDirection("next");

    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const openImage = (index: number) => {
    setDirection(index > currentImage ? "next" : "previous");
    setCurrentImage(index);
  };

  return (
    <section className="my-14 md:my-20">
      <div className="relative mx-auto w-full">
        <div className="relative">
          {/* IMAGE */}
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 md:aspect-[16/10]">
            <div
              key={images[currentImage].src}
              className={
                direction === "next"
                  ? "article-carousel-slide article-carousel-slide-next"
                  : "article-carousel-slide article-carousel-slide-previous"
              }
            >
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-5 md:h-14 md:w-14"
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
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-5 md:h-14 md:w-14"
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

        {/* CAPTION + COUNTER */}
        <div className="mt-5 flex items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            {caption}
          </p>

          <p className="shrink-0 text-xs uppercase tracking-[0.3em] text-neutral-500">
            {String(currentImage + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
        </div>

        {/* DOTS */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => openImage(index)}
              aria-label={`Open photograph ${index + 1}`}
              aria-current={currentImage === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "w-8 bg-neutral-800"
                  : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .article-carousel-slide {
          position: absolute;
          inset: 0;
          animation-duration: 600ms;
          animation-timing-function: ease;
          animation-fill-mode: both;
        }

        .article-carousel-slide-next {
          animation-name: articleCarouselNext;
        }

        .article-carousel-slide-previous {
          animation-name: articleCarouselPrevious;
        }

        @keyframes articleCarouselNext {
          from {
            opacity: 0;
            transform: translateX(18px) scale(0.995);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes articleCarouselPrevious {
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
          .article-carousel-slide {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}