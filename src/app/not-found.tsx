import Link from "next/link";
import { Button, Section } from "@/components/ui";
import { services } from "@/lib/services";
import { featuredCities } from "@/lib/cities";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">This page isn&apos;t here</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-600">
          The page you&apos;re looking for may have moved. Try one of the links below, or give us a
          call at{" "}
          <a href={`tel:${business.phoneHref}`} className="font-semibold text-brand-600 hover:underline">
            {business.phone}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-ink-500">
          Popular Pages
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 hover:border-brand-500 hover:text-brand-700"
            >
              {s.name}
            </Link>
          ))}
          {featuredCities.map((c) => (
            <Link
              key={c.slug}
              href={`/roofing-contractor/${c.slug}`}
              className="rounded-lg border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 hover:border-brand-500 hover:text-brand-700"
            >
              Roofing in {c.name}, CO
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
