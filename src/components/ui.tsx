import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/lib/site";

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "light" | "dark" | "brand";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    light: "bg-ink-50",
    dark: "bg-ink-900 text-ink-200",
    brand: "bg-brand-600 text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
        dark ? "text-brand-400" : "text-brand-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  center,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  center?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-12`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Tag
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors duration-150";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "bg-ink-900 text-white hover:bg-ink-800",
    ghost: "border-2 border-ink-300 text-ink-800 hover:border-ink-900 hover:bg-ink-50",
    white: "bg-white text-ink-900 hover:bg-ink-100",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function CallButton({
  variant = "primary",
  className = "",
}: {
  variant?: ButtonProps["variant"];
  className?: string;
}) {
  return (
    <Button href={`tel:${business.phoneHref}`} variant={variant} className={className} external>
      <PhoneIcon /> {business.phone}
    </Button>
  );
}

/**
 * Fixed call-now action pinned to the bottom of the viewport. Mobile shows a
 * circular icon-only tap target; wider screens get the number alongside it.
 */
export function FloatingCallButton() {
  return (
    <a
      href={`tel:${business.phoneHref}`}
      aria-label={`Call ${business.phone}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-brand-600 p-4 text-white shadow-lg shadow-ink-900/30 transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:px-5 sm:py-3.5"
    >
      <PhoneIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
      <span className="hidden text-sm font-bold sm:inline">Call Now</span>
    </a>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.79 6.8-6.79a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BulletList({
  items,
  dark,
  columns,
}: {
  items: readonly string[];
  dark?: boolean;
  columns?: boolean;
}) {
  return (
    <ul className={`space-y-3 ${columns ? "sm:columns-2 sm:gap-x-8 sm:space-y-0" : ""}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 ${columns ? "mb-3 break-inside-avoid" : ""} ${
            dark ? "text-ink-300" : "text-ink-600"
          }`}
        >
          <CheckIcon
            className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-brand-400" : "text-brand-600"}`}
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-ink-200 bg-white p-6 transition-shadow duration-200 hover:shadow-lg sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-400">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-ink-300" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Accordion-free FAQ: <details> keeps content in the DOM for crawlers. */
export function FaqList({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink-200 border-y border-ink-200">
      {faqs.map((faq) => (
        <details key={faq.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
            <h3 className="text-lg font-semibold text-ink-900">{faq.q}</h3>
            <span className="mt-1 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M10 4v12M4 10h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
