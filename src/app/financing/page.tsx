import type { Metadata } from "next";
import { BulletList, CallButton, Card, Section } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Phoenix Roof Financing & Payment Options",
  description:
    "Concerned about upfront roofing costs? Explore budget-friendly solutions, payment timelines and third-party financing. Request a free estimate.",
  path: "/financing",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Financing", path: "/financing" },
];

export default function FinancingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Monthly Payment Options"
        title="Roofing Projects That Fit Your Budget"
        intro="Need a new roof but concerned about upfront costs? We're introducing monthly payment options designed to make roofing projects more manageable."
        breadcrumbs={crumbs}
        highlights={[
          "Budget-friendly roofing solutions",
          "Flexible payment timelines",
          "Available third-party financing options",
          "Free written estimates before you commit",
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div>
            <h2 className="text-2xl sm:text-3xl">Let&apos;s Talk Through Your Options</h2>
            <p className="mt-5 leading-relaxed text-ink-600">
              While we finalize our in-house financing programs, our team is happy to walk you
              through the options available today. Every project starts with a free estimate, so you
              know the real number before making any decisions about how to pay for it.
            </p>
            <div className="mt-8">
              <BulletList
                items={[
                  "Budget-friendly roofing solutions scoped to what your roof actually needs",
                  "Payment timelines that work around your situation",
                  "Available third-party financing options",
                  "Insurance claim guidance — many storm repairs cost only your deductible",
                ]}
              />
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">Don&apos;t Overlook Your Insurance Policy</h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Before financing a full roof replacement out of pocket, it&apos;s worth finding out
                whether the damage is claimable. Along the Valley of the Sun, a large share of roof
                replacements are storm related — and in those cases your out-of-pocket cost is
                often just your deductible. We provide a free inspection to determine whether you
                have a legitimate claim before you consider any payment plan.
              </p>
            </div>

            <div className="mt-12 border-t border-ink-200 pt-10">
              <h2 className="text-2xl sm:text-3xl">Repair vs. Replace</h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Not every roof needs replacing. If your roof has isolated damage and otherwise has
                years of life left, a targeted repair is far less expensive and we&apos;ll tell you
                so. We would rather do the smaller honest job now and earn the replacement when it
                is genuinely time.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Card>
              <h3 className="text-base font-bold text-ink-900">Request a Free Estimate</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Give us a call today and we&apos;ll help you explore payment solutions that work for
                you — no obligation and no pressure.
              </p>
              <div className="mt-5">
                <CallButton />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Get Your Free Estimate"
        body="Know the real number first. We'll inspect your property, give you a written estimate, and talk through how to pay for it."
      />
    </>
  );
}
