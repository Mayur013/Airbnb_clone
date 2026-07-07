"use client";

import { photos } from "@/lib/data";

const sleepRooms = [
  {
    photo: photos.find((p) => p.room === "Bedroom")!,
    name: "Bedroom",
    desc: "1 double bed",
  },
  {
    photo: photos.find((p) => p.room === "Living room")!,
    name: "Living room",
    desc: "1 sofa",
  },
];

export default function WhereYouSleep() {
  return (
    <div className="border-t border-gray-200 mt-10 pt-10">
      <h2 className="text-xl font-semibold">Where you&apos;ll sleep</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sleepRooms.map(({ photo, name, desc }) => (
          <div key={name}>
            {/* Image — rounded corners, no border */}
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={name}
                className="h-48 w-full object-cover"
              />
            </div>
            {/* Label below image, no box */}
            <div className="mt-3 px-1">
              <p className="font-semibold">{name}</p>
              <p className="mt-0.5 text-sm text-foggy">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
