import Link from "next/link";
import type { Metadata } from "next";
import { ArrowIcon, BulletList, Card, Section } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/services";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Phoenix Roofing, Siding & Gutters",
  description:
    "Full-service exterior restoration across the Phoenix Metro: roofing, storm damage repair, siding, windows, gutters, painting and insurance claims.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="What We Do"
        title="Exterior Restoration Services for Phoenix Metro Homes"
        intro="From the roof down to the deck stain, we protect and restore your entire home envelope — with the insurance expertise to make sure it's paid for correctly."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="space-y-14">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className={`grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start ${
                i > 0 ? "border-t border-ink-200 pt-14" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl">
                  <Link href={`/services/${service.slug}`} className="hover:text-brand-700">
                    {service.name}
                  </Link>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{service.tagline}</p>
                <p className="mt-4 leading-relaxed text-ink-600">{service.intro}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:gap-2.5 hover:underline"
                >
                  Explore {service.shortName} <ArrowIcon />
                </Link>
              </div>
              <Card>
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                  What&apos;s Included
                </h3>
                <div className="mt-4">
                  <BulletList items={service.highlights} />
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
