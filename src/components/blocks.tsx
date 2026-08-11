import Link from "next/link";
import type { ReactNode } from "react";
import { business, testimonials } from "@/lib/site";
import { services } from "@/lib/services";
import { ArrowIcon, Breadcrumbs, Button, CallButton, Card, CheckIcon, PhoneIcon } from "./ui";

/** Dark hero used by every interior page. Keeps H1 treatment consistent. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  highlights,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  breadcrumbs: { name: string; path: string }[];
  highlights?: readonly string[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-14 sm:py-18 lg:py-24">
      <div className="container-x relative">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            {eyebrow && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <Button href="/contact" variant="ghost" className="border-ink-600 text-white hover:border-white hover:bg-ink-800">
                Get a Free Inspection
              </Button>
            </div>
          </div>

          {highlights && highlights.length > 0 && (
            <div className="rounded-xl border border-ink-700 bg-ink-800/60 p-6 sm:p-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                What You Get
              </h2>
              <ul className="mt-4 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Final conversion block. Present on every page — matches the live site's CTA. */
export function CtaBand({
  title = "Ready to Restore Your Home?",
  body = "Don't wait for a leak to become a flood. Contact JJ Roofing Group today for an honest assessment of your property.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-600 py-16 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-50">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white">
              Get Your Free Inspection
            </Button>
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <PhoneIcon /> {business.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-100">
            Licensed &amp; Insured · {business.hours}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid({
  heading = "Our Services",
  cityName,
  citySlug,
  exclude,
}: {
  heading?: string;
  cityName?: string;
  citySlug?: string;
  exclude?: string;
}) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <div>
      <h2 className="sr-only">{heading}</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => {
          const href = citySlug
            ? `/roofing-contractor/${citySlug}/${s.slug}`
            : `/services/${s.slug}`;
          return (
            <Card key={s.slug} className="flex flex-col">
              <h3 className="text-lg font-bold text-ink-900">
                {cityName ? `${s.shortName} in ${cityName}` : s.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{s.tagline}</p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:gap-2.5 hover:underline"
              >
                Learn more <ArrowIcon />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export function TestimonialBlock() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((t) => (
        <figure
          key={t.author}
          className="flex flex-col rounded-xl border border-ink-200 bg-white p-7"
        >
          <div className="flex gap-0.5 text-brand-500" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
              </svg>
            ))}
          </div>
          <blockquote className="mt-4 flex-1 leading-relaxed text-ink-600">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-ink-200 pt-4">
            <span className="block font-bold text-ink-900">{t.author}</span>
            <span className="block text-sm text-ink-500">{t.location}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-xl border border-ink-200 bg-white p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-base font-black text-white">
            {i + 1}
          </span>
          <h3 className="mt-4 text-base font-bold text-ink-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function InfoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-brand-500 pl-4">
      <p className="text-3xl font-black text-ink-900">{value}</p>
      <p className="mt-1 text-sm text-ink-500">{label}</p>
    </div>
  );
}

export function ContentSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-ink-200 pt-10">
      <h2 className="text-2xl sm:text-3xl">{heading}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}
