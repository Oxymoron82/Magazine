import Image from "next/image";
import React from "react";

type Props = {
  category: string;
  title: string;
  image: string;
  mediaStyle?: React.CSSProperties;
};

export default function EditorialCard({
  category,
  title,
  image,
  mediaStyle,
}: Props) {
  return (
    <article className="space-y-4">
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={mediaStyle}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
        {category}
      </p>

      <h3 className="text-xl font-medium leading-snug">{title}</h3>
    </article>
  );
}
