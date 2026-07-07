"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { listing } from "@/lib/data";

const tabs = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

interface Props {
  bookingCardRef: React.RefObject<HTMLElement>;
}

export default function SubNav({ bookingCardRef: _bookingCardRef }: Props) {
  // "hidden" | "entering" | "visible" | "leaving"
  const [phase, setPhase] = useState<"hidden" | "entering" | "visible" | "leaving">("hidden");
  const [activeTab, setActiveTab] = useState("photos");
  const sentinelRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Gallery scrolled away — show sub-nav
          if (leaveTimer.current) clearTimeout(leaveTimer.current);
          setPhase("entering");
          // After animation completes, mark as fully visible
          setTimeout(() => setPhase("visible"), 260);
        } else {
          // Gallery back in view — animate out
          setPhase("leaving");
          leaveTimer.current = setTimeout(() => setPhase("hidden"), 250);
        }
      },
      { threshold: 0 }
    );
    obs.observe(sentinel);
    return () => {
      obs.disconnect();
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  // Track active tab by scroll position
  useEffect(() => {
    function onScroll() {
      const ids = ["location", "reviews", "amenities", "photos"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 56) {
          setActiveTab(id);
          return;
        }
      }
      setActiveTab("photos");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (phase === "hidden") {
    return <div ref={sentinelRef} aria-hidden="true" />;
  }

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        className={`fixed inset-x-0 top-0 z-20 border-b border-gray-200 bg-white shadow-sm ${
          phase === "entering" ? "animate-slideDown" : phase === "leaving" ? "animate-slideUpOut" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 md:px-10">
          {/* Tabs */}
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`focus-ring px-4 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-hof text-hof"
                    : "border-b-2 border-transparent text-foggy hover:text-hof"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Price + Reserve — always visible once sub-nav appears */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold">
                {listing.currency}
                {(listing.price * 5).toLocaleString("en-IN")}{" "}
                <span className="font-normal text-foggy">for 5 nights</span>
              </p>
              <div className="flex items-center justify-end gap-1 text-xs">
                <Star size={11} fill="currentColor" className="text-hof" />
                <span className="font-medium text-hof">{listing.rating}</span>
                <span className="text-foggy">·</span>
                <span className="text-foggy">{listing.reviewCount} reviews</span>
              </div>
            </div>
            <button className="focus-ring rounded-full bg-rausch px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#E61E4D]">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
