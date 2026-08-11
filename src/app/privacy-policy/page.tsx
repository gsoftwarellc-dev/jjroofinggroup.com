import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/blocks";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How JJ Roofing Group collects, uses, and protects the information you share with us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we collect, use, and protect the information you share with us."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <Section>
        <div className="max-w-3xl space-y-8 leading-relaxed text-ink-600">
          <div>
            <h2 className="text-2xl text-ink-900">Information We Collect</h2>
            <p className="mt-3">
              When you request an inspection or estimate through this website, we collect the
              information you provide: your name, phone number, email address, property address, the
              service you&apos;re interested in, and any details you share about your project. We
              use this information solely to respond to your request and provide the services you
              ask for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">How We Use Your Information</h2>
            <p className="mt-3">
              We use the information you provide to contact you about your inquiry, schedule
              inspections, prepare estimates, and — where applicable — assist with your insurance
              claim. If we handle your claim, we may share relevant project documentation with your
              insurance carrier on your behalf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">Information Sharing</h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information. We share information only
              with parties directly involved in delivering your project — such as your insurance
              carrier when we are assisting with a claim, or material suppliers and subcontractors
              working on your property — and only as needed to complete the work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">Communications</h2>
            <p className="mt-3">
              By submitting a request, you consent to be contacted by phone, text, or email
              regarding your inquiry. You may opt out of future communications at any time by
              replying STOP to a text, or by contacting us at {business.email}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect the information you share with us against loss,
              misuse, and unauthorized access. No method of transmission over the internet is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">Cookies &amp; Analytics</h2>
            <p className="mt-3">
              This site may use cookies and analytics tools to understand how visitors use the site
              so we can improve it. You can disable cookies in your browser settings, though some
              parts of the site may not function as intended.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-ink-900">Contact Us</h2>
            <p className="mt-3">
              Questions about this policy? Contact us at{" "}
              <a href={`mailto:${business.email}`} className="font-semibold text-brand-600 hover:underline">
                {business.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${business.phoneHref}`} className="font-semibold text-brand-600 hover:underline">
                {business.phone}
              </a>
              .
            </p>
            <address className="mt-4 not-italic">
              {business.legalName}
              <br />
              {business.address.street}
              <br />
              {business.address.city}, {business.address.state} {business.address.zip}
            </address>
          </div>
        </div>
      </Section>
    </>
  );
}
