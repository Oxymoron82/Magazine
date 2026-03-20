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
  position?: "center" | "top";
    }
  | { type: "hr" }
  | { type: "credits"; items: { label: string; value: string; href?: string }[]; };

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
        type: "quote",
        text:
          "Real sexuality is not an image. It is the way you breathe, the way you touch objects, the way you allow yourself to be present.",
      },

      {
        type: "p",
        text: `Over the years of working with visual projects — photo shoots, models, photographers — I began noticing something strange. Many people live as if their body were simply a vehicle for their mind.

We live in tasks, deadlines, and endless internal dialogue. Meanwhile the body is always postponed — not good enough yet, later, someday when I lose weight, when I am younger, when I finally get enough sleep.`,
      },

      {
        type: "image",
        src: "/images/Intimacy/1/2.jpg",
        alt: "Intimacy visual study",
        caption: "Intimacy — visual study",
        fullBleed: true,
      },

      {
        type: "p",
        text: `And that is exactly where sexuality quietly fades.

Not because of wrinkles. Not because of numbers on a scale.

It disappears because we are simply not at home in our bodies anymore.`,
      },

      {
        type: "p",
        text: `The most magnetic people I have ever photographed were never the most “perfect” by conventional standards. They were the people most present within themselves.

You can see it in a single movement.

In the way someone sits down in a chair without trying to hide anything. In the way they hold a gaze. In the way they allow themselves to take space in a room.`,
      },

      {
        type: "p",
        text: `In this column I want to speak not only about beauty, but about restoration.

About how people reconnect with themselves after the hardest moments.

How the desire to live and feel returns after a painful divorce.

How self-perception changes when the body goes through motherhood or through the quiet transformations of age.

How an honest boudoir photoshoot can become a turning point — the moment when, for the first time in a long while, you look in the mirror and see not a function, but a woman.`,
      },

      {
        type: "p",
        text: `For some people it will be a story about becoming alive again after a long emotional freeze.

For others, it will be about accepting a new vulnerability — and discovering that it is, unexpectedly, a form of strength.`,
      },

      {
        type: "h2",
        text: "Boudoir: Not About Lingerie, But About Honesty",
      },

      {
        type: "p",
        text: `Why do we begin with boudoir?

Because for me it has never been about seduction.

It is the moment when a person remains alone with themselves — yet allows another person, a photographer, to look.

That is an immense act of trust and courage.

It is not “look how beautiful I am”.

It is: “This is me — exactly as I am right now. And I do not need to apologise for it.”`,
      },

      {
        type: "image",
        src: "/images/Intimacy/1/3.jpg",
        alt: "Intimacy portrait",
        caption: "Body & intimacy — a quiet portrait",
        fullBleed: true,
      },

      {
        type: "h2",
        text: "A Thought To Begin With",
      },

      {
        type: "p",
        text: `Sexuality is not something that needs to be created or imitated.

It only needs to stop being blocked.

The moment you allow yourself to feel your body again — the warmth of your skin, the depth of a breath, the freedom of movement — desire returns on its own.

Without instructions. Without performance.

It simply awakens.

Because you have finally come home to yourself.

And perhaps that recognition is where the most important chapter of your life begins.`,
      },

      {
        type: "hr",
      },

      {
        type: "h2",
        text: "Personal Story",
      },

      {
        type: "h2",
        text: "Why I Choose to Photograph Myself Nude",
      },

      {
        type: "p",
        text: `Model: Evgenia Zapolnova
Photographer: Nikolai Zapolnov`,
      },

      {
        type: "p",
        text: `“I am 38 years old and have been in a relationship for nineteen years.

When I was younger I experienced harassment, and very early on I learned that male attention could be dangerous.

For years I tried to make myself less sexual in order to feel safe. I hid behind humour and self-irony.

I never believed my body was good enough. I felt that everyone saw only my imperfections. Even when my partner told me I was beautiful, I assumed he simply had bad taste.”`,
      },

      {
        type: "quote",
        text: "Later might never come. Life has to be lived now.",
      },

      {
        type: "p",
        text: `“And suddenly I discovered that I am attractive. That I am strong enough to face my fears.

Today I photograph myself nude because this is me.

Technically my body may look worse than it did at twenty, but in reality I feel far more sexual now than I ever did then.

For me it is control. It is a challenge. And it is completely, one hundred percent — about me.”`,
      },

      {
        type: "credits",
        items: [
          { label: "Model", value: "Evgenia Zapolnova" },
          { label: "Photographer", value: "Nikolai Zapolnov" },
          { label: "Column", value: "INTIMACY" },
        ],
      },
    ],
  },

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
        text: `In interior architecture, the boundary between function and aesthetics is becoming increasingly blurred. Objects that once existed purely as technical necessities are now expected to contribute to the atmosphere of a space.

Radiators are one of the most interesting examples of this shift.`,
      },

      {
        type: "p",
        text: `Estonian company Radiaatorikeskus has built its business around this idea — that heating solutions can be both practical and visually integrated into contemporary interiors.`,
      },

      {
        type: "image",
        src: "/images/work/radiaatorikeskus/1.jpeg",
        alt: "Radiaatorikeskus showroom",
        caption:
          "Radiaatorikeskus showroom and design radiators in contemporary interior spaces.",
        fullBleed: true,
      },

      {
        type: "p",
        text: `Founded in the early 2000s, Radiaatorikeskus specializes in heating systems and designer radiators for residential and commercial spaces. Over the years, the company has expanded its focus from traditional heating equipment to more thoughtful solutions where engineering meets design.`,
      },
{
  type: "image",
  src: "/images/work/radiaatorikeskus/3.jpeg",
  alt: "Radiator detail",
  caption: "Details of contemporary radiator design",
  fullBleed: true,
},
      {
        type: "p",
        text: `Today Radiaatorikeskus collaborates with several leading European manufacturers and represents brands such as Jaga, Arbonia, Zehnder, Licon, Stelrad and others. This allows the company to offer a wide range of products — from practical everyday heating solutions to distinctive design pieces that become part of the interior concept.`,
      },

      {
        type: "quote",
        text:
          "The goal is not simply to heat a space but to find solutions that respond to the architecture and character of the environment.",
      },
{
  type: "image",
  src: "/images/work/radiaatorikeskus/4.jpeg",
  alt: "Interior integration",
  caption: "Radiators integrated into interior architecture",
  fullBleed: true,
},
      {
        type: "p",
        text: `As contemporary interiors increasingly emphasize minimalism and visual harmony, heating elements can no longer remain hidden utilities. Designers and architects are looking for solutions that complement materials, colors and spatial composition.`,
      },

      {
        type: "image",
        src: "/images/work/radiaatorikeskus/2.jpeg",
        alt: "Heating solutions integrated into architecture",
        caption:
          "Heating systems integrated into contemporary architectural spaces.",
        fullBleed: true,
      },

      {
        type: "p",
        text: `Radiaatorikeskus also works with custom solutions. Radiators can be integrated with mirrors, lighting elements or unique materials, turning a technical object into an expressive design feature.`,
      },

      {
        type: "p",
        text: `The company continues to expand its presence in the Baltic region. A new showroom in Tallinn will present modern heating solutions within a broader context of interior design and architecture.`,
      },

      {
        type: "p",
        text: `In a world where technology, comfort and aesthetics are becoming inseparable, businesses like Radiaatorikeskus demonstrate how engineering can move beyond function and become part of the visual language of contemporary spaces.`,
      },

      {
  type: "credits",
  items: [
    { label: "Company", value: "Küttemaailm OÜ" },
    { label: "Location", value: "Tallinn, Estonia" },
    { label: "Website", value: "radiaatorikeskus.ee", 
      href: "https://radiaatorikeskus.ee/en/" },
  ],
},
      {
        type: "hr",
      },

      {
        type: "h2",
        text: "Collaborate with The Issue",
      },

      {
        type: "p",
        text: `The Issue collaborates with brands, entrepreneurs and creative professionals whose work shapes contemporary life, business and culture.`,
      },

      {
        type: "p",
        text: `We feature stories about people building companies, creating products, designing spaces and developing ideas that influence how we live and work today.`,
      },

      {
        type: "p",
        text: `Our platform brings together business, design, culture and personal journeys — from emerging brands and independent creators to established companies and founders.`,
      },

      {
        type: "h2",
        text: "We are open to collaborations with:",
      },

      {
        type: "p",
        text: `• brands and companies
• entrepreneurs and founders
• designers and creative studios
• architects and developers
• hotels, restaurants and concept spaces
• innovative products and new businesses`,
      },

      {
        type: "p",
        text: `Each collaboration is presented as an editorial story — focusing on people, ideas and the process behind the work.`,
      },

      {
        type: "p",
        text: `If you would like to share your story with The Issue audience, we would be happy to hear from you.`,
      },

      {
        type: "p",
        text: `Contact: collaborate@theissue.xyz`,
      },
    ],
  },

  {
  slug: "marina-smagin-artmari-handmade-dsn",
  column: "practice",
  title: "Marina Smagin — Artmari Handmade DSN",
  category: "Practice",
  excerpt:
    "An eco-couture designer transforming recycled textiles into sculptural couture garments through hand craftsmanship and slow fashion principles.",
  image: "/images/practice/01.jpg",
  date: "2026-03-20",
  blocks: [
    {
      type: "p",
      dropCap: true,
      text: `My name is Marina Smagin, and my brand is Artmari Handmade DSN. I am an eco-couture fashion designer working at the intersection of sustainability and high fashion craftsmanship.

My work focuses on transforming unconventional materials into couture garments. I create pieces using recycled textiles, including neckties and repurposed fabrics, combining ecological design principles with traditional hand couture techniques.

Each garment is created largely by hand, reflecting a slow fashion philosophy where craftsmanship, sustainability, and artistic storytelling meet.`,
    },

    {
      type: "image",
      src: "/images/practice/02.jpg",
      alt: "Marina Smagin couture editorial",
      caption: "Eco-couture silhouettes by Artmari Handmade DSN.",
      fullBleed: true,
    },

    {
      type: "h2",
      text: "Two Gowns for an International Fashion Event",
    },

    {
      type: "p",
      text: `This editorial presents two couture gowns created for an international fashion event in Italy and designed for contestants appearing on the red carpet.

Both dresses are part of my eco-couture concept. The garments combine recycled materials with traditional couture techniques. Approximately 80% of the work was completed entirely by hand.

The creation of the two gowns took nearly five months of intensive craftsmanship. Each layer, structure, and decorative element was carefully constructed to achieve a sculptural silhouette while maintaining sustainable design principles.`,
    },

    {
      type: "quote",
      text:
        "Sustainability can coexist with haute couture — discarded materials can become the foundation of luxury garments.",
    },

    {
      type: "image",
      src: "/images/practice/03.jpg",
      alt: "Handcrafted couture details",
      caption: "Hand construction, layering, and sculptural form.",
      fullBleed: true,
    },

    {
      type: "h2",
      text: "Design Philosophy",
    },

    {
      type: "p",
      text: `My design philosophy is based on the idea that sustainability can coexist with haute couture. I explore how discarded materials can be transformed into luxury garments.

In my work, materials such as ties and reclaimed fabrics become the foundation for couture silhouettes. Through hand draping, layering, and detailed manual construction, the garments evolve into expressive pieces that combine ecological awareness with artistic fashion design.

The goal is to demonstrate that sustainable fashion can be both innovative and visually striking.`,
    },

    {
      type: "h2",
      text: "About the Photoshoot",
    },

    {
      type: "p",
      text: `The editorial photoshoot highlights the dramatic textures and sculptural volumes of the gowns. Set against bold backgrounds and strong lighting, the images emphasize movement, craftsmanship, and the layered construction of the dresses.

The visual concept reflects the transformation of recycled materials into couture forms — from raw textile elements into refined fashion pieces designed for red carpet presence.`,
    },

    {
      type: "image",
      src: "/images/practice/04.jpg",
      alt: "Editorial fashion image by Artmari Handmade DSN",
      caption: "From reclaimed textile elements to red carpet couture.",
      fullBleed: true,
    },

    {
      type: "credits",
      items: [
        { label: "Designer", value: "Marina Smagin" },
        { label: "Brand", value: "Artmari Handmade DSN" },
        { label: "Instagram", value: "@artmari_handmade_dsn" },
        { label: "Column", value: "PRACTICE" },
      ],
    },
  ],
}
];