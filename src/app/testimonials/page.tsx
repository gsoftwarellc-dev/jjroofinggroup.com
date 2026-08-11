import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero, TestimonialBlock } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { trustPoints } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials | Phoenix Roofing Reviews",
  description:
    "Read reviews from Phoenix Metro homeowners who trusted JJ Roofing Group with their roofing, siding, and exterior renovation projects.",
  path: "/testimonials",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Reviews"
        title="Feedback That Reflects Our Commitment"
        intro="See what our clients say about our roofing and home renovation work across the Phoenix Metro area."
        breadcrumbs={crumbs}
      />

      <Section>
        <TestimonialBlock />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Why Homeowners Recommend Us"
          title="The Standard Behind the Reviews"
          center
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl border border-ink-200 bg-white p-6">
              <h3 className="text-base font-bold text-ink-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{point.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to Join Them?"
        body="Get a free, honest assessment of your property from a licensed local contractor."
      />
    </>
  );
}
