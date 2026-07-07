"use client";

import { useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/lib/data";

interface Props {
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ index, onClose, onNavigate }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, onNavigate]);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer, ${photo.title}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 animate-fadeIn"
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close photo viewer"
        className="focus-ring absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"
      >
        <X size={22} />
      </button>

      <span className="absolute top-7 left-1/2 -translate-x-1/2 text-sm font-medium text-white">
        {index + 1} / {photos.length}
      </span>

      <button
        onClick={goPrev}
        aria-label="Previous photo"
        className="focus-ring absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-hof shadow-lg transition hover:scale-105 md:left-8"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        key={photo.id}
        className="mx-20 flex max-h-[80vh] max-w-5xl animate-scaleIn items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[80vh] w-auto rounded-md object-contain shadow-2xl"
        />
      </div>

      <button
        onClick={goNext}
        aria-label="Next photo"
        className="focus-ring absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-hof shadow-lg transition hover:scale-105 md:right-8"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
