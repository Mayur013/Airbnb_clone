"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import BookingCard from "@/components/BookingCard";
import SubNav from "@/components/SubNav";
import WhereYouSleep from "@/components/WhereYouSleep";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import HouseRules from "@/components/HouseRules";
import NearbyStays from "@/components/NearbyStays";
import {
  TitleRow,
  StatsRow,
  GuestFavourite,
  Description,
  Amenities,
  MeetYourHost,
} from "@/components/ListingDetails";

type View = "listing" | "phototour" | "lightbox";

// Airbnb-style SVG line-art highlight icons
function IconPool() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 26c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
      <circle cx="10" cy="12" r="4" />
      <path d="M14 12h10M24 8l-4 4" />
    </svg>
  );
}
function IconCool() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16" y1="4" x2="16" y2="28" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
      <line x1="24.5" y1="7.5" x2="7.5" y2="24.5" />
      <circle cx="16" cy="16" r="3" />
      <polyline points="16 4 14 8 18 8 16 4" />
      <polyline points="16 28 14 24 18 24 16 28" />
      <polyline points="4 16 8 14 8 18 4 16" />
      <polyline points="28 16 24 14 24 18 28 16" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="14" width="14" height="10" rx="2" />
      <circle cx="8" cy="19" r="5" />
      <line x1="13" y1="19" x2="16" y2="19" />
      <line x1="23" y1="19" x2="23" y2="24" />
      <line x1="26" y1="19" x2="26" y2="22" />
    </svg>
  );
}

export default function ListingPage() {
  const [view, setView] = useState<View>("listing");
  const [activeIndex, setActiveIndex] = useState(0);

  // bookingCardRef used by SubNav to know when to show price+reserve
  const bookingCardRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1120px] px-6 pb-24 pt-6 md:px-10">
        {/* Title */}
        <TitleRow />

        {/* Gallery */}
        <div id="photos">
          <GalleryGrid
            onOpen={(i) => {
              setActiveIndex(i);
              setView("phototour");
            }}
          />
        </div>

        {/* SubNav — appears after gallery scrolls away */}
        <SubNav bookingCardRef={bookingCardRef} />

        {/* ═══════════════════════════════════════════════════════════════
            2-COLUMN GRID — ends after calendar.
            The booking card (right col) is sticky within this grid.
            When this grid's natural height ends (after the calendar),
            the sticky card scrolls away with the grid bottom naturally.
            Content AFTER this grid is full-width.
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mt-8 grid grid-cols-1 items-start gap-x-16 lg:grid-cols-[1fr_380px]">

          {/* ── LEFT column ── */}
          <div>
            {/* Property type + stats */}
            <div className="pb-6">
              <p className="text-xl font-semibold">
                Entire serviced apartment in Candolim, India
              </p>
              <StatsRow />
            </div>

            {/* Guest Favourite — immediately after stats, before host row */}
            <div className="py-6">
              <GuestFavourite />
            </div>

            {/* Host preview */}
            <div className="flex items-center gap-3 border-b border-gray-200 py-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a5240] text-base font-bold text-white">
                M
              </div>
              <div>
                <p className="text-sm font-semibold">Hosted by Mirashya Stays</p>
                <p className="text-xs text-foggy">2 years hosting</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-5 border-b border-gray-200 py-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-hof"><IconPool /></span>
                <div>
                  <p className="text-sm font-semibold">Outdoor entertainment</p>
                  <p className="text-sm text-foggy">The pool and alfresco dining are great for summer trips.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-hof"><IconCool /></span>
                <div>
                  <p className="text-sm font-semibold">Designed for staying cool</p>
                  <p className="text-sm text-foggy">Beat the heat with the A/C and ceiling fan.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-hof"><IconKey /></span>
                <div>
                  <p className="text-sm font-semibold">Self check-in</p>
                  <p className="text-sm text-foggy">You can check in with the building staff.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <Description />

            {/* Where you'll sleep */}
            <WhereYouSleep />

            {/* Amenities */}
            <Amenities />

            {/* Calendar — this is the LAST item in the left column.
                The right column (booking card) is sticky top-8, so it
                aligns with the top of the viewport while this section
                is on screen, then naturally scrolls away when the grid ends. */}
            <div className="border-t border-gray-200 pt-10 mt-10">
              <h2 className="text-xl font-semibold">5 nights in Candolim</h2>
              <p className="mt-1 text-sm text-foggy">18 Oct 2026 – 23 Oct 2026</p>
              {/* No outer border — borderless calendar matching reference */}
              <div className="mt-4">
                {/* Month nav row */}
                <div className="flex items-center justify-between py-2">
                  <button className="focus-ring rounded-full p-1 hover:bg-gray-100" aria-label="Previous month">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <div className="grid grid-cols-2 flex-1 text-center text-sm font-semibold">
                    <span>October 2026</span>
                    <span>November 2026</span>
                  </div>
                  <button className="focus-ring rounded-full p-1 hover:bg-gray-100" aria-label="Next month">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-0 pt-2 sm:grid-cols-2 sm:gap-8">
                  {[
                    { month: "October 2026", days: 31, start: 3 },
                    { month: "November 2026", days: 30, start: 6 },
                  ].map(({ month, days, start }) => (
                    <div key={month}>
                      {/* Day-of-week headers */}
                      <div className="grid grid-cols-7 text-center text-[11px] font-medium text-foggy">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                          <span key={i} className="py-1.5">{d}</span>
                        ))}
                      </div>
                      {/* Day buttons — auto-sized rows, no extra trailing space */}
                      <div className="grid grid-cols-7 text-center text-xs">
                        {Array.from({ length: start }).map((_, i) => (
                          <span key={`e${i}`} className="h-8" />
                        ))}
                        {Array.from({ length: days }).map((_, i) => {
                          const day = i + 1;
                          const isOct = month.includes("October");
                          const isStart = isOct && day === 18;
                          const isEnd = isOct && day === 23;
                          const inRange = isOct && day > 18 && day < 23;
                          return (
                            <button
                              key={day}
                              className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition ${
                                isStart || isEnd
                                  ? "bg-hof text-white"
                                  : inRange
                                  ? "rounded-none bg-gray-100 text-hof"
                                  : "text-hof hover:bg-gray-100"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 mb-8 flex items-center justify-end pt-3">
                  <button className="focus-ring text-sm font-semibold underline hover:text-foggy">Clear dates</button>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT column: sticky booking card ──
              No wrapper div — BookingCard's own `sticky top-8` handles positioning.
              The grid ends after calendar, so the card naturally scrolls away. */}
          <BookingCard ref={bookingCardRef} />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            FULL-WIDTH content — outside the 2-col grid, spans entire page
        ═══════════════════════════════════════════════════════════════ */}
        <Reviews />
        <MapSection />
        <MeetYourHost />
        <HouseRules />
        <NearbyStays />
      </main>

      {view === "phototour" && (
        <PhotoTour
          initialIndex={activeIndex}
          onClose={() => setView("listing")}
          onOpenLightbox={(i) => {
            setActiveIndex(i);
            setView("lightbox");
          }}
        />
      )}

      {view === "lightbox" && (
        <Lightbox
          index={activeIndex}
          onClose={() => setView("phototour")}
          onNavigate={(i) => setActiveIndex(i)}
        />
      )}
    </>
  );
}
