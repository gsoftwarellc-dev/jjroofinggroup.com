import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BulletList, FaqList, Section, SectionHeading } from "@/components/ui";
import { CtaBand, InfoStat, PageHero, ProcessSteps, ServiceGrid, TestimonialBlock } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { cities, citySlugs, getCity } from "@/lib/cities";
import { services } from "@/lib/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  localBusinessSchema,
} from "@/lib/seo";
import { business } from "@/lib/site";

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  return buildMetadata({
    title: `Roofing Contractor in ${city.name}, CO`,
    description: `Licensed ${city.name}, CO roofing contractor. Roof replacement, hail damage repair, siding, windows and gutters with insurance claim support.`,
    path: `/roofing-contractor/${city.slug}`,
  });
}

function cityFaqs(cityName: string, county: string) {
  return [
    {
      q: `Do you serve all of ${cityName}, CO?`,
      a: `Yes. We serve every neighborhood in ${cityName} and the surrounding ${county} area. Our crews work throughout the Phoenix Metro every day, so scheduling an inspection in ${cityName} is usually quick — often within a few business days, and faster for active leaks.`,
    },
    {
      q: `How much does a roof replacement cost in ${cityName}?`,
      a: `Cost depends on your roof's size and pitch, the material you choose, and whether decking repair is needed once we tear off. If the damage came from a storm, your insurance policy may cover most of the replacement beyond your deductible. We provide free, written estimates for ${cityName} homeowners so you know exactly where you stand before committing to anything.`,
    },
    {
      q: `Do you handle insurance claims for ${cityName} homeowners?`,
      a: `Yes. Our team includes licensed insurance adjusters as well as career builders. We document all damage with photos, help you file, meet your adjuster on the roof, and negotiate the settlement needed to restore your ${cityName} property to pre-storm condition and better.`,
    },
    {
      q: `Are you licensed and insured to work in ${cityName}?`,
      a: `Yes. We are fully licensed and insured, and we pull the proper permits for every jurisdiction we work in. We are locally owned and operated — not an out-of-state storm chasing crew that disappears after the season.`,
    },
    {
      q: `How fast can you get to a roof leak in ${cityName}?`,
      a: `Call ${business.phone}. We are available seven days a week from 7:00 AM to 9:00 PM and prioritize active leaks in ${cityName}. We can provide emergency tarping to stop further interior water damage while a permanent repair is scheduled.`,
    },
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: city.name, path: `/roofing-contractor/${city.slug}` },
  ];

  const description = `Licensed roofing and exterior restoration contractor serving ${city.name}, Arizona. Roof replacement, storm and hail damage repair, siding, windows, gutters and painting with insurance claim support.`;
  const faqs = cityFaqs(city.name, city.county);
  const nearby = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            cityName: city.name,
            lat: city.lat,
            lng: city.lng,
            path: `/roofing-contractor/${city.slug}`,
            description,
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${city.county} · Arizona`}
        title={`Roofing Contractor in ${city.name}, CO`}
        intro={city.intro}
        breadcrumbs={crumbs}
        highlights={[
          `Free roof inspections throughout ${city.name}`,
          "Class 4 impact-resistant shingle systems",
          "Licensed insurance adjusters on staff",
          `Licensed & insured`,
          `Open 7 days a week, 7 AM – 9 PM`,
        ]}
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <div className="mb-10 grid gap-6 sm:grid-cols-3">
              <InfoStat value={city.population} label={`${city.name} residents`} />
              <InfoStat value={city.proximity} label="Location" />
              <InfoStat value="7 Days" label="A week, 7 AM – 9 PM" />
            </div>

            <h2 className="text-2xl sm:text-3xl">
              What Makes Roofing in {city.name} Different
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">{city.localContext}</p>

            <div className="mt-8 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-6">
              <p className="font-semibold text-ink-900">Why {city.name} homeowners call us</p>
              <p className="mt-2 leading-relaxed text-ink-600">{city.angle}</p>
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">
                Neighborhoods We Serve in {city.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Our crews work across {city.name} and the surrounding {city.county} area, including:
              </p>
              <div className="mt-6">
                <BulletList items={city.neighborhoods} columns />
              </div>
              <p className="mt-6 text-sm text-ink-500">
                Serving ZIP codes {city.zips.join(", ")} and nearby.
              </p>
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">
                Roofing Restoration in {city.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                If a storm has moved through {city.name}, don&apos;t wait for a visible leak to act.
                Damage is frequently invisible from the ground, and most Arizona policies give
                you a limited window to file. We provide a free, photo-documented inspection, help
                you file the claim, and meet your adjuster on the roof so nothing gets under-scoped.
              </p>
              <div className="mt-6">
                <BulletList
                  items={[
                    `Free roofing inspection anywhere in ${city.name}`,
                    "Emergency tarping to stop active water intrusion",
                    "Assistance with your insurance claim",
                    "Expert restoration for residential and commercial",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-sm lg:sticky lg:top-32">
             <Image
                src="/projects/project_3.jpg"
                alt={`Roofing work in ${city.name} by JJ Roofing Group`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow={`${city.name}, Arizona`}
          title={`Our Services in ${city.name}`}
          intro={`Every exterior service we offer is available throughout ${city.name} and ${city.county}.`}
          center
        />
        <ServiceGrid cityName={city.name} citySlug={city.slug} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title={`Working With Us in ${city.name}`}
          intro="Same process, every project — so you always know what happens next."
          center
        />
        <ProcessSteps
          steps={[
            {
              title: "Free Inspection",
              body: `We come to your ${city.name} property and document the full condition of your roof and exterior with photos.`,
            },
            {
              title: "Honest Report",
              body: "You get a clear walkthrough of what we found and a written estimate — including when repair beats replacement.",
            },
            {
              title: "Claim Support",
              body: "If it's storm related, we help file, meet your adjuster on site, and handle supplements.",
            },
            {
              title: "Restoration",
              body: "We complete the work with a magnetic nail sweep and full cleanup when we're done.",
            },
          ]}
        />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Reviews"
          title="What Phoenix Metro Homeowners Say"
          center
        />
        <TestimonialBlock />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions"
          title={`Roofing FAQs for ${city.name} Homeowners`}
        />
        <FaqList faqs={faqs} />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Nearby"
          title="We Also Serve These Valley of the Sun Cities"
          center
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((c) => (
            <Link
              key={c.slug}
              href={`/roofing-contractor/${c.slug}`}
              className="rounded-lg border border-ink-200 bg-white px-4 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              Roofing in {c.name}, CO
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/roofing-contractor/${city.slug}/${s.slug}`}
              className="rounded-lg border border-ink-200 bg-white px-4 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {s.shortName} in {city.name}
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Ready to Restore Your ${city.name} Home?`}
        body={`Get an honest, no-pressure assessment of your property from a licensed local contractor. Free inspections throughout ${city.name} and ${city.county}.`}
      />
    </>
  );
}
