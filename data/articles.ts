export type ArticleBlock =
  | {
      type: "p";
      text: string;
      dropCap?: boolean;
      className?: string;
      link?: { text: string; href: string };
    }
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
    type: "carousel";
    images: {
      src: string;
      alt: string;
    }[];
    caption?: string;
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

export type EditorialColumn =
  | "practice"
  | "work"
  | "intimacy"
  | "becoming"
  | "place";

export type EditorialJournal =
  | "editors-note"
  | "studio-journal";

export type Article = {
  slug: string;

  /**
   * The thematic section of the magazine.
   * Used by /columns/[slug].
   */
  column: EditorialColumn;

  /**
   * Optional recurring author journal.
   * One article may belong to both a thematic column
   * and an author journal.
   */
  journal?: EditorialJournal;

  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  author?: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [

  {
  slug: "why-we-dont-build-ordinary-websites",
  column: "work",
journal: "studio-journal",
  title: "Why We Don’t Build Ordinary Websites",
  excerpt:
    "A reflection on why memorable digital experiences need more than attractive layouts — and how editorial thinking gives a website character, rhythm and purpose.",
  category: "Studio Journal",
  author: "Maria S.",
  date: "2026-08-05",
  image: "/images/behind-the-issue/8.png",
  blocks: [
    {
      type: "p",
      dropCap: true,
      text: `Most websites are not bad. They are simply difficult to remember. They follow familiar structures, use familiar layouts and repeat the same visual solutions. Everything works, but very little stays with you after the browser tab is closed.`,
    },

    {
      type: "p",
      text: `When I began building The Issue №, I did not want to create another polished collection of screens. I wanted to create a real digital publication — something people could read, explore and return to. That changed the way I approached every decision, from typography and image placement to navigation, movement and page rhythm.`,
    },

    {
      type: "quote",
      text: "A website should not only function. It should communicate a point of view.",
    },

    {
      type: "p",
      text: `A beautiful interface is only the beginning. Without a clear idea behind it, even the most elegant design can feel interchangeable. What makes a digital experience memorable is not decoration, but intention. The structure, content and visual language must all support the same story.`,
    },

    {
      type: "h2",
      text: "Editorial thinking changes the structure",
    },

    {
      type: "p",
      text: `Editorial design begins with hierarchy. What should the reader notice first? Where should the eye pause? What deserves space, and what should remain quiet? These questions are just as important on a business website as they are in a magazine.`,
    },

    {
      type: "p",
      text: `Instead of treating every section as an isolated block, I think about the complete reading experience. A strong opening creates curiosity. Typography establishes tone. Photography introduces atmosphere. White space gives the content room to breathe. Each part prepares the reader for the next.`,
    },

    {
      type: "h2",
      text: "Design and development belong together",
    },

    {
      type: "p",
      text: `A visual concept can look perfect as a static composition and still fail once it becomes a responsive website. Real screens move, resize and react. Text changes length. Images have different proportions. Components must work across devices.`,
    },

    {
      type: "p",
      text: `That is why I approach a project from both a designer’s and a developer’s perspective. I consider visual hierarchy together with performance, responsiveness and reusable structure. The final experience should not feel like a design that was later forced into code. It should feel as though both were created as one system.`,
    },

    {
      type: "h2",
      text: "The Issue № as a working example",
    },

    {
      type: "p",
      text: `The Issue № became the place where I could test this approach in practice. It combines editorial storytelling, photography, UI/UX design and frontend development within one evolving product. Every new article, project and collaboration introduces a different challenge and helps the platform grow.`,
    },

    {
      type: "p",
      text: `The goal was never to build something unusual simply for the sake of being different. The goal was to create a digital environment with its own character — one that supports the stories, people and projects published within it.`,
    },

    {
      type: "quote",
      text: "Memorable websites are not built from trends. They are built from clear ideas.",
    },

    {
      type: "p",
      text: `This is the kind of work I want to continue creating: websites where structure, visual identity, content and technology support one another. Not ordinary websites, but thoughtful digital experiences with a clear reason to exist.`,
    },

    {
      type: "hr",
    },

    {
      type: "p",
      className:
        "mt-10 text-center font-serif text-xl leading-relaxed text-neutral-900",
      text: `Maria S.`,
    },

    {
      type: "p",
      className:
        "-mt-2 text-center text-sm uppercase tracking-[0.28em] text-neutral-500",
      text: `Creative Developer · UI/UX Designer · Editorial Creative`,
    },

    {
      type: "p",
      className:
        "mt-5 text-center font-serif italic text-lg text-neutral-700",
      text: `Studio Journal — THE ISSUE N°`,
    },
  ],
},

  {
  slug: "beyond-the-logo-why-brand-identity-matters",
  column: "work",
  journal: "editors-note",
  title: "Beyond the Logo: Why Brand Identity Matters",
  excerpt:
    "Why do some brands become unforgettable while others disappear? A reflection on identity, storytelling and the role of editorial.",
  category: "Editor’s Note",
  author: "Sofia Solas",
  date: "2026-08-05",
  image: "/images/editors-note/beyond-the-logo/1.jpg",

  blocks: [
    {
      type: "p",
      dropCap: true,
      text: `A few days ago, I caught myself looking through different fashion brands online. Beautiful campaigns, beautiful websites, beautiful clothes. And then I realised something: an hour later, I could barely remember most of them. Not because they were not good. They simply looked the same.`,
    },

    {
      type: "p",
      text: `Today, almost every brand has a logo, a website and an Instagram page. Many have beautiful photography. But beauty alone does not make people remember you. What people remember is something much simpler: a feeling, a point of view, a story.`,
    },

    {
      type: "quote",
      text: "What is your brand trying to say?",
    },

    {
      type: "p",
      text: `I have always believed that people do not connect with products first. They connect with people, ideas and emotions. That is why, before we think about a photoshoot or a publication, I always ask one question: Not sell. Say.`,
    },

    {
      type: "p",
      text: `Because a beautiful editorial without an idea is simply another beautiful editorial. The brands that stay with us always have something deeper behind them. Sometimes it is their philosophy. Sometimes it is the founder’s story. Sometimes it is simply the way they see the world.`,
    },

    {
      type: "image",
      src: "/images/editors-note/beyond-the-logo/2.jpg",
      alt: "Sofia Solas posing with an oversized black bag",
      fullBleed: true,
    },

    {
      type: "p",
      text: `You can feel it in every photograph, every campaign and every collection. People often think identity begins with a logo. I do not think it does. A logo helps people recognise you. Identity gives them a reason to remember you.`,
    },

    {
      type: "p",
      text: `At THE ISSUE N°, we do not just publish fashion stories. We are interested in the people behind them, the ideas that inspired a collection and the details that make one brand different from another. Because that is where the real story begins.`,
    },

    {
      type: "p",
      text: `Fashion changes. Trends change. Even brands evolve. But when people remember how you made them feel, you have already created something much bigger than a logo.`,
    },

    {
      type: "image",
      src: "/images/editors-note/beyond-the-logo/3.jpg",
      alt: "Portrait of Sofia Solas wearing a russet fur hat",
      fullBleed: true,
    },
{
  type: "credits",
  items: [
    {
      label: "Photography",
      value: "Anna Kyllönen",
      href: "https://www.instagram.com/annakyllonen86/",
    },
  ],
},
    {
      type: "hr",
    },

    {
      type: "p",
      className:
        "mt-10 text-center font-serif text-xl leading-relaxed text-neutral-900 italic",
      text: `Sofia Solas`,
    },

    {
      type: "p",
      className:
        "-mt-2 text-center text-sm uppercase tracking-[0.28em] text-neutral-500",
      text: `Editor-in-Chief, THE ISSUE N°`,
    },

    {
      type: "p",
      className:
        "mt-5 text-center font-serif italic text-lg text-neutral-700",
      text: `“Fashion begins with identity.”`,
    },
  ],
},

  
{
  slug: "beyond-the-crown-queen-sapphire-world",
  column: "becoming",
  title: "Beyond The Crown",
  category: "Becoming",
  excerpt:
    "A reflection by Sofia Solas on Queen Sapphire World, courage, visibility, and the moment when women allow themselves to begin again.",
  image: "/images/places/queen-sapphire/DSC01029.jpg",
  date: "2026-07-11",
  author: "Sofia Solas",

  blocks: [
   {
  type: "p",
  dropCap: true,
  text: `Some events end the moment the applause fades. Others stay with you long after the audience has left the room. For me, the evening of July 11 at Oodi Library in Helsinki was one of those moments.

That evening, 23 women from across Europe stepped onto the stage. Each brought her own profession, her own story, and her own journey. They came from different countries and different backgrounds, but they all shared something far more important.

They were genuine women, each carrying her own strength, hopes, and dreams. Women who decided to stop putting their lives on hold and simply asked themselves: “Why not?”

From the audience, it looked like a beautiful evening filled with elegant gowns, music, graceful walks, and applause. But for me, the most meaningful part of the story happened backstage.

This year, I was there in two roles: as Editor-in-Chief of THE ISSUE N° and as the runway director. That gave me the opportunity to witness everything the audience never sees.`,
},

    {
      type: "quote",
      text: `Twenty-three women.

Twenty-three stories.

One shared decision:

“Why not?”`,
    },

    {
      type: "gallery",
      images: [
        {
          src: "/images/places/queen-sapphire/DSC00013.jpg",
          alt: "Backstage before the Queen Sapphire World International Selection Final",
        },
        {
          src: "/images/places/queen-sapphire/DSC00809.jpg",
          alt: "Contestants preparing backstage at Oodi Library",
        },
        {
          src: "/images/places/queen-sapphire/DSC00268.jpg",
          alt: "Quiet moments before the Queen Sapphire World show",
        },
        {
          src: "/images/places/queen-sapphire/DSC00046.jpg",
          alt: "Final backstage preparations before the event",
        },
      ],
    },

    {
  type: "p",
  text: `There wasn’t much time to prepare, and everyone was understandably nervous. Every participant wanted to step onto that stage with confidence. My role was to choreograph the runway and help the contestants feel comfortable before their moment arrived.

Yet what stayed with me most wasn’t the preparation itself. It was the atmosphere backstage. There was no sense of rivalry.

Instead, I watched women quietly supporting one another. Someone adjusted a dress. Someone offered a reassuring hug before stepping onto the stage. Someone whispered a few simple words that meant far more than they probably realized.

I watched them in those final moments before their entrance—the nervous glances, the last adjustments, the deep breath before taking that first step toward the audience.

In moments like these, knowing that someone believes in you can make all the difference. I hoped I could be that person for them.`,
},

{
  type: "gallery",
  images: [
    {
      src: "/images/places/queen-sapphire/DSC00942.jpg",
      alt: "Contestant backstage at Queen Sapphire World International",
    },
    {
      src: "/images/places/queen-sapphire/DSC00699.jpg",
      alt: "Runway preparation during the Helsinki event",
    },
    {
      src: "/images/places/queen-sapphire/DSC00948.jpg",
      alt: "A contestant preparing to step onto the stage",
    },
    {
      src: "/images/places/queen-sapphire/DSC00738.jpg",
      alt: "Queen Sapphire World contestants together backstage",
    },
  ],
},

{
  type: "p",
  text: `Sometimes, a few sincere words are enough to quiet self-doubt. And if even one woman walked onto that stage feeling a little calmer and a little more confident, then my role that evening truly mattered.

When the show began, the audience saw elegance and beauty. I saw something different. I knew how much vulnerability, uncertainty, and courage stood behind every single step.

Watching everything unfold from behind the curtain, I realized that for many of these women, this evening was never just about a pageant. It was about themselves.

For many, it was a step they had postponed for years—a quiet dream they had finally given themselves permission to pursue.

Perhaps that’s why, once the evening was over, I wasn’t thinking about crowns or titles. I was thinking about the women.

The women who chose to step beyond the life they had always known. The women who finally allowed themselves to pursue a dream they had quietly carried for years. The women who went home believing in themselves just a little more than they had before they arrived.

These are the stories I want to tell through THE ISSUE N°.

Because true beauty doesn’t begin the moment a crown is placed on a woman’s head. It begins much earlier—the moment she stops waiting for the perfect time, chooses to let go of self-doubt, and takes the first step toward herself.`,
},

{
  type: "gallery",
  images: [
    {
      src: "/images/places/queen-sapphire/DSC00200.jpg",
      alt: "Contestant on stage during the Queen Sapphire final",
    },
    {
      src: "/images/places/queen-sapphire/DSC00100.jpg",
      alt: "Runway moment at Oodi Library in Helsinki",
    },
    {
      src: "/images/places/queen-sapphire/DSC00784.jpg",
      alt: "Final runway walk at Queen Sapphire World International",
    },
    {
      src: "/images/places/queen-sapphire/DSC00631.jpg",
      alt: "Celebration during the Queen Sapphire Helsinki final",
    },
  ],
},

{
  type: "carousel",
  caption: "View more photographs",
  images: [
    {
      src: "/images/places/queen-sapphire/DSC09808.jpg",
      alt: "Queen Sapphire World International Selection Final in Helsinki",
    },
    {
      src: "/images/places/queen-sapphire/DSC00907.jpg",
      alt: "Queen Sapphire World participant at Oodi Library",
    },
    {
      src: "/images/places/queen-sapphire/DSC00318.jpg",
      alt: "Runway presentation during the Queen Sapphire final",
    },
    {
      src: "/images/places/queen-sapphire/DSC00583.jpg",
      alt: "Queen Sapphire World International contestant in Helsinki",
    },
    {
      src: "/images/places/queen-sapphire/DSC00928.jpg",
      alt: "Stage moment during the international selection final",
    },
    {
      src: "/images/places/queen-sapphire/DSC00762.jpg",
      alt: "Queen Sapphire World event at Oodi Library",
    },
    {
      src: "/images/places/queen-sapphire/DSC00580.jpg",
      alt: "Contestant during the Queen Sapphire Helsinki final",
    },
    {
      src: "/images/places/queen-sapphire/DSC00590.jpg",
      alt: "Evening runway presentation in Helsinki",
    },
    {
      src: "/images/places/queen-sapphire/DSC00822.jpg",
      alt: "Queen Sapphire World International event photograph",
    },
    {
      src: "/images/places/queen-sapphire/DSC09858.jpg",
      alt: "Participant at the Queen Sapphire World final",
    },
    {
      src: "/images/places/queen-sapphire/DSC09823.jpg",
      alt: "Queen Sapphire World stage presentation",
    },
    {
      src: "/images/places/queen-sapphire/DSC00510.jpg",
      alt: "Backstage portrait from Queen Sapphire World International",
    },
    {
      src: "/images/places/queen-sapphire/DSC00630.jpg",
      alt: "Queen Sapphire World contestant during the Helsinki event",
    },
    {
      src: "/images/places/queen-sapphire/DSC00984.jpg",
      alt: "Runway appearance at the international selection final",
    },
    {
      src: "/images/places/queen-sapphire/DSC00933.jpg",
      alt: "Queen Sapphire World International finale in Helsinki",
    },
  ],
},

{
  type: "h2",
  text: "Author’s Note",
},

{
  type: "p",
  text: `To every woman who shared this day with us—thank you.

Thank you for your trust, your openness, and for allowing me to be part of your journey.

It was an honor to stand beside you, encourage you before you stepped onto the stage, and watch confidence slowly replace uncertainty.

I hope this day stays with you long after the photographs have been put away—not because of the competition itself, but because of what it reminded you about your own strength.

Thank you for allowing me to become part of your story.`,
},

{
  type: "p",
  className: "mt-10 font-serif text-xl italic text-neutral-900 text-right",
  text: `Sofia Solas`,
},

{
  type: "p",
  className: "mt-1 font-serif italic text-lg text-neutral-600 text-right",
  text: `Editor-in-Chief, THE ISSUE N°`,
},
    {
      type: "credits",
      items: [
        {
          label: "Text",
          value: "Sofia Solas",
        },
        {
          label: "Photography",
          value: "Aleksandra Petrova",
        },
        {
          label: "Location",
          value: "Oodi Library, Helsinki",
        },
        {
          label: "Event",
          value: "Queen Sapphire World International Selection Final",
        },
      ],
    },
  ],
},

{
  slug: "when-women-stop-waiting-queen-sapphire-world",
  column: "becoming",
  title: "When Women Stop Waiting",
  category: "Becoming",
  excerpt:
    "A reflection by Sofia Solas on Queen Sapphire World, courage, visibility, and the moment when women allow themselves to begin again.",
  image: "/images/becoming/queen-sapphire/3.jpeg",
  date: "2026-06-26",
  author: "Sofia Solas",
  blocks: [
    {
      type: "p",
      dropCap: true,
      text: `Recently, I was talking to a woman. We were talking about life, work, and plans for the future. Nothing unusual, just one of those conversations people have every day. At some point, she said something that stayed with me:

“I always wanted to try it, but I thought it was too late.”`,
    },
    {
      type: "p",
      text: `I found myself thinking about that sentence long after the conversation was over. Maybe because I’ve heard the same idea many times before, from very different women.`,
    },
    {
      type: "p",
      text: `Not necessarily about stepping onto a stage or becoming a model. Sometimes it was about changing careers. Sometimes it was about moving to another country. Sometimes it was about a personal project that had been sitting in the back of someone’s mind for years.`,
    },
    {
      type: "p",
      text: `And every time, I was struck by how easy it is to convince ourselves that we’ve missed our chance.`,
    },
    {
      type: "image",
      src: "/images/becoming/queen-sapphire/6.jpeg",
      alt: "Queen Sapphire World editorial portrait in Helsinki",
      fullBleed: true,
    },
    {
      type: "p",
      text: `I think many women spend years putting themselves last. There’s always something more important to focus on — education, work, family, responsibilities, the endless list of things that need attention first.`,
    },
    {
      type: "p",
      text: `And somewhere along the way, our own dreams quietly get pushed aside and saved for “later.” The problem is that later can turn into years.`,
    },
    {
      type: "gallery",
      images: [
        {
          src: "/images/becoming/queen-sapphire/3.jpeg",
          alt: "Queen Sapphire World event preparation and participants",
        },
        {
          src: "/images/becoming/queen-sapphire/5.jpeg",
          alt: "Queen Sapphire World fashion and age-modeling event in Helsinki",
        },
      ],
    },
    {
      type: "p",
      text: `Over the past few years, I’ve met many women who eventually decided to start over. Some launched businesses, some changed careers, some moved abroad, others stepped in front of a professional camera for the first time in their lives.`,
    },
    {
      type: "p",
      text: `And what inspired me was never the result. It was the decision. The decision to do something they had wanted to do for years but never quite had the courage to pursue.`,
    },
    {
      type: "h2",
      text: "Queen Sapphire World",
    },
    {
      type: "p",
      text: `That’s what first drew me to Queen Sapphire World.`,
    },
    {
      type: "image",
      src: "/images/becoming/queen-sapphire/1.jpeg",
      alt: "Queen Sapphire World event organiser and participants in Helsinki",
      fullBleed: true,
    },
    {
      type: "p",
      text: `At first glance, it’s an international beauty and age-modeling competition. But the more you learn about it, the more you realise that for many of the women taking part, this isn’t really a story about titles or crowns.`,
    },
    {
      type: "quote",
      text: "It’s about trying something new. It’s about seeing yourself differently.",
    },
    {
      type: "p",
      text: `On July 11, Helsinki will host the international selection final of Queen Sapphire World.`,
    },
    {
      type: "p",
      text: `The event will take place at Oodi Library, one of Finland’s most recognised public spaces, bringing together participants from Finland, Estonia, Latvia, Norway, Sweden, Spain, Ukraine and other European countries.`,
    },
    {
      type: "gallery",
      images: [
        {
          src: "/images/becoming/queen-sapphire/4.jpeg",
          alt: "Queen Sapphire World international selection final announcement",
        },
        {
          src: "/images/becoming/queen-sapphire/2.jpeg",
          alt: "Queen Sapphire World international selection final in Helsinki",
        },
      ],
    },
    {
      type: "p",
      text: `The organisers emphasise that the competition is not aimed exclusively at professional models. Most of the participants have never worked in the fashion industry before and go through training and preparation as part of the programme.`,
    },
    {
      type: "p",
      text: `For some women, it’s simply an exciting experience. For others, it’s the fulfilment of something they have wanted to do for a very long time. And for some, it may become the beginning of an entirely new chapter.`,
    },
    {
      type: "p",
      text: `And honestly, that’s the part I find most interesting. Not the competition itself. Not the titles. But the moment when someone stops waiting for perfect circumstances and finally allows themselves to try.`,
    },
    {
      type: "p",
      text: `Because sometimes a new life doesn’t begin with a dramatic change. Sometimes it begins with a single decision. A quiet moment when you tell yourself:

Why not?`,
    },
    {
      type: "hr",
    },
    {
      type: "h2",
      text: "Event Details",
    },
    {
      type: "p",
      text: `11 July 2026

Queen Sapphire World International Selection Final

Oodi Library, Helsinki`,
    },
    {
      type: "p",
      text: `If you would like to support the participants and be part of this event, we invite you to join us in Helsinki.

Tickets are available here:
https://buy.stripe.com/4gM3cwaHE3rI90p0UZ0Ny02`,
    },
    {
      type: "p",
      text: `After the final, THE ISSUE N° will return to this story with event coverage, photography, and interviews with participants and organisers.`,
    },

    {
  type: "p",
  text: `To learn more about Queen Sapphire World and follow updates before the international final, visit the official event page on Facebook:

https://www.facebook.com/share/18Ddg7sjZq/?mibextid=wwXIfr`,
},

    {
      type: "credits",
      items: [
        { label: "Text", value: "Sofia Solas" },
        { label: "Project", value: "Queen Sapphire World" },
        {
  label: "Event Page",
  value: "Official Facebook Page",
  href: "https://www.facebook.com/share/18Ddg7sjZq/?mibextid=wwXIfr",
},
        { label: "Head", value: "Alena Roshal" },
        { label: "Organiser", value: "Alena Kuznetsova" },
        { label: "Photography", value: "Maksim Toome" },
        { label: "Location", value: "Oodi Library, Helsinki" },
        { label: "Date", value: "11 July 2026" },
        { label: "Column", value: "BECOMING" },
        
      ],

     
    },
  ],
},

  {
    slug: "tallinn-fashion-week-between-space-movement-and-form",
    column: "place",
    title: "Tallinn Fashion Week: Between Space, Movement and Form",
    category: "Place",
    excerpt:
      "An editorial observation of Tallinn Fashion Week at T1 Venue in Tallinn, where fashion, atmosphere, and the presence of people shaped the event beyond the runway.",
    image: "/images/places/tallinweek/2.jpeg",
    date: "2026-04-10",
    author: "The Issue № Editorial Team",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `Tallinn Fashion Week took place on April 9–10 at T1 Venue in Tallinn.

The event brought together designers, guests and industry professionals around new collections and ideas. From the very beginning, there was a clear attention to detail — the audience arrived dressed with intention, each interpreting the mood of the event in their own way. The space was shaped not only by what was happening on the runway, but also by the people within it.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/places/tallinweek/4.jpeg",
            alt: "Audience and atmosphere at Tallinn Fashion Week at T1 Venue",
          },
          {
            src: "/images/places/tallinweek/6.jpg",
            alt: "Audience and atmosphere at Tallinn Fashion Week at T1 Venue",
          },
          {
            src: "/images/places/tallinweek/7.jpg",
            alt: "Audience and atmosphere at Tallinn Fashion Week at T1 Venue",
          },
          {
            src: "/images/places/tallinweek/3.jpeg",
            alt: "Audience and atmosphere at Tallinn Fashion Week at T1 Venue",
          },
        ],
      },
      {
        type: "p",
        text: `Over the course of two days, more than 15 designers presented their collections — both established names and emerging voices. Each show approached form, material and contemporary fashion from a different perspective.`,
      },
      {
        type: "video",
        src: "/images/places/tallinweek/video1.mp4",
        autoplay: false,
      },
      {
        type: "p",
        text: `Among the designers this season was Anastasija Balak, whose work is deeply rooted in the relationship between body and form.`,
      },
      {
        type: "p",
        text: `Her collection did not attempt to create immediate impact. Instead, it moved through subtle tension — between protection and vulnerability, softness and inner strength.`,
      },
      {
        type: "quote",
        text: "The space was shaped not only by the runway, but by the people within it.",
      },
     {
  type: "p",
  text: "Continue reading in the Practice column:",
  link: {
    text: "Anastasija Balak — Silent Guardian / Falling Petals.",
    href: "/article/anastasija-balak-silent-guardian-falling-petals",
  },
},
    ],
  },

  {
    slug: "anastasija-balak-silent-guardian-falling-petals",
    column: "practice",
    title: "Anastasija Balak — Silent Guardian / Falling Petals",
    category: "Practice",
    excerpt:
      "A conversation with designer Anastasija Balak on body, form, vulnerability, and the quiet balance between structure and intuition in her collection Silent Guardian / Falling Petals.",
    image: "/images/practice/balak/main.jpeg",
    date: "2026-04-15",
    author: "The Issue № Editorial Team",
    blocks: [
      {
        type: "p",
        text: `Presented during Tallinn Fashion Week 2026.`,
      },
      {
        type: "p",
        dropCap: true,
        text: `Anastasija Balak’s work is deeply rooted in the relationship between body and form.

Her practice began with swimwear — working closely with the body, its lines and its openness. Over time, this evolved into a broader exploration, where clothing is no longer only a visual object, but a way of expressing a certain state.`,
      },
      {
        type: "p",
        text: `Her new collection, Silent Guardian / Falling Petals, continues this direction.

There is no attempt to create immediate impact. Instead, the collection works through subtle tension — between protection and vulnerability, softness and inner strength. Materials are not decorative; they become part of the concept itself. Clothing acts as a boundary, as a layer, as a space surrounding the body.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/practice/balak/14.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/13.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/12.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/11.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
        ],
      },
      {
        type: "p",
        text: `References to Japanese aesthetics appear gently — not through direct quotation, but through rhythm, repetition and restraint. Prints combine animal motifs with sakura, creating a sense of strength and fragility existing at the same time.

The collection feels calm, without pressure, leaving space for interpretation.`,
      },
      {
        type: "quote",
        text: "Intuition gives direction, and structure allows it to take form.",
      },
      {
        type: "h2",
        text: "Conversation with Anastasija Balak",
      },
      {
        type: "p",
        text: `Can you briefly introduce your project — what is your work today?

- I’m a tailor and fashion designer, the creator of ABFD Swimwear and the founder of the AVANTGARD atelier. For over fifteen years, I’ve been developing my own brand, AB Fashion Design, working on both collections and custom-made pieces tailored to the individual.`,
      },
      {
        type: "p",
        text: `When did your project start, and how would you describe it today?

- It started with working closely with the body — through swimwear. Over time, it became something broader. Today it’s less about a specific category and more about creating a certain state through clothing.`,
      },
      {
        type: "image",
        src: "/images/practice/balak/8.jpeg",
        alt: "Audience and atmosphere at Tallinn Fashion Week at T1 Venue",
        fullBleed: true,
      },
      {
        type: "p",
        text: `What does “work” mean to you today?

- Work is a continuous process of searching. It’s not only about making garments, but about understanding form, sensation and inner state.`,
      },
      {
        type: "p",
        text: `What part of your work do people not see or often misunderstand?

- The depth of the process. A lot of time goes into working with materials, finding balance between aesthetics and function, and maintaining internal discipline.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/practice/balak/4.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/5.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/6.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
          {
            src: "/images/practice/balak/7.jpeg",
            alt: "Fashion editorial photography of Anastasija Balak's collection Silent Guardian / Falling Petals at Tallinn Fashion Week",
          },
        ],
      },
      {
        type: "p",
        text: `How does your creative process usually start?

- It begins with a feeling. Not with a fixed idea, but with a state that gradually takes shape through material and construction.`,
      },
      {
        type: "p",
        text: `Do you work more from structure or intuition?

- Both. Intuition gives direction, and structure allows it to take form.`,
      },
      {
        type: "p",
        text: `What inspired you to combine swimwear with Japanese aesthetics and sakura symbolism?

- I’m interested in vulnerability, especially in relation to the body. Japanese aesthetics, and sakura in particular, reflect this feeling — beauty that exists in its impermanence.

The prints combine leopard, tiger and blooming sakura on a python texture. It’s about coexistence — strength and fragility at the same time.`,
      },
      {
        type: "p",
        text: `What kind of feeling did you want to create through this collection?

- A sense of quiet strength. Something internal, not demonstrative. A balance between softness and stability.`,
      },
      {
        type: "p",
        text: `What were the main challenges in creating this collection?

- To stay precise and avoid superficial interpretation. It was a process of refinement — removing what wasn’t necessary and focusing on essence.`,
      },
      {
        type: "p",
        text: `What are you building right now?

- I continue to develop a language where form and feeling exist together.`,
      },
      {
        type: "p",
        text: `What does the next phase look like for you?

- Moving towards more abstraction — less direct references, more focus on texture, color and atmosphere.`,
      },
      {
        type: "h2",
        text: "Final Note",
      },
      {
        type: "p",
        text: `In the context of Tallinn Fashion Week, Anastasija Balak’s work feels precise and composed — not seeking attention, but holding it through its internal clarity and rhythm.`,
      },
      {
        type: "credits",
        items: [
          { label: "Designer", value: "Anastasija Balak" },
          { label: "Brand", value: "AB Fashion Design" },
          { label: "Atelier", value: "AVANTGARD" },
          {
            label: "Website",
            value: "avantgard.ee",
            href: "https://avantgard.ee/en",
          },
          { label: "Event", value: "Tallinn Fashion Week" },
          { label: "Location", value: "Tallinn, Estonia" },
          { label: "Column", value: "PRACTICE" },
        ],
      },
    ],
  },

  {
    slug: "sexuality-is-not-a-pose",
    column: "intimacy",
    title: "Sexuality Is Not a Pose — It Is a State",
    category: "Intimacy",
    excerpt:
      "An intimacy and fashion editorial on sensuality, identity, and presence, exploring how sexuality returns through feeling, embodiment, and contemporary visual storytelling.",
    image: "/images/Intimacy/1/1.jpg",
    date: "2026-03-04",
    author: "Sofia Solas",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `Sexuality is not a pose. It is a state.`,
      },
      {
        type: "p",
        text: `I resisted writing about sexuality for a long time.`,
      },
      {
        type: "p",
        text: `There’s too much performance around it. Too much imitation. It often looks like something rehearsed — a certain way of standing, a controlled gesture, the “right” angle of the body. As if desire has rules, and you just need to follow them correctly.`,
      },
      {
        type: "p",
        text: `But in real life, it doesn’t work like that.`,
      },
      {
        type: "p",
        text: `Real sexuality isn’t an image. It’s not something you construct for others to see. It’s in the way you breathe. The way you move. The way you touch things without thinking about how it looks from the outside.`,
      },
      {
        type: "p",
        text: `Over the years, working with visuals — shoots, models, photographers — I’ve noticed something strange.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/Intimacy/1/4.jpg",
            alt: "Intimacy editorial image about body, sensuality and presence",
          },
          {
            src: "/images/Intimacy/1/5.jpg",
            alt: "Intimacy editorial portrait exploring feminine identity",
          },
          {
            src: "/images/Intimacy/1/6.jpg",
            alt: "Visual essay image about sexuality and embodiment",
          },
          {
            src: "/images/Intimacy/1/7.jpg",
            alt: "Editorial photography about intimacy and personal presence",
          },
        ],
      },
      {
        type: "p",
        text: `Many people live as if their body is just a vehicle for their mind. We’re in constant motion: tasks, deadlines, internal noise. And the body becomes something secondary. Something “not good enough,” or “later,” or “when I finally lose weight / look younger / get enough rest.”`,
      },
      {
        type: "p",
        text: `And that’s exactly where sexuality disappears.`,
      },
      {
        type: "p",
        text: `Not because of age. Not because of imperfections. But because we’re simply not present in ourselves.`,
      },
      {
        type: "p",
        text: `The most magnetic people I’ve seen through the lens were never the most “perfect” ones. They were the most present.`,
      },
      {
        type: "p",
        text: `You see it immediately — in a single movement. In the way someone sits down without trying to hide. In the way they hold eye contact. In the way they allow themselves to take up space.`,
      },
      {
        type: "image",
        src: "/images/Intimacy/1/2.jpg",
        alt: "Sensual intimacy fashion editorial photography and visual study",
        fullBleed: true,
      },
      {
        type: "h2",
        text: "What this is really about",
      },
      {
        type: "p",
        text: `This space is not about beauty in the conventional sense.`,
      },
      {
        type: "p",
        text: `It’s about returning.`,
      },
      {
        type: "p",
        text: `About how people find their way back to themselves after difficult moments. How desire comes back after loss. How perception shifts after motherhood, after time, after change.`,
      },
      {
        type: "p",
        text: `Sometimes, it happens through something as simple — and as difficult — as an honest photoshoot. A moment where, for the first time in a long time, you don’t see a function in the mirror, but a woman.`,
      },
      {
        type: "p",
        text: `For some, this will be about becoming alive again after a period of emotional stillness.`,
      },
      {
        type: "p",
        text: `For others, it’s about accepting a new kind of vulnerability — and realizing that it’s not weakness, but strength.`,
      },
      {
        type: "h2",
        text: "Boudoir is not about lingerie",
      },
      {
        type: "p",
        text: `So why begin with boudoir?`,
      },
      {
        type: "p",
        text: `Because for me, it has nothing to do with seduction.`,
      },
      {
        type: "p",
        text: `It’s a moment of being alone with yourself — while allowing someone else to see you at the same time. A photographer, a witness. That requires trust. And a certain kind of courage.`,
      },
      {
        type: "p",
        text: `It’s not “look at me.” It’s “this is me — as I am right now. And I don’t need to apologize for it.”`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/Intimacy/1/8.jpg",
            alt: "Intimacy editorial image about self-acceptance and body presence",
          },
          {
            src: "/images/Intimacy/1/9.jpg",
            alt: "Fashion editorial image exploring vulnerability and confidence",
          },
          {
            src: "/images/Intimacy/1/10.jpg",
            alt: "Visual storytelling image about feminine sensuality and identity",
          },
          {
            src: "/images/Intimacy/1/11.jpg",
            alt: "Editorial portrait about intimacy, body and personal story",
          },
        ],
      },
      {
        type: "h2",
        text: "What comes next",
      },
      {
        type: "p",
        text: `This won’t be about advice.`,
      },
      {
        type: "p",
        text: `It will be about experience.`,
      },
      {
        type: "p",
        text: `We’ll invite people to share their stories — how they lost connection with themselves, and how they found it again. We’ll speak with photographers and artists who know how to see beauty where most of us only see flaws.`,
      },
      {
        type: "p",
        text: `We’ll look for ways to quiet the internal critic — and reconnect with something more instinctive.`,
      },
      {
        type: "hr",
      },
      {
        type: "h2",
        text: "A simple starting point",
      },
      {
        type: "p",
        text: `Sexuality doesn’t need to be created.`,
      },
      {
        type: "p",
        text: `It doesn’t need to be performed or imitated.`,
      },
      {
        type: "p",
        text: `Most of the time, it’s already there — just blocked.`,
      },
      {
        type: "p",
        text: `The moment you allow yourself to feel your body again — the warmth of your skin, the depth of your breath, the ease of movement — something shifts.`,
      },
      {
        type: "p",
        text: `Desire doesn’t need instructions.`,
      },
      {
        type: "p",
        text: `It returns on its own.`,
      },
      {
        type: "p",
        text: `Quietly. Naturally.`,
      },
      {
        type: "p",
        text: `Because you are finally back.`,
      },
      {
        type: "p",
        text: `And maybe that’s where something important begins.`,
      },
      {
        type: "p",
        text: `by Sofia Solas`,
        className: "mt-6 italic text-neutral-500 text-sm",
      },
      {
        type: "hr",
      },
      {
        type: "h2",
        text: "Personal Story: Why I Choose to Be Seen",
      },
      {
        type: "p",
        text: `Model: Evgeniya Zapolnova
Photographer: Nikolai Zapolnov`,
      },
      {
        type: "p",
        text: `“I’m 38. I’ve been in a relationship for 19 years.`,
      },
      {
        type: "p",
        text: `As a child, I experienced harassment, and very early on I learned that male attention wasn’t safe. For years, I tried not to be sexual — it felt like a way to protect myself. I hid behind humor and self-irony.`,
      },
      {
        type: "p",
        text: `I never thought my body was ‘good enough.’ I believed that people only saw my imperfections. Even when my partner told me I was beautiful, I assumed he just had bad taste.`,
      },
      {
        type: "p",
        text: `At some point, I realized something simple: ‘later’ might never come. Life is happening now.`,
      },
      {
        type: "p",
        text: `And I started to see myself differently.`,
      },
      {
        type: "p",
        text: `I realized I am attractive. That I am strong enough to face my fears.`,
      },
      {
        type: "p",
        text: `Now I choose to be photographed nude because this is me.`,
      },
      {
        type: "p",
        text: `Yes, technically my body may look ‘worse’ than it did at twenty. But I feel more sexual now than I ever did then.`,
      },
      {
        type: "p",
        text: `For me, this is about control. It’s a challenge. And it’s completely, entirely mine.”`,
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

  {
    slug: "radiaatorikeskus-heating-design-estonia",
    column: "work",
    title: "When Heating Becomes Design: The Business Behind Radiaatorikeskus",
    category: "Work",
    excerpt:
      "A business and interior design feature on Radiaatorikeskus, an Estonian company turning heating systems into architectural design elements through entrepreneurship, modern interiors, and functional aesthetics.",
    image: "/images/work/radiaatorikeskus/1.jpeg",
    date: "2026-03-17",
    author: "The Issue № Editorial Team",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `In interior architecture, the boundary between function and aesthetics is becoming increasingly blurred.`,
      },
      {
        type: "p",
        text: `What was once hidden behind function now becomes part of the visual language of a space. Heating systems, traditionally perceived as purely technical, are increasingly treated as objects of form, rhythm, and atmosphere.`,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/1.jpeg",
        alt: "Radiaatorikeskus showroom with interior design and heating solutions in Estonia",
        fullBleed: true,
      },
      {
        type: "p",
        text: `Radiaatorikeskus is an Estonian company working at exactly this intersection — where technical necessity meets contemporary interior design. Their work demonstrates how heating can move beyond utility and become part of the architectural composition itself.`,
      },
      {
        type: "p",
        text: `Rather than treating radiators as something to disguise, the company approaches them as elements that can support the visual identity of a room. Shape, finish, proportion, and placement all become part of the design conversation.`,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/3.jpeg",
        alt: "Designer heating detail by Radiaatorikeskus for modern interiors",
        fullBleed: true,
      },
      {
        type: "p",
        text: `This approach reflects a wider shift in contemporary living: people are no longer separating function from beauty as strictly as before. Interiors are expected to work technically, emotionally, and visually at once.`,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/4.jpeg",
        alt: "Modern interior architecture featuring designer heating elements",
        fullBleed: true,
      },
      {
        type: "p",
        text: `In this sense, Radiaatorikeskus operates not only as a supplier, but as part of a broader design culture — one that understands comfort as something structured through details.`,
      },
      {
        type: "p",
        text: `What makes the company especially relevant today is its ability to position a technical product inside a more sophisticated spatial narrative. The radiator is no longer an interruption. It becomes part of the room’s balance.`,
      },
      {
        type: "image",
        src: "/images/work/radiaatorikeskus/2.jpeg",
        alt: "Architectural heating and interior design project in Tallinn Estonia",
        fullBleed: true,
      },
      {
        type: "p",
        text: `In a market where design-conscious clients are increasingly attentive to every visible element, this shift matters. It changes not only how interiors look, but how they are conceived from the beginning.`,
      },
      {
        type: "p",
        text: `Radiaatorikeskus offers a clear example of how a business rooted in function can evolve into something more layered — practical, aesthetic, and culturally aligned with the way contemporary spaces are imagined today.`,
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

  {
    slug: "about-elegance-musical-fuad-oranski",
    column: "practice",
    title: "About Elegance Musical  —  A Conversation with Fuäd Oranski",
    category: "Practice",
    excerpt:
      "A conversation with Fuäd Oranski on About Elegance Musical, a Finnish rock-pop venture built around collaboration, multilingual sound, live performance, and creative exchange.",
    image: "/images/practice/about-elegance-musical/5.jpeg",
    date: "2026-04-26",
    author: "The Issue № Editorial Team",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `The Issue №: Hello Fuäd Oranski, nice to have you with us. Can you briefly introduce your project — what is About Elegance Musical?

Fuäd Oranski: Hello, thank you for inviting me here. About Elegance Musical is a Finnish mainly rock/pop venture, playing in other styles too — funk, soul, hard rock. It is my creation and my foundation, and it happened in Helsinki.`,
      },
      {
        type: "p",
        text: `About Elegance is much more than a band. It is an open platform to share music through gigs, different collaborations, digital musical works, recordings, exchanges with musicians, and online streams.`,
      },
      {
        type: "p",
        text: `By the way, I invite people from all artistic areas for different kinds of collaborations with AEM — musicians, singers, models, photographers, actors, dancers.

Official website: https://www.aboutelegancemusical.com/`,
      },
      {
        type: "image",
        src: "/images/practice/about-elegance-musical/11.jpeg",
        alt: "About Elegance Musical Finnish rock pop band editorial portrait",
        caption: "Photo: Aleksi Lausti",
        fullBleed: true,
      },
      {
        type: "p",
        text: `The Issue №: When did it start, and how would you describe your format today?

Fuäd Oranski: It started in May 2023 as a musical venture. Concerning the format as a band, it changes sometimes, but usually it is the classical one: vocal, bass guitar, drums, electric guitar, and keyboards. When there is a possibility, I prefer to play acoustic piano, and if acoustic guitar can join the band, it sounds perfect.`,
      },
      {
        type: "p",
        text: `The Issue №: How would you define your sound or direction?

Fuäd Oranski: About Elegance Musical is a rock-pop fusion band, but I like to add some soul taste, funk, and often hard rock or metal drums. All those rhythms and tastes give a special original sound. I call it a “very specific cocktail sound”.`,
      },
      {
        type: "p",
        text: `It is specific also in terms of our singing languages. I usually sing in English, but also in French, sometimes in Finnish, and on rare occasions in Russian and Arabic. I had a chance to be born to multicultural parents, and had the privilege to live in different countries and continents. That is why all these languages are inside of me forever.`,
      },
      {
        type: "quote",
        text: "About Elegance is much more than a band. It is an open platform to share music.",
      },
      {
        type: "p",
        text: `The Issue №: How did your project begin — and what has changed since then?

Fuäd Oranski: In the beginning it was a project. Today it is more like a musical venture, a mission to share the best of what we can offer to the audience — our music, our message, our love through all of this.`,
      },
      {
        type: "p",
        text: `The Issue №: What does “work” mean to you today?

Fuäd Oranski: Work means a lot of things at the same time: creativity, the right timing, positive connection between everyone helping and working inside the band and around it.`,
      },
      {
        type: "p",
        text: `I would like to thank our manager Sami, who gave an incredible re-boost to the whole process, and a special thanks to Ilari, our bassist, who is giving his best to the band, and Oliver, a great drummer and musician who is always with AEM when needed. Big thanks to Sofia Sol, such an adorable model, for her collaboration with us — and a million thanks to many other people.`,
      },
      {
        type: "p",
        text: `Work is a magical process. It takes a lot of energy, and you have to sacrifice a lot. But in the end, there is always satisfaction, because the result is mainly positive.`,
      },
      {
        type: "image",
        src: "/images/practice/about-elegance-musical/22.jpeg",
        alt: "Fuäd Oranski About Elegance Musical creative process and performance editorial",
        fullBleed: true,
      },
      {
        type: "p",
        text: `The Issue №: What part of your work do people not see or misunderstand?

Fuäd Oranski: We try to share a lot with the crowd. Maybe I am not yet ready to share the moment of creation. It is still something private for me. But who knows — maybe in the future I will share that part with the audience too.`,
      },
      {
        type: "p",
        text: `The Issue №: How does your creative process usually start?

Fuäd Oranski: It starts in a million different ways — from personal life moments, past memories, moments of meeting great people, receiving great lyrics from nice people or even from someone unknown, or after living through a beautiful or dramatic personal moment.`,
      },
      {
        type: "p",
        text: `The Issue №: Do you work more from structure or intuition?

Fuäd Oranski: More from intuition, but I like to work from structure too sometimes.`,
      },
      {
        type: "p",
        text: `The Issue №: What has changed in your approach to music over time?

Fuäd Oranski: Music is not only creating, recording, or performing. Music is an incredible world where you meet people, discover sounds and rhythms, and connect in real time or through social media with millions of different things.`,
      },
      {
        type: "image",
        src: "/images/practice/about-elegance-musical/3.jpeg",
        alt: "Fuäd Oranski About Elegance Musical creative process and performance editorial",
        fullBleed: true,
      },
      {
        type: "p",
        text: `That is why I am in love with all that process. I try to reach the ideal everywhere and every time, even if I know that it is impossible. But the most valuable thing is sharing your creativity.`,
      },
      {
        type: "quote",
        text: "The most valuable thing is sharing your creativity.",
      },
      {
        type: "p",
        text: `The Issue №: How do you feel about being visible as artists today?

Fuäd Oranski: Being visible is not so complicated in our era. Everyone can create their own music, their own image, if they have a bit of skill. The most important thing is to understand that you do something unique, and that you can give the audience something that makes people happy or boosts them emotionally in a positive way.`,
      },
      {
        type: "p",
        text: `The Issue №: What do you want people to feel when they listen to your music?

Fuäd Oranski: Love, happiness, various feelings — mostly positive ones, and sometimes sad ones too.`,
      },
      {
        type: "image",
        src: "/images/practice/about-elegance-musical/4.jpeg",
        alt: "About Elegance Musical rock pop project Helsinki editorial image",
        caption: "Photo: Aleksi Lausti",
        fullBleed: true,
      },
      {
        type: "p",
        text: `The Issue №: What are you building right now?

Fuäd Oranski: Starting from December 2025, we are preparing three different singles and two music videos. I am also in a non-stop process of creating new songs for our first album.`,
      },
      {
        type: "p",
        text: `I am lucky to be surrounded by great people, without whom it would be impossible to achieve the intended goals. There will also be some amazing surprises. The deadline is May or June 2026, and I am so excited to launch that sharing process with the audience.`,
      },
      {
        type: "p",
        text: `Of course, there will be a lot of gigs — mainly in Finland, but in Estonia and France too. We will inform the world about all the dates when the right time comes.`,
      },
      {
        type: "p",
        text: `The Issue №: What does the next phase look like for you?

Fuäd Oranski: The next phase is the launching process of everything we are preparing in terms of musical material — sharing it with the audience through social media, radio, TV, gigs, mainstream platforms, or interviews on platforms like yours, The Issue №.`,
      },
      {
        type: "p",
        text: `The Issue №: Thank you.

Fuäd Oranski: Thank you. It was a real pleasure.

About Elegance Website: https://www.aboutelegancemusical.com/
About Elegance Instagram:
https://www.instagram.com/aboutelegance_musical
Aleksi Lausti Website:
https://www.aleksilausti.com/ `,
      },
      {
        type: "credits",
        items: [
          { label: "Project", value: "About Elegance Musical" },
          { label: "Artist", value: "Fuäd Oranski" },
          { label: "Location", value: "Helsinki, Finland" },
          {
            label: "Website",
            value: "aboutelegancemusical.com",
            href: "https://www.aboutelegancemusical.com/",
          },
          {
            label: "Instagram",
            value: "@aboutelegance_musical",
            href: "https://www.instagram.com/aboutelegance_musical",
          },
          {
            label: "Aleksi Lausti",
            value: "aleksilausti.com",
            href: "https://www.aleksilausti.com/",
          },
          { label: "Column", value: "PRACTICE" },
        ],
      },
    ],
  },

  {
    slug: "marina-smagin-artmari-handmade-dsn",
    column: "practice",
    title: "Marina Smagin — Artmari Handmade DSN",
    category: "Practice",
    excerpt:
      "An editorial interview with eco-couture designer Marina Smagin on sustainable fashion, handmade couture, recycled textiles, and contemporary creative practice in fashion design.",
    image: "/images/practice/10.jpg",
    date: "2026-03-20",
    author: "The Issue № Editorial Team",
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
            src: "/images/practice/077.jpg",
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

  {
  slug: "starting-again-in-another-country",
  column: "becoming",
  journal: "editors-note",
  title: "Starting Again, in Another Country",
  category: "Becoming",
    excerpt:
      "A personal editorial essay by Sofia Solas on migration, motherhood, work, visual storytelling, and the quiet strength of beginning again in another country.",
    image: "/images/becoming/starting-again/main.jpeg",
    date: "2026-04-20",
    author: "Sofia Solas",
    blocks: [
      {
        type: "p",
        dropCap: true,
        text: `Beauty is not perfection.

It is posture — especially when it’s hard.`,
      },
      {
        type: "p",
        text: `I grew up surrounded by women who understood this without explaining it.

Not glossy beauty, not something constructed for attention — but something quieter and more grounded. Presence. Confidence. A way of holding yourself, even when no one is looking.`,
      },
      {
        type: "p",
        text: `My mother was a director and ran a modeling agency. For her, it was work. For me, it was an environment I observed from a distance — fittings, rehearsals, the rhythm before a show, the moment just before stepping into light. I remember watching more than participating. Trying to understand what made someone visible.`,
      },
      {
        type: "p",
        text: `That’s where my idea of beauty began — not as appearance, but as a form of strength.

Over time, observation turned into intention. Fashion stopped being something external. It became a language — a way to speak about character, femininity, vulnerability and control.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/becoming/starting-again/1.jpeg",
            alt: "Editorial portrait about migration, identity, and starting again in another country",
          },
          {
            src: "/images/becoming/starting-again/2.jpeg",
            alt: "Visual storytelling image about feminine strength and personal transformation",
          },
          {
            src: "/images/becoming/starting-again/3.jpeg",
            alt: "Editorial image about rebuilding life and identity in Helsinki",
          },
        ],
      },
      {
        type: "h2",
        text: "Starting from zero",
      },
      {
        type: "p",
        text: `Moving to another country changes your sense of direction.

I came to Helsinki with a small child and the idea that a different life was possible. But relocation removes structure very quickly. You arrive without context — no network, no history, no position. Things that once defined you no longer exist in the same way.`,
      },
      {
        type: "p",
        text: `You start again.

When the relationship ended, that reset became more concrete. Responsibility stayed — for my child and for myself. There is a moment where you realise there are only two options: stop, or continue. There is no in-between.`,
      },
      {
        type: "h2",
        text: "Work, in its simplest form",
      },
      {
        type: "p",
        text: `My first job in Finland was cleaning.

There is a certain clarity in that kind of work. It is direct, physical, repetitive. It gives structure to the day. It teaches discipline without needing to explain it.`,
      },
      {
        type: "p",
        text: `I never saw it as something to hide. It was part of the process — a stage that builds endurance and respect for work in any form.

From there, things moved slowly. I began working within a hotel group in Scandinavia. I studied hospitality and event management. I received Finnish citizenship after four years.

Nothing happened quickly. And maybe that’s why it stayed.`,
      },
      {
        type: "quote",
        text: "You either stop, or you begin again.",
      },
      {
        type: "h2",
        text: "Returning to image",
      },
      {
        type: "p",
        text: `At some point, I felt that something was still unresolved.

I returned to visual work — not as an observer this time, but as someone building from inside. I started training in posing and fashion production. Then styling. Then visual concepts.`,
      },
      {
        type: "p",
        text: `It became clear that I didn’t want to wait for opportunities. I wanted to create them.

I began producing shoots — bringing together photographers, designers, makeup artists. Working through the entire process: from the initial idea to the final image.`,
      },
      {
        type: "p",
        text: `Later, I studied fashion styling in Italy. At the same time, I started learning finance — because creating something is only part of the work. Sustaining it is another.`,
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/becoming/starting-again/77.jpeg",
            alt: "Editorial portrait about returning to visual storytelling and creative work",
          },
          {
            src: "/images/becoming/starting-again/5.jpeg",
            alt: "Fashion editorial image about creative direction and personal growth",
          },
          {
            src: "/images/becoming/starting-again/6.jpeg",
            alt: "Editorial image about Sofia Solas and the development of The Issue N",
          },
        ],
      },
      {
        type: "h2",
        text: "People",
      },
      {
        type: "p",
        text: `The work gradually became more defined. Projects started forming. Publications followed — across Europe, the US and the UK.

But the most important part was always the same.

Women.`,
      },
      {
        type: "p",
        text: `Different ages, different bodies, different experiences. Each one carrying something specific, something not always visible at first. Working with them was never only about image. It was about presence — how a person enters a frame, and what remains after.`,
      },
      {
        type: "h2",
        text: "The Issue №",
      },
      {
        type: "p",
        text: `This project didn’t begin as a fixed idea.

It grew out of process — from working, observing, building, and returning again. From understanding that not everything needs to be explained, and not everything needs to be visible immediately.`,
      },
      {
        type: "p",
        text: `The Issue № is not a showcase.

It is a continuation. A structure that holds different stories, without forcing them into one direction.

Something that remains open.`,
      },
      {
        type: "p",
        text: `— Sofia Solas
Helsinki`,
      },
      {
        type: "p",
        text: `For another story of transformation through visual identity, continue with the TRINITY project.`,
      },
    ],
  },

  {
    slug: "trinity-sofia",
    column: "becoming",
    title: "Trinity — Fashion Editorial Photography Story",
    category: "Becoming",
    
    excerpt:
      "A fashion editorial photography story about feminine transformation, identity, empowerment, and personal evolution through the three emotional phases of Project Trinity.",
    image: "/images/trinity/115.jpg",
    date: "2026-04-03",
    author: "Maria Shatylovich",
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
export function getArticlesByColumn(column: EditorialColumn) {
  return articles
    .filter((article) => article.column === column)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticlesByJournal(journal: EditorialJournal) {
  return articles
    .filter((article) => article.journal === journal)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getEditorsNoteArticles() {
  return getArticlesByJournal("editors-note");
}

export function getStudioJournalArticles() {
  return getArticlesByJournal("studio-journal");
}