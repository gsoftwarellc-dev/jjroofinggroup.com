import type { Metadata } from "next";
import { SITE_URL, business } from "./site";
import type { Faq } from "./services";

/**
 * Builds page metadata with canonical + OG/Twitter in one place so no page can
 * ship without a canonical URL (duplicate-content risk across ~130 routes).
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: business.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.png`],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.zip,
  addressCountry: business.address.country,
};

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.openingHoursSpec.days,
  opens: business.openingHoursSpec.opens,
  closes: business.openingHoursSpec.closes,
};

/**
 * Primary entity schema. Emitted once in the root layout with a stable @id that
 * every other schema node on the site references, so Google resolves all pages
 * back to a single business entity.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: SITE_URL,
    telephone: business.phone,

    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [openingHours],
    priceRange: "$$",
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [business.social.instagram, business.social.pinterest],
    areaServed: { "@type": "State", name: "Arizona" },

    foundingDate: business.founded,
    slogan: business.motto,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** LocalBusiness node scoped to a specific city page. */
export function localBusinessSchema({
  cityName,
  lat,
  lng,
  path,
  description,
}: {
  cityName: string;
  lat: number;
  lng: number;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}${path}#localbusiness`,
    name: `${business.name} — ${cityName}, CO`,
    description,
    url: `${SITE_URL}${path}`,
    telephone: business.phone,

    address: postalAddress,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    openingHoursSpecification: [openingHours],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Arizona" },
    },
    geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaName,
}: {
  name: string;
  description: string;
  path: string;
  areaName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    serviceType: name,
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: areaName },
    url: `${SITE_URL}${path}`,
  };
}

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
