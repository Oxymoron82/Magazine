export type ArticleBlock =
  | { type: "p"; text: string; dropCap?: boolean }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      fullBleed?: boolean;
    }
  | {
      type: "gallery";
      images: { src: string; alt: string }[];
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      caption?: string;
      autoplay?: boolean;
    }
  | { type: "hr" }
  | {
      type: "credits";
      items: { label: string; value: string; href?: string }[];
      logo?: {
        src: string;
        href?: string;
        alt?: string;
      };
    };

export type Article = {
  slug: string;
  column: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  // ================= INTIMACY =================
  {
    slug: "sexuality-is-not-a-pose",
    column: "intimacy",
    title: "Sexuality Is Not a Pose — It Is a State",
    category: "Intimacy",
    excerpt:
      "Sexuality is not something we create. It returns the moment we allow ourselves to feel again.",
    image: "/images/Intimacy/1/1.jpg",
    date: "2026-03-04",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `Sexuality is not a pose. It is a state.

I hesitated for a long time before writing about sexuality. There is simply too much falseness around it.

Too often it looks like a performance: rehearsed gestures, a pulled-in stomach, the correct tilt of the head, and that endless instruction to “be desirable in the right way”.

But real life is different.`,
      },
      {
        type: "p",
        text: `Real sexuality is not an image. It is the way you breathe, the way you touch objects, the way you allow yourself to exist in the moment without constantly worrying about how you appear from the outside.`,
      },
      {
        type: "image",
        src: "/images/Intimacy/1/2.jpg",
        alt: "Intimacy visual study",
        fullBleed: true,
      },
      {
        type: "p",
        text: `The most magnetic people are those who are present within themselves.`,
      },
      {
        type: "image",
        src: "/images/Intimacy/1/3.jpg",
        alt: "Intimacy portrait",
        fullBleed: true,
      },
      {
        type: "credits",
        items: [
          { label: "Model", value: "Evgenia Zapolnova" },
          { label: "Photographer", value: "Nikolai Zapolnov" },
          {
            label: "Website",
            value: "beauty.photo",
            href: "https://www.beauty.photo/",
          },
          { label: "Column", value: "INTIMACY" },
        ],
        logo: {
          src: "/images/Intimacy/1/logo.jpg",
          href: "https://www.beauty.photo/",
          alt: "Beauty Photo studio logo",
        },
      },
    ],
  },

  // ================= WORK =================
  {
    slug: "radiaatorikeskus-heating-design-estonia",
    column: "work",
    title: "When Heating Becomes Design: The Business Behind Radiaatorikeskus",
    category: "Work",
    excerpt:
      "How an Estonian company turned a functional heating system into a design element shaping modern interiors.",
    image: "/images/work/radiaatorikeskus/1.jpeg",
    date: "2026-03-17",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `In interior architecture, the boundary between function and aesthetics is becoming increasingly blurred.`,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/1.jpeg",
        alt: "Showroom",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/3.jpeg",
        alt: "Detail",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/4.jpeg",
        alt: "Interior",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/2.jpeg",
        alt: "Architecture",
        fullBleed: true,
      },
      {
        type: "credits",
        items: [
          { label: "Company", value: "Küttemaailm OÜ" },
          { label: "Location", value: "Tallinn, Estonia" },
          {
            label: "Website",
            value: "radiaatorikeskus.ee",
            href: "https://radiaatorikeskus.ee/en/",
          },
        ],
        logo: {
          src: "/images/work/radiaatorikeskus/logo2.png",
          href: "https://radiaatorikeskus.ee/en/",
          alt: "Küttemaailm OÜ logo",
        },
      },
    ],
  },

  // ================= PRACTICE =================
  {
    slug: "marina-smagin-artmari-handmade-dsn",
    column: "practice",
    title: "Marina Smagin — Artmari Handmade DSN",
    category: "Practice",
    excerpt:
      "An eco-couture designer transforming recycled textiles into sculptural couture garments.",
    image: "/images/practice/10.jpg",
    date: "2026-03-20",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `My name is Marina Smagin, and my brand is Artmari Handmade DSN.`,
      },
      {
        type: "image",
        src: "/images/practice/02.jpg",
        alt: "Look",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/practice/03.jpg",
        alt: "Details",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/practice/04.jpg",
        alt: "Editorial",
        fullBleed: true,
      },
      {
        type: "gallery",
        images: [
          { src: "/images/practice/05.jpg", alt: "Practice look 05" },
          { src: "/images/practice/06.jpg", alt: "Practice look 06" },
          { src: "/images/practice/07.jpg", alt: "Practice look 07" },
          { src: "/images/practice/08.jpg", alt: "Practice look 08" },
        ],
      },
      {
        type: "credits",
        items: [
          { label: "Designer", value: "Marina Smagin" },
          { label: "Brand", value: "Artmari Handmade DSN" },
          { label: "Instagram", value: "@artmari_handmade_dsn" },
          {
            label: "Website",
            value: "artmaridsn.com",
            href: "https://www.artmaridsn.com/",
          },
          { label: "Column", value: "PRACTICE" },
        ],
        logo: {
          src: "/images/practice/logo1.jpg",
          href: "https://www.artmaridsn.com/",
          alt: "Artmari Handmade DSN logo",
        },
      },
    ],
  },

  // ================= BECOMING =================
  {
    slug: "trinity-sofia",
    column: "becoming",
    title: "Trinity",
    category: "Becoming",
    excerpt:
      "A visual narrative exploring three energies of a modern woman — power, dominance, and vulnerability.",
    image: "/images/becoming/trinity/cover.jpg",
    date: "2026-04-03",
    blocks: [
      {
        type: "h2",
        text: "THE STORY OF ONE TRANSFORMATION",
      },
      {
        type: "p",
        text: "PROJECT TRINITY. SOFIA S.",
      },
      {
        type: "p",
        dropCap: true,
        text: `Your story is waiting to be told. Our magazine isn’t just about glossy pages; it’s a sandbox for your inner transformation. We believe everyone carries a hidden universe of personas that rarely get the chance to breathe.`,
      },
      {
        type: "p",
        text: `The TRINITY project was born to help you live out your own unique narrative. We take a hero or heroine and—just like in this editorial—craft a conceptual script tailored specifically to your character, your ambitions, and those edges you usually keep in the shadows.`,
      },
      {
        type: "video",
        src: "/images/trinity/video_trinity.mp4",
        autoplay: false,
      },
      
      {
        type: "h2",
        text: "THREE FACES OF THE SOUL",
      },
      {
        type: "p",
        text: `In this session, we tracked a modern woman’s journey through three distinct energies that live harmoniously within one person:`,
      },
      {
        type: "p",
        text: `PHASE 1: Social Drive. The red supercar and a sharp, defiant silhouette—this is the "urban armor." Here, the heroine dictates the rules; she is electric and untouchable.`,
      },
      {
        type: "gallery",
        images: [
          { src: "/images/trinity/11.jpeg", alt: "Trinity phase 1 image 1" },
          { src: "/images/trinity/2.jpeg", alt: "Trinity phase 1 image 2" },
          { src: "/images/trinity/1.jpeg", alt: "Trinity phase 1 image 3" },
        ],
      },
      {
        type: "p",
        text: `PHASE 2: The Power Manifesto. Leopard prints and crimson silk. This is the moment a woman gives herself permission to be dominant and occupy the entire frame.`,
      },
      {
        type: "gallery",
        images: [
          { src: "/images/trinity/27.jpeg", alt: "Trinity phase 2 image 1" },
          { src: "/images/trinity/22.jpeg", alt: "Trinity phase 2 image 2" },
          { src: "/images/trinity/8.jpeg", alt: "Trinity phase 2 image 3" },
          { src: "/images/trinity/25.jpeg", alt: "Trinity phase 2 image 4" },
        ],
      },
      {
        type: "p",
        text: `PHASE 3: True Vulnerability. As the bold colors fade into sheer lace and soft textures, only raw honesty remains.`,
      },
      {
        type: "gallery",
        images: [
          { src: "/images/trinity/21.jpeg", alt: "Trinity phase 3 image 1" },
          { src: "/images/trinity/20.jpeg", alt: "Trinity phase 3 image 2" },
          { src: "/images/trinity/5.jpeg", alt: "Trinity phase 3 image 3" },
          { src: "/images/trinity/3.jpeg", alt: "Trinity phase 3 image 4" },
        ],
      },
      {
        type: "quote",
        text: `"Allowing oneself to be soft in a world of constant hustle is the ultimate form of bravery."`,
      },
      {
        type: "h2",
        text: "FROM THE HEROINE: MARIA",
      },
      {
        type: "p",
        text: `"When I signed up for TRINITY, I expected a beautiful photoshoot. I didn't expect to meet so many different versions of myself in the mirror."`,
      },
      {
        type: "p",
        text: `At first, I felt like an 'Iron Lady' next to that red machine—it was my familiar mask of control. But moving into the red gown, I suddenly felt a surge of power I hadn't tapped into in years.`,
      },
      {
        type: "p",
        text: `The finale in lace... it was almost overwhelming. It felt so strange, yet so right, to let myself be fragile and feel completely safe doing so.`,
      },
      {
        type: "p",
        text: `A massive thank you to the crew! This is a world-class team. They guided me through every detail—from the high-fashion styling to every micro-adjustment in my posing.`,
      },
      {
        type: "p",
        text: `The icing on the cake? We landed a feature in the Spanish magazine Lovely! It was a level of success I hadn't even dared to dream of.`,
      },
      {
        type: "h2",
        text: "READY TO BE OUR NEXT HERO?",
      },
      {
        type: "p",
        text: `We are looking for those ready to meet their own many faces. We don’t just take photos; we write your visual biography in three acts and help you step onto the international stage.`,
      },
      {
        type: "p",
        text: `Ready to script your own transformation? Email us to apply for the TRINITY project.`,
      },
    ],
  },
];