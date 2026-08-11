"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { business } from "@/lib/site";
import { PhoneIcon } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  /** Which desktop dropdown is showing, if any. Only one opens at a time. */
  const [menu, setMenu] = useState<"services" | "areas" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white">
      {/* Utility bar: license + hours are trust signals, phone is the primary conversion. */}
      <div className="hidden bg-ink-900 py-2 text-white lg:block">
        <div className="container-x flex items-center justify-between text-xs">
          <p>
            Licensed &amp; Insured · Serving the Phoenix Metro Area
          </p>
          <p className="flex items-center gap-4">
            <a
              href={`tel:${business.phoneHref}`}
              className="font-semibold hover:text-white hover:underline"
            >
              {business.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="container-x flex h-24 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          {/* The logo badge already contains the company name, so no wordmark
              sits beside it. The header matches the logo's own blue field, so
              the artwork blends in flush rather than reading as a pasted tile. */}
          {/* unoptimized: Next's re-encoding shifts the logo's background blue
              off #38B5FF, which would show as a seam against the header. */}
          <Image
            src="/logo.jpg"
            alt={`${business.name} — ${business.motto}`}
            width={765}
            height={510}
            priority
            unoptimized
            className="h-16 w-auto sm:h-[4.5rem]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>

          <Dropdown
            label="Services"
            href="/services"
            isOpen={menu === "services"}
            onOpen={() => setMenu("services")}
            onClose={() => setMenu(null)}
            footerLabel="View all services"
          >
            <div className="w-72 p-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-brand-700"
                  onClick={() => setMenu(null)}
                >
                  {s.navLabel}
                </Link>
              ))}
            </div>
          </Dropdown>

          <Dropdown
            label="Service Areas"
            href="/service-areas"
            isOpen={menu === "areas"}
            onOpen={() => setMenu("areas")}
            onClose={() => setMenu(null)}
            footerLabel="View all service areas"
            align="right"
          >
            {/* All 16 cities in a 3-column grid so the panel stays a
                reasonable height instead of running off the viewport. */}
            <div className="grid w-[34rem] grid-cols-3 gap-x-2 p-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/roofing-contractor/${c.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-brand-700"
                  onClick={() => setMenu(null)}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Dropdown>
          <NavLink href="/financing">Financing</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneHref}`}
            className="hidden items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-800 sm:inline-flex"
          >
            <PhoneIcon /> {business.phone}
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-ink-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-sky-brand-dark/40 bg-white lg:hidden">
          <nav className="container-x space-y-1 py-4" aria-label="Mobile">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>About Us</MobileLink>
            <p className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-wider text-ink-400">
              Services
            </p>
            {services.map((s) => (
              <MobileLink key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                {s.navLabel}
              </MobileLink>
            ))}
            <p className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-wider text-ink-400">
              Service Areas
            </p>
            {/* Two columns so all 16 cities fit without a long scroll. */}
            <div className="grid grid-cols-2 gap-x-2">
              {cities.map((c) => (
                <MobileLink
                  key={c.slug}
                  href={`/roofing-contractor/${c.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {c.name}
                </MobileLink>
              ))}
            </div>
            <MobileLink href="/service-areas" onClick={() => setOpen(false)}>
              All service areas →
            </MobileLink>
            <div className="pt-4">
              <MobileLink href="/financing" onClick={() => setOpen(false)}>Financing</MobileLink>
              <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            </div>
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-bold text-white"
            >
              <PhoneIcon /> Call {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/**
 * Hover-and-click nav dropdown.
 *
 * The trigger is a real link, so the parent page stays reachable by click and
 * by keyboard; hovering (or focusing within) reveals the panel. The panel is
 * positioned with a small top offset and the wrapper carries bottom padding,
 * which bridges the gap under the trigger — without it the menu closes as the
 * pointer travels from the button down into the list.
 */
function Dropdown({
  label,
  href,
  isOpen,
  onOpen,
  onClose,
  footerLabel,
  align = "left",
  children,
}: {
  label: string;
  href: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  footerLabel: string;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        // Only close once focus has left the trigger and the panel entirely.
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <Link
        href={href}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-ink-900 hover:bg-white/70 hover:text-brand-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M5.5 7.5 10 12l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {isOpen && (
        <div className={`absolute top-full pt-2 ${align === "right" ? "right-0" : "left-0"}`}>
          <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-xl">
            {children}
            <Link
              href={href}
              className="block border-t border-ink-200 bg-ink-50 px-5 py-3 text-sm font-bold text-brand-600 hover:bg-ink-100"
              onClick={onClose}
            >
              {footerLabel} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-base font-semibold text-ink-900 hover:bg-white/70 hover:text-brand-700"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-700 hover:bg-ink-50"
    >
      {children}
    </Link>
  );
}
