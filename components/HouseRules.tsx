"use client";

import { CalendarX, Search, ShieldCheck } from "lucide-react";

export default function HouseRules() {
  return (
    <div className="border-t border-gray-200 pt-10 mt-10">
      <h2 className="text-xl font-semibold">Things to know</h2>

      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {/* Cancellation policy */}
        <div>
          <CalendarX size={24} className="mb-3 text-hof" />
          <h3 className="font-semibold">Cancellation policy</h3>
          <div className="mt-3 space-y-1 text-sm text-hof">
            <p>Free cancellation before 17 October.</p>
            <p>Cancel before check-in on 18 October for a partial refund.</p>
            <p className="mt-2 text-foggy">
              Review this host&apos;s full policy for details.
            </p>
          </div>
          <button className="focus-ring mt-3 text-sm font-semibold underline hover:text-foggy">
            Learn more
          </button>
        </div>

        {/* House rules */}
        <div>
          <Search size={24} className="mb-3 text-hof" />
          <h3 className="font-semibold">House rules</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-hof">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <button className="focus-ring mt-3 text-sm font-semibold underline hover:text-foggy">
            Learn more
          </button>
        </div>

        {/* Safety & property */}
        <div>
          <ShieldCheck size={24} className="mb-3 text-hof" />
          <h3 className="font-semibold">Safety &amp; property</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-hof">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <button className="focus-ring mt-3 text-sm font-semibold underline hover:text-foggy">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
