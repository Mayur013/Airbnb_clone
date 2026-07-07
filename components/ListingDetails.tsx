"use client";

import { useState } from "react";
import {
  Share,
  Heart,
  BadgeCheck,
  Star,
  Waves,
  Wifi,
  Wind,
  Car,
  WashingMachine,
  Laptop,
  Tv,
  ChefHat,
  Flame,
  ShieldCheck,
  Droplets,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { listing } from "@/lib/data";

const amenityIcons: Record<string, React.ReactNode> = {
  "Private jacuzzi": <Waves size={20} />,
  "Shared pool": <Droplets size={20} />,
  "Air conditioning": <Wind size={20} />,
  "Free WiFi": <Wifi size={20} />,
  "Fully equipped kitchen": <ChefHat size={20} />,
  "Free parking on premises": <Car size={20} />,
  "Washing machine": <WashingMachine size={20} />,
  "Dedicated workspace": <Laptop size={20} />,
  "TV with streaming": <Tv size={20} />,
  "Hair dryer": <Flame size={20} />,
  Iron: <ShieldCheck size={20} />,
  "Smoke alarm": <ShieldCheck size={20} />,
};

export function TitleRow() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-semibold leading-tight md:text-[26px]">
        {listing.title}
      </h1>
      <div className="flex shrink-0 items-center gap-4 pl-4">
        <button className="focus-ring flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold underline hover:bg-gray-100">
          <Share size={16} />
          Share
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className="focus-ring flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold underline hover:bg-gray-100"
        >
          <Heart
            size={16}
            fill={saved ? "#FF385C" : "none"}
            className={saved ? "text-rausch" : ""}
          />
          Save
        </button>
      </div>
    </div>
  );
}

export function StatsRow() {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-1 text-sm text-hof">
      <span>{listing.guests} guests</span>
      <span>·</span>
      <span>{listing.bedrooms} bedroom</span>
      <span>·</span>
      <span>{listing.beds} bed</span>
      <span>·</span>
      <span>{listing.bathrooms} bathroom</span>
    </div>
  );
}

