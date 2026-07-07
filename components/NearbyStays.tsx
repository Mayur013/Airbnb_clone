"use client";

import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const nearbyListings = [
  {
    id: 1,
    title: "Beautiful Studio with a view to die for",
    price: 23600,
    rating: 4.91,
    image: "/images/image.png",
    location: "Candolim, Goa",
  },
  {
    id: 2,
    title: "NAQAB - 1bhk with private pool",
    price: 42218,
    rating: 4.95,
    image: "/images/image copy.png",
    location: "Calangute, Goa",
  },
  {
    id: 3,
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: 44506,
    rating: 4.94,
    image: "/images/image copy 2.png",
    location: "Calangute, Goa",
  },
  {
    id: 4,
    title: "The Tropical Studio | 5 mins to Beach",
    price: 22824,
    rating: 4.96,
    image: "/images/image copy 3.png",
    location: "Candolim, Goa",
  },
  {
    id: 5,
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: 39942,
    rating: 4.95,
    image: "/images/image copy 4.png",
    location: "Calangute, Goa",
  },
  {
    id: 6,
    title: "Romantic Poolside Villa near Baga Beach",
    price: 31500,
    rating: 4.88,
    image: "/images/image copy 5.png",
    location: "Baga, Goa",
  },
  {
    id: 7,
    title: "Modern Studio with Jacuzzi & Sea View",
    price: 27800,
    rating: 4.92,
    image: "/images/image copy 6.png",
    location: "Candolim, Goa",
  },
  {
    id: 8,
    title: "Cosy 1BHK with fully equipped kitchen",
    price: 18900,
    rating: 4.87,
    image: "/images/image copy 7.png",
    location: "Calangute, Goa",
  },
];

// Each card is ~220px wide + 16px gap
const CARD_WIDTH = 236;

export default function NearbyStays() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const toggleSave = (id: number) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "right" ? CARD_WIDTH * 3 : -CARD_WIDTH * 3,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-gray-200 pt-10 pb-10 mt-10">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={atStart}
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition hover:border-hof disabled:opacity-30"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={atEnd}
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition hover:border-hof disabled:opacity-30"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable card track */}
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="no-scrollbar mt-6 flex gap-4 overflow-x-auto"
      >
        {nearbyListings.map((item) => (
          <div
            key={item.id}
            className="group w-[220px] shrink-0 cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => toggleSave(item.id)}
                className="focus-ring absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition hover:bg-black/20"
                aria-label={`Save ${item.title}`}
              >
                <Heart
                  size={14}
                  fill={saved.includes(item.id) ? "#FF385C" : "none"}
                  className={saved.includes(item.id) ? "text-rausch" : "text-white"}
                />
              </button>
            </div>

            {/* Info */}
            <div className="mt-2">
              <div className="flex items-start justify-between gap-1">
                <p className="line-clamp-2 text-sm font-medium leading-snug text-hof">
                  {item.title}
                </p>
                <div className="flex shrink-0 items-center gap-0.5 text-xs">
                  <Star size={11} fill="currentColor" className="text-hof" />
                  <span className="font-medium">{item.rating}</span>
                </div>
              </div>
              <p className="mt-0.5 text-sm text-foggy">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
