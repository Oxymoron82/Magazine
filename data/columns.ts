export type Column = {
  slug: string;            // /columns/[slug]
  label: string;           // BECOMING / WORK
  title: string;           // Transformation
  descriptionShort: string; // короткий текст для карточек
  description: string;      // полный текст для страницы рубрики
  image: string;           // изображение
};

export const columns: Column[] = [
  {
    slug: "becoming",
    label: "BECOMING",
    title: "Transformation",
    descriptionShort:
      "Personal stories of change, identity, and becoming.",
    description:
      "Becoming explores personal transformation. Stories of women and men moving through change, migration, new chapters and inner shifts. Not before and after — but the process of becoming someone else, or returning to yourself.",
    image: "/images/card-2.jpg",
  },

  {
    slug: "work",
    label: "WORK",
    title: "Work & Path",
    descriptionShort:
      "Careers, entrepreneurship and building something real.",
    description:
      "WORK is about people who build. Entrepreneurs, founders, creators and professionals speaking about decisions, risks, failures and persistence. Not motivational stories — but the real mechanics of work.",
    image: "/images/card-1.jpg",
  },

  {
    slug: "practice",
    label: "PRACTICE",
    title: "Creative Practice",
    descriptionShort:
      "Conversations with photographers, designers and makers.",
    description:
      "PRACTICE focuses on the people behind creative industries — photographers, stylists, designers, artists and directors. Not interviews for promotion, but reflections on process, thinking and craft.",
    image: "/images/card-3.jpg",
  },

  {
    slug: "form",
    label: "FORM",
    title: "Visual Stories",
    descriptionShort:
      "Fashion and art editorials as visual language.",
    description:
      "FORM is where fashion, art and image meet. Editorial shoots, visual essays and experiments with the body, clothing and composition. Beyond trends — image as language.",
    image: "/images/card-4.jpg",
  },

  {
    slug: "place",
    label: "PLACE",
    title: "Spaces & Cities",
    descriptionShort:
      "Hotels, studios, restaurants and cities that shape atmosphere.",
    description:
      "PLACE explores environments that influence how we feel and think. Hotels, restaurants, studios, architecture and cities that create mood, energy and cultural identity.",
    image: "/images/card-5.jpg",
  },

  {
    slug: "unseen",
    label: "UNSEEN",
    title: "Quiet Portraits",
    descriptionShort:
      "Stories of people outside the spotlight.",
    description:
      "UNSEEN is about ordinary people with extraordinary lives. Stories that rarely appear in media — quiet portraits of resilience, dignity and personal experience.",
    image: "/images/card-6.jpg",
  },

  {
    slug: "intimacy",
    label: "INTIMACY",
    title: "Body & Intimacy",
    descriptionShort:
      "Conversations about body, sexuality and boundaries.",
    description:
      "INTIMACY explores sexuality, closeness, vulnerability and personal boundaries. A thoughtful conversation about embodiment without provocation or clichés.",
    image: "/images/Intimacy/Main.jpeg",
  },

  {
    slug: "varia",
    label: "VARIA",
    title: "Misc",
    descriptionShort:
      "Fragments, notes and short pieces.",
    description:
      "VARIA is a flexible space for shorter texts, reflections, fragments and experimental formats that don't fit traditional categories.",
    image: "/images/card-8.jpg",
  },
];