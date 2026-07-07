"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { photos, Photo } from "@/lib/data";

interface Props {
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  initialIndex: number;
}

// Build room sections: each room gets all its photos grouped together
interface RoomSection {
  room: string;
  photos: { photo: Photo; globalIndex: number }[];
}

const roomSections: RoomSection[] = photos.reduce<RoomSection[]>((acc, photo, i) => {
  const existing = acc.find((s) => s.room === photo.room);
  if (existing) {
    existing.photos.push({ photo, globalIndex: i });
  } else {
    acc.push({ room: photo.room, photos: [{ photo, globalIndex: i }] });
  }
  return acc;
}, []);

export default function PhotoTour({ onClose, onOpenLightbox, initialIndex }: Props) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeRoom, setActiveRoom] = useState<string>("all");

  useEffect(() => {
    closeRef.current?.focus();
    // Find which room the initialIndex belongs to
    const targetPhoto = photos[initialIndex];
    if (targetPhoto) {
      const t = setTimeout(() => {
        sectionRefs.current[targetPhoto.room]?.scrollIntoView({ block: "start" });
      }, 60);
      return () => clearTimeout(t);
    }
  }, [initialIndex]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Track active room tab based on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    function onScroll() {
      // Walk sections bottom-up to find which one's top is at/above viewport centre
      for (let i = roomSections.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[roomSections[i].room];
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveRoom(roomSections[i].room);
          return;
        }
      }
      setActiveRoom("all");
    }
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToRoom = (room: string) => {
    setActiveRoom(room);
    if (room === "all") {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Scroll so the section title lands flush at top of viewport, just below the nav tabs.
    // The nav tabs bar is ~48px tall. We want the section to align exactly there, so no previous content peeks.
    const el = sectionRefs.current[room];
    const container = scrollRef.current;
    if (!el || !container) return;
    const NAV_HEIGHT = 48;
    const elTop = el.getBoundingClientRect().top;
    const containerTop = container.getBoundingClientRect().top;
    const scrollTarget = container.scrollTop + (elTop - containerTop) - NAV_HEIGHT;
    container.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  const navTabs = ["all", ...roomSections.map((s) => s.room)];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 flex flex-col bg-white animate-fadeIn"
    >
      {/* ── Top bar ── */}
      <div className="shrink-0 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close photo tour"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
        </button>
        <p className="text-base font-semibold">Photo tour</p>
        <div className="flex items-center gap-2">
          <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100" aria-label="Share">
            <Share size={18} />
          </button>
          <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100" aria-label="Save">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6">

          {/* ── Thumbnail grid — one per room section ── */}
          <div className="py-8">
            <div className="flex flex-wrap gap-3">
              {roomSections.map((section) => (
                <button
                  key={section.room}
                  onClick={() => scrollToRoom(section.room)}
                  className="focus-ring group flex flex-col items-start gap-1"
                  aria-label={`Jump to ${section.room}`}
                >
                  <div className="h-[90px] w-[120px] overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.photos[0].photo.src}
                      alt={section.room}
                      className="h-full w-full object-cover transition duration-200 group-hover:brightness-90"
                    />
                  </div>
                  <span className="max-w-[120px] text-xs text-foggy group-hover:underline leading-snug">
                    {section.photos[0].photo.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Room sections ── */}
          <div className="pb-24">
            {roomSections.map((section) => (
              <div
                key={section.room}
                id={`room-${section.room}`}
                ref={(el) => { sectionRefs.current[section.room] = el; }}
                className="mb-20 scroll-mt-28"
              >
                {/*
                  Two-column: left = sticky room label, right = photo grid
                  Pattern: first photo full-width, then pairs of 2 side-by-side
                */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.8fr]">

                  {/* Left — sticky title + subtitle (no small room label) */}
                  <div className="lg:sticky lg:top-6 lg:self-start">
                    <h2 className="text-3xl font-semibold leading-tight">
                      {section.photos[0].photo.title}
                    </h2>
                    <p className="mt-2 text-sm text-foggy">
                      {section.photos[0].photo.subtitle}
                    </p>
                  </div>

                  {/* Right — photo grid: 1 full-width, then 2-per-row */}
                  <div className="flex flex-col gap-3">
                    {section.photos.map(({ photo, globalIndex }, idx) => {
                      // First photo: full width
                      if (idx === 0) {
                        return (
                          <button
                            key={photo.id}
                            onClick={() => onOpenLightbox(globalIndex)}
                            className="focus-ring group block w-full overflow-hidden rounded-xl"
                            aria-label={`View ${photo.title} full screen`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </button>
                        );
                      }

                      // Remaining photos: pairs of 2 per row.
                      // Odd indices (1, 3, 5…) start a new row; even non-zero are consumed as the right sibling.
                      if (idx % 2 === 0) return null;

                      // Right sibling: next photo in section, or borrow from next section, or repeat first photo
                      const nextInSection = section.photos[idx + 1];
                      if (!nextInSection) {
                        return (
                          <button
                            key={photo.id}
                            onClick={() => onOpenLightbox(globalIndex)}
                            className="focus-ring group block w-full overflow-hidden rounded-xl"
                            aria-label={`View ${photo.title} full screen`}
                          >
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </button>
                        );
                      }

                      return (
                        <div key={photo.id} className="grid grid-cols-2 gap-3">
                          {/* Left of pair */}
                          <button
                            onClick={() => onOpenLightbox(globalIndex)}
                            className="focus-ring group block overflow-hidden rounded-xl"
                            aria-label={`View ${photo.title} full screen`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </button>

                          {/* Right of pair — always filled */}
                          <button
                            onClick={() => onOpenLightbox(nextInSection.globalIndex)}
                            className="focus-ring group block overflow-hidden rounded-xl"
                            aria-label={`View ${nextInSection.photo.title} full screen`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={nextInSection.photo.src}
                              alt={nextInSection.photo.title}
                              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