/** Guest Favourite banner — compact layout matching reference image 1 */
export function GuestFavourite() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4">
      {/* Left: leaf icon + text */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <LaurelIcon />
          <div className="text-center">
            <p className="font-semibold leading-tight">
              Guest
              <br />
              favourite
            </p>
          </div>
          <LaurelIcon flipped />
        </div>

        <p className="max-w-[220px] text-sm text-hof leading-snug">
          One of the most loved homes on Airbnb,
          according to guests
        </p>
      </div>

      {/* Divider */}
      <div className="mx-4 hidden h-12 w-px bg-gray-200 sm:block" />

      {/* Stars + rating */}
      <div className="hidden flex-col items-center sm:flex">
          <p className="mt-1 text-xl font-bold">{listing.rating}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" className="text-hof" />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 hidden h-12 w-px bg-gray-200 sm:block" />

      {/* Review count */}
      <div className="hidden flex-col items-center sm:flex">
        <p className="text-xl font-bold">{listing.reviewCount}</p>
        <p className="text-sm text-foggy">Reviews</p>
      </div>
    </div>
  );
}
function LaurelIcon({ flipped = false }) {
  return (
    <svg
      viewBox="0 0 20 32"
      className={`h-8 w-5 text-hof ${flipped ? "scale-x-[-1]" : ""}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" />
    </svg>
  );
}

export function RatingRow() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Star size={16} fill="currentColor" />
      <span className="font-semibold">{listing.rating}</span>
      <span className="text-foggy">·</span>
      <span className="font-semibold underline">
        {listing.reviewCount} reviews
      </span>
      {listing.isSuperhost && (
        <>
          <span className="text-foggy">·</span>
          <BadgeCheck size={16} />
          <span className="font-semibold">Superhost</span>
        </>
      )}
    </div>
  );
}

export function Description() {
  const [expanded, setExpanded] = useState(false);
  const short = listing.description;
  const full = listing.descriptionFull;

  return (
    <div className="border-t border-gray-200 pt-10">
      <div className="relative text-base leading-relaxed text-hof">
        <p className="whitespace-pre-line">{expanded ? full : short}</p>
        {!expanded && full !== short && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      {full !== short && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="focus-ring mt-4 flex items-center gap-1 text-sm font-semibold underline hover:text-foggy"
        >
          {expanded ? "Show less" : "Show more"}{" "}
          <span className="font-normal">›</span>
        </button>
      )}
    </div>
  );
}

export function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? listing.amenities : listing.amenities.slice(0, 10);

  return (
    <div id="amenities" className="border-t border-gray-200 pt-10 scroll-mt-36 mt-10">
      <h2 className="text-xl font-semibold">What this place offers</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {shown.map((a) => (
          <div key={a} className="flex items-center gap-4 text-base">
            <span className="shrink-0 text-hof">
              {amenityIcons[a] ?? <ShieldCheck size={20} />}
            </span>
            <span>{a}</span>
          </div>
        ))}
      </div>
      {listing.amenities.length > 10 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="focus-ring mt-6 rounded-xl border border-hof px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
        >
          {showAll
            ? "Show fewer amenities"
            : `Show all ${listing.amenities.length} amenities`}
        </button>
      )}
    </div>
  );
}

/** "Meet your host" — no outer border, matches image 4 */
export function MeetYourHost() {
  return (
    <div className="border-t border-gray-200 pt-10 mt-10">
      <h2 className="mb-6 text-xl font-semibold">Meet your host</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[220px_1fr]">
          {/* ── Left: host avatar card ── */}
          <div>
            {/* Avatar card */}
            <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a5240] text-2xl font-bold text-white">
                  {listing.host.initials}
                </div>
                {listing.host.isSuperhost && (
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-rausch text-white">
                    <BadgeCheck size={13} />
                  </span>
                )}
              </div>
              <p className="mt-3 text-xl font-bold leading-snug">
                {listing.host.name}
              </p>
              <p className="text-sm text-foggy">Host</p>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-gray-200 pt-4 w-full text-center">
                <div>
                  <p className="text-base font-bold">{listing.host.reviewCount.toLocaleString()}</p>
                  <p className="text-xs text-foggy">Reviews</p>
                </div>
                <div>
                  <p className="text-base font-bold">
                    {listing.host.rating}
                    <Star size={11} fill="currentColor" className="ml-0.5 inline-block align-middle" />
                  </p>
                  <p className="text-xs text-foggy">Rating</p>
                </div>
                <div>
                  <p className="text-base font-bold">{listing.host.yearsHosting}</p>
                  <p className="text-xs text-foggy">Years hosting</p>
                </div>
              </div>
            </div>

            {/* Born / School below the card */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="shrink-0 text-foggy" />
                <span>Born in the 80s</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap size={16} className="shrink-0 text-foggy" />
                <span>Where I went to school: NICMAR GOA</span>
              </div>
            </div>
          </div>

          {/* ── Right: co-hosts + host details ── */}
          <div className="space-y-6">
            {/* Co-Hosts section */}
            <div>
              <h3 className="mb-3 font-semibold">Co-Hosts</h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                {listing.coHosts.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-2">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: ch.bg ?? ch.color,
                        color: ch.bg ? ch.color : "#ffffff",
                        border: ch.bg ? undefined : undefined,
                      }}
                    >
                      {ch.initials}
                    </div>
                    <span className="text-sm leading-tight">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host details */}
            <div>
              <h3 className="mb-2 font-semibold">Host details</h3>
              <div className="space-y-0.5 text-sm text-hof">
                <p>Response rate: {listing.host.responseRate}</p>
                <p>Responds {listing.host.responseTime}</p>
              </div>
            </div>

            {/* Message host */}
            <button className="focus-ring rounded-xl border border-hof px-6 py-3 text-sm font-semibold transition hover:bg-gray-50">
              Message host
            </button>

            {/* Safety note */}
            <p className="flex items-center gap-1.5 text-xs text-foggy">
              <ShieldCheck size={14} className="shrink-0" />
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </p>
          </div>
        </div>
    </div>
  );
}
