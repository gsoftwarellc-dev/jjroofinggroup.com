import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { insuranceCarriers } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Carrier Claim Phone Numbers",
  description:
    "Direct claim phone numbers for major insurance carriers serving Arizona — Allstate, State Farm, USAA, Farmers, Progressive and more.",
  path: "/insurance-carriers",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insurance Claims", path: "/services/insurance-claims" },
  { name: "Carrier Phone Numbers", path: "/insurance-carriers" },
];

export default function InsuranceCarriersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Quick Reference"
        title="Insurance Carrier Claim Phone Numbers"
        intro="Filing a storm damage claim? Here are the direct claim lines for the major carriers serving Arizona homeowners. Call us first if you'd like us to inspect before you file."
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading
          eyebrow="Carrier Directory"
          title="Report a Claim"
          intro="Have your policy number and the approximate date of the storm ready before you call. If you're not sure of the date of loss, we can help identify it using local storm data."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insuranceCarriers.map((carrier) => (
            <div
              key={carrier.name}
              className="rounded-xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-base font-bold text-ink-900">{carrier.name}</h2>
              <a
                href={`tel:${carrier.phone.replace(/[^\d]/g, "")}`}
                className="mt-2 block text-lg font-bold text-brand-600 hover:text-brand-700"
              >
                {carrier.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-7">
          <h2 className="text-lg font-bold text-ink-900">Before You File — A Word of Advice</h2>
          <p className="mt-3 leading-relaxed text-ink-600">
            Filing before anyone has actually assessed your roof can work against you. If an
            adjuster inspects and finds damage they consider below your deductible, the claim
            closes and re-opening it later is harder. We recommend a free inspection first so you
            know what you have.{" "}
            <Link href="/services/insurance-claims" className="font-semibold text-brand-700 hover:underline">
              See how our claim support works
            </Link>
            .
          </p>
        </div>
      </Section>

      <CtaBand
        title="Need Help With Your Claim?"
        body="We have licensed insurance adjusters on staff. We document the damage, help you file, and meet your adjuster on the roof."
      />
    </>
  );
}
