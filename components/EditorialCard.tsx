import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  title: string;
  image: string;
  href?: string;
  mediaStyle?: React.CSSProperties;
};

export default function EditorialCard({
  category,
  title,
  image,
  href,
  mediaStyle,
}: Props) {
  const inner = (
    <article className="space-y-4">
      <div
        className="relative aspect-[3/4] overflow-hidden bg-neutral-100"
        style={mediaStyle}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
        {category}
      </p>

      <h3 className="text-xl font-medium leading-snug">{title}</h3>
    </article>
  );

  return href ? <Link href={href} className="block">{inner}</Link> : inner;
}