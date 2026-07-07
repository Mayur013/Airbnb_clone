"use client";

import { Search, Globe, Menu, CircleUserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-30 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-rausch focus-ring"
          aria-label="Airbnb home"
        >
          <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
            <path d="M16 1c-2 0-3.6 1.6-3.6 3.6 0 1.1.5 2.1 1.2 2.8-2.9 2.6-6.7 7.7-6.7 11.9 0 5 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1c0-4.2-3.8-9.3-6.7-11.9.7-.7 1.2-1.7 1.2-2.8C19.6 2.6 18 1 16 1zm0 24.4c-3.4 0-6.1-2.7-6.1-6.1 0-3.2 3.4-7.7 6.1-10.2 2.7 2.5 6.1 7 6.1 10.2 0 3.4-2.7 6.1-6.1 6.1z" />
          </svg>
          <span className="hidden text-xl font-bold tracking-tight md:block">
            airbnb
          </span>
        </a>

        {/* Search pill */}
        <button
          className="focus-ring flex items-center gap-3 rounded-full border border-gray-200 py-2 pl-4 pr-2 shadow-sm transition hover:shadow-md"
          aria-label="Search"
        >
          <span className="text-sm font-medium">Anywhere</span>
          <span className="hidden h-4 w-px bg-gray-300 md:block" />
          <span className="hidden text-sm font-medium md:block">
            Any week
          </span>
          <span className="hidden h-4 w-px bg-gray-300 md:block" />
          <span className="hidden text-sm text-foggy md:block">
            Add guests
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rausch text-white">
            <Search size={14} strokeWidth={3} />
          </span>
        </button>

        {/* User menu */}
        <div className="flex items-center gap-3">
          <button className="focus-ring hidden rounded-full px-4 py-3 text-sm font-medium hover:bg-gray-100 md:block">
            Airbnb your home
          </button>
          <button
            className="focus-ring rounded-full p-3 hover:bg-gray-100"
            aria-label="Language"
          >
            <Globe size={18} />
          </button>
          <button
            className="focus-ring flex items-center gap-3 rounded-full border border-gray-200 p-2 pl-3 shadow-sm hover:shadow-md"
            aria-label="Main menu"
          >
            <Menu size={16} />
            <CircleUserRound size={28} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
