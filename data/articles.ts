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
      "An intimacy and fashion editorial on sensuality, identity, and presence, exploring how sexuality returns through feeling, embodiment, and contemporary visual storytelling.",
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
        alt: "Sensual intimacy fashion editorial photography and visual study",
        fullBleed: true,
      },
      {
        type: "p",
        text: `The most magnetic people are those who are present within themselves.`,
      },
      {
        type: "image",
        src: "/images/Intimacy/1/3.jpg",
        alt: "Editorial portrait about intimacy, identity, and feminine presence",
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
      "A business and interior design feature on Radiaatorikeskus, an Estonian company turning heating systems into architectural design elements through entrepreneurship, modern interiors, and functional aesthetics.",
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
        alt: "Radiaatorikeskus showroom with interior design and heating solutions in Estonia",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/3.jpeg",
        alt: "Designer heating detail by Radiaatorikeskus for modern interiors",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/4.jpeg",
        alt: "Modern interior architecture featuring designer heating elements",
        fullBleed: true,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/2.jpeg",
        alt: "Architectural heating and interior design project in Tallinn Estonia",
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
      "An editorial interview with eco-couture designer Marina Smagin on sustainable fashion, handmade couture, recycled textiles, and contemporary creative practice in fashion design.",
    image: "/images/practice/10.jpg",
    date: "2026-03-20",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `My name is Marina Smagin, and my brand is Artmari Handmade DSN (Instagram @artmari_handmade_dsn). I am an eco-couture fashion designer working at the intersection of sustainability and high fashion craftsmanship.`,
      },

      {
        type: "p",
        text: `My work focuses on transforming unconventional materials into couture garments. I create pieces using recycled textiles, including neckties and repurposed fabrics, combining ecological design principles with traditional hand couture techniques.`,
      },

      {
        type: "image",
        src: "/images/practice/02.jpg",
        alt: "Eco couture fashion editorial look by designer Marina Smagin",
        fullBleed: true,
      },

      {
        type: "p",
        text: `Each garment is created largely by hand, reflecting a slow fashion philosophy where craftsmanship, sustainability, and artistic storytelling meet.`,
      },

      {
        type: "h2",
        text: "PROJECT",
      },

      {
        type: "p",
        text: `This editorial presents two couture gowns created for an international fashion event in Italy and designed for contestants appearing on the red carpet.`,
      },

      {
        type: "image",
        src: "/images/practice/17.jpg",
        alt: "Handmade couture details in sustainable fashion and eco couture design",
        fullBleed: true,
      },

      {
        type: "p",
        text: `Both dresses are part of my eco-couture concept. The garments combine recycled materials with traditional couture techniques. Approximately 80% of the work was completed entirely by hand.`,
      },

      {
        type: "p",
        text: `The creation of the two gowns took nearly five months of intensive craftsmanship. Each layer, structure, and decorative element was carefully constructed to achieve a sculptural silhouette while maintaining sustainable design principles.`,
      },

      {
        type: "h2",
        text: "DESIGN CONCEPT",
      },

      {
        type: "image",
        src: "/images/practice/04.jpg",
        alt: "Sustainable fashion editorial portrait by eco couture designer Marina Smagin",
        fullBleed: true,
      },

      {
        type: "p",
        text: `My design philosophy is based on the idea that sustainability can coexist with haute couture. I explore how discarded materials can be transformed into luxury garments.`,
      },

      {
        type: "p",
        text: `In my work, materials such as ties and reclaimed fabrics become the foundation for couture silhouettes. Through hand draping, layering, and detailed manual construction, the garments evolve into expressive pieces that combine ecological awareness with artistic fashion design.`,
      },

      {
        type: "gallery",
        images: [
          {
            src: "/images/practice/05.jpg",
            alt: "Sustainable couture garment by designer Marina Smagin",
          },
          {
            src: "/images/practice/06.jpg",
            alt: "Eco couture fashion detail in editorial photography",
          },
          {
            src: "/images/practice/07.jpg",
            alt: "Handmade designer gown created from recycled textiles for fashion editorial",
          },
          {
            src: "/images/practice/16.jpg",
            alt: "Creative fashion editorial featuring sculptural sustainable couture",
          },
        ],
      },

      {
        type: "p",
        text: `The goal is to demonstrate that sustainable fashion can be both innovative and visually striking.`,
      },

      {
        type: "h2",
        text: "EDITORIAL",
      },

      {
        type: "p",
        text: `The editorial photoshoot highlights the dramatic textures and sculptural volumes of the gowns. Set against bold backgrounds and strong lighting, the images emphasize movement, craftsmanship, and the layered construction of the dresses.`,
      },

      {
        type: "p",
        text: `The visual concept reflects the transformation of recycled materials into couture forms — from raw textile elements into refined fashion pieces designed for red carpet presence.`,
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
    title: "Trinity — Fashion Editorial Photography Story",
    category: "Becoming",
    excerpt:
      "A fashion editorial photography story about feminine transformation, identity, empowerment, and personal evolution through the three emotional phases of Project Trinity.",
    image: "/images/trinity/115.jpg",
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
          {
            src: "/images/trinity/11.jpeg",
            alt: "Fashion editorial photography with red car in Trinity phase one",
          },
          {
            src: "/images/trinity/58.jpeg",
            alt: "Empowered female portrait from Project Trinity phase one",
          },
          {
            src: "/images/trinity/1.jpeg",
            alt: "Fashion editorial image of feminine confidence and social drive",
          },
          {
            src: "/images/trinity/55.jpeg",
            alt: "Contemporary visual storytelling in Trinity fashion editorial phase one",
          },
        ],
      },
      {
        type: "p",
        text: `PHASE 2: The Power Manifesto. Leopard prints and crimson silk. This is the moment a woman gives herself permission to be dominant and occupy the entire frame.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/trinity/27.jpeg",
            alt: "Crimson silk fashion editorial look in Trinity phase two",
          },
          {
            src: "/images/trinity/22.jpeg",
            alt: "Leopard print fashion styling in Project Trinity photography story",
          },
          {
            src: "/images/trinity/57.jpeg",
            alt: "Female empowerment editorial portrait in Trinity phase two",
          },
          {
            src: "/images/trinity/25.jpeg",
            alt: "Dominant fashion pose in Trinity editorial photography story",
          },
          {
            src: "/images/trinity/56.jpeg",
            alt: "Contemporary editorial image of feminine power and identity",
          },
          {
            src: "/images/trinity/4.jpeg",
            alt: "High-fashion visual storytelling in Trinity phase two",
          },
        ],
      },
      {
        type: "p",
        text: `PHASE 3: True Vulnerability. As the bold colors fade into sheer lace and soft textures, only raw honesty remains.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/trinity/21.jpeg",
            alt: "Soft lace fashion editorial portrait in Trinity phase three",
          },
          {
            src: "/images/trinity/20.jpeg",
            alt: "Vulnerable feminine fashion image from Project Trinity editorial story",
          },
          {
            src: "/images/trinity/5.jpeg",
            alt: "Delicate editorial styling in the final Trinity transformation phase",
          },
          {
            src: "/images/trinity/3.jpeg",
            alt: "Intimate visual storytelling in Trinity phase three photography editorial",
          },
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
        text: `“When I came to the TRINITY project, I thought it would be just a beautiful photoshoot. I didn’t know it would become a meeting with myself.”`,
      },
      {
        type: "p",
        text: `At first, it felt like I was stepping back into a familiar role. Next to the red car, I felt strong, composed — the version of me that always keeps everything under control. It felt familiar, even safe.`,
      },

      {
        type: "p",
        text: `But then something began to shift.`,
      },
      {
        type: "p",
        text: `In the red dress, I suddenly felt a kind of strength I hadn’t noticed in myself for a long time. Not the kind you perform, but the kind you simply allow yourself to feel — without effort.`,
      },
      {
        type: "p",
        text: `And in the final scene, in lace, everything became quiet. As if there was no longer a need to prove anything. What remained was just a feeling — to be. To feel. To allow softness without hiding it.`,
      },
      {
        type: "p",
        text: `It was a little scary. And at the same time, it felt completely right.`,
      },

      {
        type: "p",
        text: `I am deeply grateful to the team for the way they guided me through this process. For the attention to detail, for the support, for creating a space where I could be different versions of myself.`,
      },

      {
        type: "p",
        text: `And it still feels almost unreal that this story found its continuation — being featured in the Spanish magazine Lovely became something more than just a result of the shoot.`,
      },

      {
        type: "p",
        text: `It felt like a confirmation: when you allow yourself to be real, it always resonates.`,
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