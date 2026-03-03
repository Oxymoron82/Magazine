import Link from "next/link";

import Image from "next/image";
import EditorialCard from "@/components/EditorialCard";

export default function HomePage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section id="home" className="relative h-[90vh] w-full scroll-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/editorial-1.jpg"
            alt="Editorial cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-24">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-neutral-700 mb-6">
              Exhibition Magazine
            </p>

            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-none font-semibold">
              THE ISSUE
             
            </h1>

            <p className="mt-6 max-w-md text-neutral-700">
              An Independent Editorial Platform
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GRID — Columns */}
      <section
        id="columns"
        className="max-w-7xl mx-auto px-6 py-32 scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-24">
          <Link href="/fashion-story" className="block">
  <EditorialCard
          
            category="Fashion story"
            title="Saint Laurent by Anthony Vaccarello"
            image="/images/card-1.jpg"
          />
          </Link>
          <EditorialCard
            category="Beauty"
            title="Peter Philips + Pierre Debusschere"
            image="/images/card-2.jpg"
          />
          <EditorialCard
            category="Exploration"
            title="Isamaya Ffrench Filter"
            image="/images/card-3.jpg"
          />
        </div>
      </section>

      {/* FULL WIDTH EDITORIAL — Photo Stories */}
      <section
        id="stories"
        className="relative h-[80vh] w-full my-32 scroll-mt-24"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Featured editorial"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black mb-6">
              Featured editorial
            </p>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-tight">
              A Study
              <br />
              in Silence
            </h2>
          </div>
        </div>
      </section>

      {/* EDITORIAL GRID — Latest */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-24">
          <EditorialCard
            category="Issue"
            title="Loewe × Castor Fleuriste"
            image="/images/card-4.jpg"
          />

          {/* 1) Первая из пары: дуга к центру — скругление сверху справа */}
          <EditorialCard
            category="Design"
            title="Ronan Bouroullec"
            image="/images/card-5.jpg"
            mediaStyle={{ borderTopRightRadius: "140px" }}
          />

          {/* 2) Вторая из пары: зеркально — скругление сверху слева */}
          <EditorialCard
            category="Fashion story"
            title="Boris Ovin + Imruh Asha"
            image="/images/card-6.jpg"
            mediaStyle={{ borderTopLeftRadius: "140px" }}
          />

          <EditorialCard
            category="Portrait"
            title="Bibi Borthwick + Jasmine Hassett"
            image="/images/card-7.jpg"
          />
        </div>
      </section>
    </main>
  );
}
