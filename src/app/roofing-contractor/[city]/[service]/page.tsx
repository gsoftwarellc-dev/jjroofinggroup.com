import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BulletList, Card, FaqList, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero, TestimonialBlock } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { cities, citySlugs, getCity } from "@/lib/cities";
import { getService, services, serviceSlugs } from "@/lib/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo";
import { business } from "@/lib/site";

/**
 * The city × service matrix. These are the highest-intent pages on the site
 * ("siding contractors in Arvada"), so each one carries city-specific context
 * and its own FAQ set rather than swapping a token into a shared template.
 */
export function generateStaticParams() {
  return citySlugs.flatMap((city) => serviceSlugs.map((service) => ({ city, service })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};

  return buildMetadata({
    title: `${service.metaTitle} in ${city.name}, CO`,
    // Kept near ~155 chars so it isn't truncated in results.
    description: `${service.shortName} in ${city.name}, CO from a licensed, locally owned contractor. Free inspections and full insurance claim support — call ${business.phone}.`,
    path: `/roofing-contractor/${city.slug}/${service.slug}`,
  });
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  const path = `/roofing-contractor/${city.slug}/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: city.name, path: `/roofing-contractor/${city.slug}` },
    { name: service.navLabel, path },
  ];

  const description = `${service.name} in ${city.name}, Arizona. ${service.tagline}`;

  // Localized FAQs — the generic service FAQs plus two that are specific to
  // this city, so the page has answers no other page on the site duplicates.
  const localFaqs = [
    {
      q: `Do you offer ${service.shortName.toLowerCase()} throughout ${city.name}?`,
      a: `Yes. We provide ${service.shortName.toLowerCase()} across all of ${city.name} and the surrounding ${city.county} area, including ${city.neighborhoods.slice(0, 4).join(", ")}, and nearby neighborhoods. ${city.proximity === "Our home base" ? "Phoenix is our home base, so scheduling is typically fast." : `We're about ${city.proximity.toLowerCase()} from our Phoenix shop and work in the area regularly.`}`,
    },
    {
      q: `What should ${city.name} homeowners know before starting this project?`,
      a: city.localContext,
    },
    ...service.faqs,
  ];

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${service.name} in ${city.name}, CO`,
            description,
            path,
            areaName: city.name,
          }),
          localBusinessSchema({
            cityName: city.name,
            lat: city.lat,
            lng: city.lng,
            path,
            description,
          }),
          faqSchema(localFaqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${city.name}, Arizona`}
        title={`${service.name} in ${city.name}, CO`}
        intro={service.tagline}
        breadcrumbs={crumbs}
        highlights={service.highlights}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div>
            {/* City-specific opener before the service content — this is the
                part that differentiates the page from its siblings. */}
            <h2 className="text-2xl sm:text-3xl">
              {service.shortName} Built for {city.name} Homes
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">{city.intro}</p>
            <p className="mt-4 leading-relaxed text-ink-600">{city.localContext}</p>

            <div className="mt-8 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-6">
              <p className="font-semibold text-ink-900">
                Why {city.name} homeowners choose JJ Roofing Group
              </p>
              <p className="mt-2 leading-relaxed text-ink-600">{city.angle}</p>
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">
                About Our {service.shortName} Service
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">{service.intro}</p>
            </div>

            <div className="mt-12 space-y-12">
              {service.sections.map((section) => (
                <div key={section.heading} className="border-t border-ink-200 pt-10">
                  <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-ink-600">{section.body}</p>
                  {section.bullets && (
                    <div className="mt-6">
                      <BulletList items={section.bullets} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">
                Neighborhoods We Serve in {city.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                We provide {service.shortName.toLowerCase()} across {city.name}, including:
              </p>
              <div className="mt-6">
                <BulletList items={city.neighborhoods} columns />
              </div>
              <p className="mt-6 text-sm text-ink-500">
                Serving ZIP codes {city.zips.join(", ")} and the surrounding {city.county} area.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted Across the Valley of the Sun"
          center
        />
        <TestimonialBlock />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions"
          title={`${service.shortName} FAQs for ${city.name}`}
        />
        <FaqList faqs={localFaqs} />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="More in This Area"
          title={`Other Services We Offer in ${city.name}`}
          center
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
            <Card key={s.slug} className="flex flex-col">
              <h3 className="text-lg font-bold text-ink-900">
                {s.shortName} in {city.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{s.tagline}</p>
              <Link
                href={`/roofing-contractor/${city.slug}/${s.slug}`}
                className="mt-5 text-sm font-bold text-brand-600 hover:underline"
              >
                Learn more →
              </Link>
            </Card>
          ))}
        </div>

        <h3 className="mt-14 text-center text-lg font-bold text-ink-900">
          {service.shortName} in Nearby Cities
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherCities.map((c) => (
            <Link
              key={c.slug}
              href={`/roofing-contractor/${c.slug}/${service.slug}`}
              className="rounded-lg border border-ink-200 bg-white px-4 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {service.shortName} in {c.name}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-500">
          Looking for everything we do in this area?{" "}
          <Link
            href={`/roofing-contractor/${city.slug}`}
            className="font-semibold text-brand-600 hover:underline"
          >
            See our full {city.name} service page
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title={`Need ${service.shortName} in ${city.name}?`}
        body={`Get a free, no-obligation inspection and a written estimate from a licensed local contractor. Call ${business.phone} or request a callback.`}
      />
    </>
  );
}
