import type { Metadata } from "next";
import { Card, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Free Phoenix Roof Inspections",
  description:
    "Contact us for a free roof inspection or estimate. Call (720) 421-6615, open 7 days a week, 7 AM to 9 PM. Serving the Phoenix Metro area.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Get In Touch"
        title="We're Here to Help You"
        intro="Whether you have an active leak, storm damage you need assessed, or you're planning an exterior project — reach out and we'll give you an honest answer."
        breadcrumbs={crumbs}
        highlights={[
          "Free, no-obligation inspections",
          "Open 7 days a week, 7 AM – 9 PM",
          "Emergency tarping for active leaks",
          "Insurance claim guidance at no extra cost",
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div>
            <SectionHeading
              eyebrow="Contact Information"
              title="Reach Us Directly"
              intro="Prefer to talk it through? Call us — you'll reach someone who can actually answer your questions."
            />

            <div className="space-y-6">
              <Card>
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">Phone</h2>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="mt-2 block text-2xl font-black text-brand-600 hover:text-brand-700"
                >
                  {business.phone}
                </a>
                <a
                  href={`tel:${business.altPhoneHref}`}
                  className="mt-1 block text-lg font-semibold text-ink-700 hover:text-brand-600"
                >
                  {business.altPhone}
                </a>
              </Card>

              <Card>
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">Email</h2>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-2 block text-lg font-semibold text-ink-900 hover:text-brand-600"
                >
                  {business.email}
                </a>
              </Card>

              <Card>
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">Office</h2>
                <address className="mt-2 not-italic leading-relaxed text-ink-700">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </address>
              </Card>

              <Card>
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">Hours</h2>
                <p className="mt-2 font-semibold text-ink-900">{business.hours}</p>
                <p className="mt-2 text-sm text-ink-500">
                  Available seven days a week — including weekends during storm season.
                </p>
              </Card>

              <Card>
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
                  Licensed &amp; Insured
                </h2>
                <p className="mt-2 font-semibold text-ink-900">License #{business.license}</p>
                <p className="mt-2 text-sm text-ink-500">
                  Fully licensed and insured in the state of Arizona.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have an Active Leak?"
        body="Don't wait. Call us now — we prioritize active water intrusion and can tarp the same day to stop further damage."
      />
    </>
  );
}
