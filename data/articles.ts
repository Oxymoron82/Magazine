export type Article = {
  slug: string;
  column: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: "saint-laurent",
    column: "form", // относится к рубрике FORM
    title: "Saint Laurent by Anthony Vaccarello",
    category: "Fashion story",
    excerpt:
      "How minimalism became the most powerful statement in contemporary fashion.",
    image: "/images/card-1.jpg",
    date: "2024-02-01",
    content: `
      There is a quiet revolution happening in fashion.
      It does not announce itself with spectacle, but through restraint.
    `,
  },

  {
    slug: "ronan-bouroullec",
    column: "practice", // относится к PRACTICE
    title: "Ronan Bouroullec",
    category: "Design",
    excerpt:
      "Exploring the intersection of industrial design and poetic minimalism.",
    image: "/images/card-5.jpg",
    date: "2024-02-02",
    content: `
      Design is not only function — it is emotion, rhythm, and structure.
    `,
  },
];