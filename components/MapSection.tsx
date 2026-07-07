"use client";

import { MapPin } from "lucide-react";
import { listing } from "@/lib/data";

export default function MapSection() {
  const { lat, lng } = listing.mapLocation;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02}%2C${lat - 0.015}%2C${lng + 0.02}%2C${lat + 0.015}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div id="location" className="border-t border-gray-200 pt-10 scroll-mt-36 mt-10">
      <h2 className="text-xl font-semibold">Where you&apos;ll be</h2>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-foggy">
        <MapPin size={14} />
        {listing.location}
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
        <iframe
          title="Property location map"
          src={mapUrl}
          width="100%"
          height="380"
          className="block"
          loading="lazy"
        />
      </div>

      <p className="mt-3 text-sm text-foggy">
        Exact location will be provided after booking.
      </p>

      <div className="mt-4">
        <p className="font-semibold">Neighbourhood highlights</p>
        <p className="mt-1 text-sm leading-relaxed text-foggy">
          Located in the heart of Candolim, Amor De Goa offers a peaceful stay
          with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="focus-ring mt-2 flex items-center gap-1 text-sm font-semibold underline hover:text-foggy">
          Show more <span className="font-normal">›</span>
        </button>
      </div>
    </div>
  );
}
