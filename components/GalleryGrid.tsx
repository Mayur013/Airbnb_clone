"use client";

import { Grid3x3 } from "lucide-react";
import { photos } from "@/lib/data";

interface Props {
  onOpen: (index: number) => void;
}

export default function GalleryGrid({ onOpen }: Props) {
  const shown = photos.slice(0, 5);

  return (
    <div className="relative mt-6 grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
      {shown.map((photo, i) => (
        <button
          key={photo.id}
          onClick={() => onOpen(i)}
          className={`focus-ring group relative overflow-hidden ${
            i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
          aria-label={`Open photo tour, ${photo.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
        </button>
      ))}

      <button
        onClick={() => onOpen(0)}
        className="focus-ring absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-md transition hover:shadow-lg"
      >
        <Grid3x3 size={16} />
        Show all photos
      </button>
    </div>
  );
}
