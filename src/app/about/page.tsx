import Image from "next/image";
import type { Metadata } from "next";
import { BulletList, Button, Card, Section, SectionHeading } from "@/components/ui";
import { CtaBand, InfoStat, PageHero, TestimonialBlock } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { business, team } from "@/lib/site";
import { cities } from "@/lib/cities";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Arizona Roofing Contractor",
  description:
    "Meet the team behind JJ Roofing Group. Locally owned and insured, with 15+ years of experience in Arizona roofing.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="About JJ Roofing Group"
        title="Deeply Rooted in Arizona. Dedicated to Quality."
        intro="In the chaotic aftermath of an Arizona storm, it's hard to know who to trust. We built our company on a simple premise: Arizona property owners deserve better."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl">More Than Just Contractors — We Are Your Neighbors</h2>
            <p className="mt-5 leading-relaxed text-ink-600">
              We saw too many neighbors dealing with poor communication, rushed workmanship, and fly-by-night contractors. We founded JJ Roofing Group to change that narrative.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We are a locally owned and operated roofing and restoration company based in Gilbert. We don&apos;t just work here; we live here. We know that a roof in Arizona faces extreme UV radiation, thermal shock, and severe monsoon impacts that roofs in other states never see. That local knowledge is what allows us to build exteriors that last.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <InfoStat value="15+" label="Years of experience" />
              <InfoStat value="1000s" label="Of insurance claims handled" />
              <InfoStat value={`${cities.length}`} label="Arizona cities served" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/projects/project_4.jpg"
                alt="JJ Roofing Group Arizona Team"
                fill
                className="object-cover"
              />
            </div>
            <Card className="bg-ink-900 text-ink-300">
              <h2 className="text-lg font-bold text-white">Licensed &amp; Insured</h2>
              <p className="mt-3 text-sm leading-relaxed">
              JJ Roofing Group is a fully licensed contractor in the state of
              Arizona, giving you the peace of mind that your home is in professional hands.
            </p>
            <dl className="mt-6 space-y-4 border-t border-ink-700 pt-6 text-sm">

              <div>
                <dt className="font-semibold text-white">Hours</dt>
                <dd>{business.hours}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Phone</dt>
                <dd>
                  <a href={`tel:${business.phoneHref}`} className="hover:text-brand-400">
                    {business.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Our Standard"
          title={`What Does "JJ Roofing Group" Mean?`}
          center
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Process Driven",
              b: "We believe in educating you, not selling you. We provide thorough inspections and walk you through every step of the restoration process.",
            },
            {
              t: "Quality Assured",
              b: "We refuse to cut corners. We use premium materials that stand up to the extreme Arizona weather, ensuring that every home is protected and beautiful.",
            },
            {
              t: "Incredible Results",
              b: "We treat your property like our own. Seamless cleanup, protected landscaping, and a final product that restores your peace of mind.",
            },
          ].map((item) => (
            <Card key={item.t}>
              <h3 className="text-lg font-bold text-ink-900">{item.t}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{item.b}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our Specialty"
              title="The Insurance Claim Specialists"
              intro="Let's face it: dealing with insurance companies after a storm is stressful."
            />
            <p className="leading-relaxed text-ink-600">
              At JJ Roofing Group, we collectively work with you and your insurance company to file a claim. We have worked with hundreds of insurance companies on thousands of roof-damage claims. We advocate for you to ensure your claim covers the full cost of restoration to get your home back to pre-storm condition and better.
            </p>
            <Button href="/services/residential-roofing" variant="secondary" className="mt-8">
              View Our Services
            </Button>
          </div>
          <Card>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
              What Sets Our Claim Support Apart
            </h3>
            <div className="mt-5">
              <BulletList
                items={[
                  "Licensed and experienced Arizona professionals",
                  "We meet your adjuster on the roof, every time",
                  "Photo documentation of every elevation and component",
                  "Thorough knowledge of local building codes",
                  "Dedicated support staff to navigate paperwork",
                ]}
              />
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Our People" title="Meet the JJ Roofing Group Team" center />
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name} className="flex flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-lg font-black text-white">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-600">
                {member.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Reviews"
          title="Our Pride, Our High Standards"
          intro="Our commitment to high construction standards is unwavering, and our track record speaks for itself."
          center
        />
        <TestimonialBlock />
      </Section>

      <CtaBand />
    </>
  );
}
