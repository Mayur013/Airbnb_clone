"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { reviews, listing } from "@/lib/data";

// Laurel wreath SVG matching reference image 7 (dark grey, no colour)
function LaurelWreath({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 48 80"
      width="28"
      height="48"
      fill="currentColor"
      className="text-gray-700"
      style={{ transform: side === "right" ? "scaleX(-1)" : undefined }}
    >
      <ellipse cx="24" cy="16" rx="8" ry="12" opacity="0.9" />
      <ellipse cx="14" cy="30" rx="7" ry="10" opacity="0.8" />
      <ellipse cx="10" cy="46" rx="6" ry="9" opacity="0.7" />
      <ellipse cx="12" cy="62" rx="5" ry="8" opacity="0.6" />
      <path d="M24 72 Q18 76 14 80" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Category icons — SVG line art matching reference image 7
const categoryIcons: Record<string, React.ReactNode> = {
  Cleanliness: (
    // Spray bottle
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
    >
    <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
  </svg>
  ),
  Accuracy: (
    // Checkmark circle
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"></path>
    </svg>
  ),
  "Check-in": (
    // Magnifier with key
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path>
    </svg>
  ),
  Communication: (
    // Chat bubble
    
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">

      <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z"></path>
    </svg>
  ),
  Location: (
    // Folded map
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z"></path>
    </svg>
  ),
  Value: (
    // Price tag
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  ),
};

const ratingCategories = [
  { label: "Cleanliness", score: 5.0 },
  { label: "Accuracy", score: 5.0 },
  { label: "Check-in", score: 5.0 },
  { label: "Communication", score: 5.0 },
  { label: "Location", score: 4.8 },
  { label: "Value", score: 4.8 },
];
const avatarColors = [
  { bg: "bg-red-100", text: "text-red-700" },
  { bg: "bg-blue-100", text: "text-blue-700" },
  { bg: "bg-green-100", text: "text-green-700" },
  { bg: "bg-purple-100", text: "text-purple-700" },
  { bg: "bg-pink-100", text: "text-pink-700" },
  { bg: "bg-yellow-100", text: "text-yellow-700" },
  { bg: "bg-indigo-100", text: "text-indigo-700" },
  { bg: "bg-orange-100", text: "text-orange-700" },
];

function getAvatarColor(name: string) {
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return avatarColors[hash % avatarColors.length];
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? reviews : reviews.slice(0, 6);

  return (
    <div id="reviews" className="border-t border-gray-200 pt-10 scroll-mt-12">
      {/* ── Guest favourite hero with laurel wreaths ── */}
      <div className="flex flex-col items-center py-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <img src="/images/laurel-left.png" width="10%" alt=""/>
          <span className="text-[72px] font-bold leading-none tracking-tight text-hof">
            {listing.rating}
          </span>
          <img src="/images/laurel-right.png" width="10%" alt=""/>
        </div>
        <p className="mt-3 text-xl font-semibold">Guest favourite</p>
        <p className="mt-1 max-w-xs text-sm text-foggy">
          This home is a guest favourite based on ratings, reviews and
          reliability
        </p>
        <button className="focus-ring mt-2 text-sm font-semibold underline hover:text-foggy">
          How reviews work
        </button>
      </div>

      {/* ── Rating breakdown ── */}
      <div className="grid grid-cols-7 gap-4 pt-6">
        {/* Overall rating bar chart */}
        <div className="col-span-7 sm:col-span-1">
          <p className="mb-2 text-sm font-semibold text-foggy">Overall rating</p>
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-1.5 text-xs text-foggy">
                <span className="w-2 text-right">{star}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-hof"
                    style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "1%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 category scores with icons */}
        {ratingCategories.map(({ label, score }) => (
          <div key={label} className="border-l border-gray-200 pl-6 ml-3 col-span-3 flex flex-col gap-1 sm:col-span-1">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-2xl font-semibold">{score.toFixed(1)}</p>
            <span className="text-foggy">{categoryIcons[label]}</span>
          </div>
        ))}
      </div>

      {/* ── Review cards ── */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {shown.map((review) => (
          <div key={review.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {review.avatar ? (
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
              ) : (
                (() => {
                  const colors = getAvatarColor(review.author);

                  return (
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${colors.bg} ${colors.text}`}
                    >
                      {review.initials}
                    </div>
                  );
                })()
              )}
              <div>
                <p className="text-sm font-semibold">{review.author}</p>
                <p className="text-xs text-foggy">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < review.rating ? "currentColor" : "none"}
                  className={i < review.rating ? "text-hof" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-xs text-foggy">{review.date}</span>
            </div>
            <p className="text-sm leading-relaxed text-hof">{review.text}</p>
          </div>
        ))}
      </div>

      {reviews.length > 6 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="focus-ring mt-8 rounded-xl border border-hof px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
        >
          {showAll ? "Show fewer reviews" : `Show all ${reviews.length} reviews`}
        </button>
      )}
    </div>
  );
}
