import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button, BulletList, Card, FaqList, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { getService, services, serviceSlugs } from "@/lib/services";
import { cities } from "@/lib/cities";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.metaTitle} in Arizona`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            areaName: "Arizona",
          }),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow="Arizona Roofing Service"
        title={`${service.name}`}
        intro={service.tagline}
        breadcrumbs={crumbs}
        highlights={service.highlights}
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-lg leading-relaxed text-ink-600">{service.intro}</p>

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
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm lg:sticky lg:top-32">
             <Image
                src="/projects/project_2.jpg"
                alt={`${service.name} project by JJ Roofing Group`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>
      </Section>

      {/* City interlinking — this is what makes the location pages crawlable. */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Service Areas"
          title={`${service.shortName} Across the Phoenix Metro`}
          intro={`We provide ${service.shortName.toLowerCase()} throughout the Valley of the Sun. Choose your city for local details, or call us to confirm coverage.`}
          center
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/roofing-contractor/${city.slug}/${service.slug}`}
              className="rounded-lg border border-ink-200 bg-white px-4 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {service.shortName} in {city.name}
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions"
          title={`${service.shortName} FAQs`}
          intro="Straight answers to what Phoenix Metro homeowners ask us most."
        />
        <FaqList faqs={service.faqs} />
      </Section>

      {related.length > 0 && (
        <Section tone="light">
          <SectionHeading eyebrow="Also Consider" title="Related Services" center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Card key={r.slug} className="flex flex-col">
                <h3 className="text-lg font-bold text-ink-900">{r.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{r.tagline}</p>
                <Button href={`/services/${r.slug}`} variant="ghost" className="mt-5 w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
