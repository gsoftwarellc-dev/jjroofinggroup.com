import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

/**
 * Priorities reflect commercial intent, not site depth: city × service pages
 * carry high intent even though they sit three levels down.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/service-areas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/financing", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/insurance-carriers", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const servicePages = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const cityPages = cities.map((c) => ({
    path: `/roofing-contractor/${c.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const cityServicePages = cities.flatMap((c) =>
    services.map((s) => ({
      path: `/roofing-contractor/${c.slug}/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  );

  return [...staticPages, ...servicePages, ...cityPages, ...cityServicePages].map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
