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
    { label: "Model", value: "Eugenia Zapolnova" },
    { label: "Photographer", value: "Nikolai Zapolny" },
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
          { src: "/images/practice/05.jpg", alt: "05" },
          { src: "/images/practice/06.jpg", alt: "06" },
          { src: "/images/practice/07.jpg", alt: "07" },
          { src: "/images/practice/08.jpg", alt: "08" },
        ],
      },

      {
  type: "credits",
  items: [
    { label: "Designer", value: "Marina Smagin" },
    { label: "Brand", value: "Artmari Handmade DSN" },
    { label: "Instagram", value: "@artmari_handmade_dsn" },
    { label: "Website", value: "artmaridsn.com", href: "https://www.artmaridsn.com/" },
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
];