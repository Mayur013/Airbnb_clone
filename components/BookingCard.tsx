"use client";

import { forwardRef, useState } from "react";
import { Star, ChevronDown, Flag } from "lucide-react";
import { listing } from "@/lib/data";

const BookingCard = forwardRef<HTMLElement>(function BookingCard(_, ref) {
  const [guests, setGuests] = useState(2);
  const nights = 5;
  const total = listing.price * nights;

  return (
    // top-[60px] clears the sub-nav (≈53px tall) so card is never hidden underneath it
    <aside ref={ref} className="sticky top-[60px] h-fit animate-slideUp">

      {/* Discount banner — separate small card ABOVE the main booking card */}
      <div className="mb-3 flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="#00A699" strokeWidth="1.5">
            <path d="M1 1h6l7 7-6 6-7-7V1z" />
            <circle cx="4" cy="4" r="1" fill="#00A699" stroke="none" />
          </svg>
          <span>
            Get 10% off your next stay.{" "}
            <span className="font-medium underline">Terms apply</span>
          </span>
        </div>
        <button className="focus-ring rounded-lg border border-hof px-3 py-1.5 text-xs font-semibold hover:bg-gray-50">
          Claim
        </button>
      </div>

      {/* Main booking card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-semibold">
            {listing.currency}
            {total.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-hof">for {nights} nights</span>
        </div>

        {/* Rating */}
        <div className="mt-1 flex items-center gap-1 text-sm">
          <Star size={13} fill="currentColor" />
          <span className="font-semibold">{listing.rating}</span>
          <span className="text-foggy">·</span>
          <span className="text-foggy underline">
            {listing.reviewCount} reviews
          </span>
        </div>

        {/* Dates + guests */}
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-300">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-gray-300 p-3">
              <label className="block text-[10px] font-bold uppercase tracking-wide">
                Check-in
              </label>
              <span className="text-sm text-hof">10/18/2026</span>
            </div>
            <div className="border-b border-gray-300 p-3">
              <label className="block text-[10px] font-bold uppercase tracking-wide">
                Checkout
              </label>
              <span className="text-sm text-hof">10/23/2026</span>
            </div>
          </div>
          <button
            className="focus-ring flex w-full items-center justify-between p-3 text-left"
            onClick={() => setGuests((g) => (g >= listing.guests ? 1 : g + 1))}
          >
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wide">
                Guests
              </label>
              <span className="text-sm text-hof">
                {guests} guest{guests > 1 ? "s" : ""}
              </span>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Free cancellation */}
        <div className="mt-3 rounded-xl bg-gray-50 py-2.5 text-center text-sm text-foggy">
          Free cancellation before{" "}
          <span className="font-semibold text-hof">17 October</span>
        </div>

        {/* Reserve */}
        <button className="focus-ring mt-3 w-full rounded-xl bg-gradient-to-r from-rausch to-[#E61E4D] py-3.5 text-base font-semibold text-white transition hover:brightness-95">
          Reserve
        </button>

        <p className="mt-3 text-center text-sm text-foggy">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Report this listing */}
      <button className="focus-ring mx-auto mt-4 flex items-center gap-1.5 text-sm text-foggy underline hover:text-hof">
        <Flag size={13} />
        Report this listing
      </button>
    </aside>
  );
});

export default BookingCard;
