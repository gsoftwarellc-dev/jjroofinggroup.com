import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowIcon,
  Button,
  CallButton,
  Card,
  CheckIcon,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand, ProcessSteps, ServiceGrid, TestimonialBlock } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { business, trustPoints } from "@/lib/site";
import { cities } from "@/lib/cities";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Arizona Roofing Contractor | Roof Replacement & Storm Repair",
  description:
    "Locally owned Arizona roofing contractor. Process Driven, Quality Assured, Incredible Results. Free inspections and insurance claim assistance.",
  path: "/",
});

const homeFaqs = [
  {
    q: "What areas does JJ Roofing Group serve?",
    a: "We serve residential, commercial, and industrial properties throughout Arizona, including the Phoenix Metro area, Tucson, and Flagstaff.",
  },
  {
    q: "Do you offer free roof inspections?",
    a: "Yes! If you notice signs of roof damage, call us for a free inspection.",
  },
  {
    q: "Do you handle insurance claims for storm damage?",
    a: "Yes. We collectively work with you and your insurance company to file a claim. Talk to one of our professional team today to see how we can help.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. JJ Roofing Group is a licensed contractor with over 15 years of experience on the front lines of damage control and roofing renovations in Arizona.",
  },
  {
    q: "How quickly can you respond to a roof leak?",
    a: "The JJ Roofing Group response team is as agile in the office as it is in the field. We’ll swiftly respond to your calls after disaster strikes.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Fills the viewport below the sticky header (6rem bar + 2.25rem lg utility bar). */}
      <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden bg-ink-900 lg:min-h-[calc(100svh-8.25rem)]">
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
          aria-hidden="true"
        />
        {/* Black opacity scrim: ensures white text is legible over the background photo. */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/60"
          aria-hidden="true"
        />
        <div className="container-x relative w-full py-16 sm:py-20 lg:py-24">
          <div>
            <FadeIn delay={0.1}>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-400">
                Licensed &amp; Insured · Arizona Roofing Company
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="mt-5 text-4xl text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Arizona&apos;s Top-Rated Roofing Company
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white">
                Process Driven, Quality Assured, Incredible Results. Ensuring that every home is protected and beautiful.
              </p>
            </FadeIn>

            <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Free photo-documented inspections",
                "Licensed insurance experts on staff",
                "Over 15 years experience",
                "Locally owned — trusted Arizona legacy",
              ].map((item) => (
                <StaggerItem key={item}>
                  <li className="flex gap-2.5 text-sm font-medium text-ink-200">
                    <CheckIcon className="h-5 w-5 shrink-0 text-brand-400" />
                    {item}
                  </li>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <FadeIn delay={0.5} className="mt-9 flex flex-wrap gap-3">
              <CallButton />
              <Button
                href="/contact"
                variant="ghost"
                className="border-ink-600 text-white hover:border-white hover:bg-ink-800"
              >
                Book Your Free Inspection
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Points Bar */}
      <section className="border-b border-ink-200 bg-white py-12">
        <StaggerGroup className="container-x grid gap-8 divide-y divide-ink-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {trustPoints.map((point) => (
            <StaggerItem key={point.title}>
              <div className="pt-8 sm:pt-0 sm:px-6 first:pl-0 last:pr-0">
                <h2 className="text-lg font-bold text-ink-900">{point.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{point.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Modern Alternating Features - Built for Arizona */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
               <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
                 <Image src="/projects/project_1.jpg" alt="Roofing work" fill className="object-cover" />
               </div>
               <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md sm:mt-12">
                 <Image src="/projects/project_2.jpg" alt="Roofing work" fill className="object-cover" />
               </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Built for Arizona"
              title="Nestled in the heart of Arizona, we stand out as a beacon of trust."
              intro="Our deep understanding of Arizona’s unique climate challenges makes us the go-to roofer for new roof installations, roof repairs, roof replacements, and commercial roofing needs."
            />
            <p className="leading-relaxed text-ink-600">
              While Arizona’s sun can be relentless, causing wear and tear to your roofing, our expert teams are always ready to provide solutions tailored specifically to the AZ landscape. We know that every job is about someone’s home or livelihood; we provide expert and swift roofing and restoration solutions to get you back to living and making a living quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" variant="primary">
                Get to Know Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section tone="light">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive Exterior Restoration Services"
            intro="Ensuring that every home and business is protected and beautiful."
            center
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="mt-12">
           <ServiceGrid />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="The JJ Roofing Group Process in Arizona"
            intro="We built our process to take the stress off you. Here's exactly what to expect."
            center
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ProcessSteps
            steps={[
              {
                title: "Notice Signs of Damage?",
                body: "Whether it's aging, leaks, or storm damage, the first step is recognizing your property needs professional attention.",
              },
              {
                title: "Free Inspection",
                body: "Call us for a free, comprehensive inspection. We will identify all issues and formulate a plan.",
              },
              {
                title: "Insurance Assistance",
                body: "We collectively work with you and your insurance company to file a claim and get the restoration funded.",
              },
              {
                title: "Your New Roof",
                body: "Your new roof is installed efficiently and cleanly by our expert team of Arizona craftsmen.",
              },
            ]}
          />
        </FadeIn>
      </Section>

      {/* Sleek Dark Mode City Block */}
      <Section tone="dark">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Where We Work"
            title="Proudly Serving the Arizona Community"
            intro="We are local to the core. Our teams serve residential, commercial, and industrial properties throughout Arizona, from Phoenix Metro to Tucson and beyond."
            dark
            center
          />
        </FadeIn>
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={`/roofing-contractor/${city.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-ink-800 bg-ink-950/50 p-5 text-sm font-semibold text-ink-200 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-500 hover:bg-ink-900 hover:shadow-lg hover:shadow-brand-500/10"
              >
                {city.name}, AZ
                <ArrowIcon className="h-5 w-5 shrink-0 text-ink-600 transition-colors group-hover:text-brand-400" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <FadeIn delay={0.4}>
          <p className="mt-12 text-center text-sm text-ink-400">
            Don&apos;t see your city?{" "}
            <Link href="/service-areas" className="font-semibold text-brand-400 hover:underline">
              View all service areas
            </Link>{" "}
            or call us at{" "}
            <a
              href={`tel:${business.phoneHref}`}
              className="font-semibold text-brand-400 hover:underline"
            >
              {business.phone}
            </a>
          </p>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Our Gallery"
            title="View Our Recent Projects"
            intro="Take a look at some of the high-quality roofing projects we've recently completed across Arizona."
            center
          />
        </FadeIn>
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <StaggerItem key={i}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-ink-100 shadow-md">
                <Image
                  src={`/projects/project_${i}.jpg`}
                  alt={`JJ Roofing Group Project ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section tone="light">
        <FadeIn>
          <SectionHeading
            eyebrow="Reviews"
            title="Hear It From Our Customers"
            intro="Every roofing project we undertake is an amalgamation of superior quality materials, expert craftsmanship, and a touch of Arizona pride."
            center
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="mt-12">
          <TestimonialBlock />
        </FadeIn>
        <FadeIn direction="up" delay={0.3} className="mt-12 text-center">
          <Button href="/testimonials" variant="secondary">
            Read More Reviews
          </Button>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <FadeIn direction="right">
            <SectionHeading
              eyebrow="Common Questions"
              title="Answers Before You Call"
              intro="Still have a question? We're happy to talk it through — no pressure, no sales pitch."
            />
          </FadeIn>
          <FadeIn direction="left" className="divide-y divide-ink-200 border-y border-ink-200">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 outline-none">
                  <h3 className="text-lg font-semibold text-ink-900 group-focus-visible:text-brand-600 group-hover:text-brand-600 transition-colors">{faq.q}</h3>
                  <span className="mt-1 shrink-0 rounded-full bg-ink-50 p-2 text-ink-500 transition-transform group-open:rotate-45 group-hover:bg-brand-50 group-hover:text-brand-600">
                    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 pr-12 leading-relaxed text-ink-600">{faq.a}</p>
              </details>
            ))}
          </FadeIn>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
