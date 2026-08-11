import Link from "next/link";
import type { Metadata } from "next";
import { Card, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas | Phoenix Metro Roofing",
  description:
    "We serve Phoenix, Aurora, Lakewood, Centennial, Highlands Ranch, Littleton, Arvada, Westminster, Thornton, Parker, Golden and the Valley of the Sun.",
  path: "/service-areas",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Where We Work"
        title="Roofing & Exterior Restoration Across the Phoenix Metro"
        intro="We're local to the core. Our trucks are on the road every day across the Valley of the Sun — from roofing restoration in Highlands Ranch to siding repair in Thornton and storm response in Aurora."
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading
          eyebrow={`${cities.length} Cities Served`}
          title="Find Your City"
          intro="Each location page covers the specific conditions homeowners face there — housing stock, storm exposure, HOA requirements, and permitting."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Card key={city.slug} className="flex flex-col">
              <h2 className="text-xl font-bold text-ink-900">
                <Link
                  href={`/roofing-contractor/${city.slug}`}
                  className="hover:text-brand-700"
                >
                  {city.name}, CO
                </Link>
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-400">
                {city.county} · {city.proximity}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{city.intro}</p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-200 pt-4">
                {services.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/roofing-contractor/${city.slug}/${s.slug}`}
                    className="rounded-full bg-ink-100 px-3 py-1.5 text-xs font-semibold text-ink-600 hover:bg-brand-100 hover:text-brand-700"
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
              <Link
                href={`/roofing-contractor/${city.slug}`}
                className="mt-4 text-sm font-bold text-brand-600 hover:underline"
              >
                View {city.name} page →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Not Listed?"
          title="We Likely Still Cover You"
          intro={`Our service area extends across the Phoenix Metro and into the Valley of the Sun foothills. If you don't see your city above, call us at ${business.phone} — there's a good chance we're already working nearby.`}
          center
        />
      </Section>

      <CtaBand />
    </>
  );
}
