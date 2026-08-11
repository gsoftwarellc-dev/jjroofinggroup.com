import type { NextConfig } from "next";

/**
 * 301 redirects from the WordPress site's URLs to their new equivalents.
 * These preserve whatever ranking equity and backlinks the old URLs have
 * accumulated — without them, every existing ranking resets to zero at launch.
 */
const legacyRedirects = [
  { from: "/denver-roofing-contractors", to: "/services/roofing" },
  { from: "/siding-installation-denver", to: "/services/siding" },
  { from: "/window-replacement-installation-denver", to: "/services/windows" },
  { from: "/gutters-denver", to: "/services/gutters" },
  { from: "/exterior-painting-denver", to: "/services/exterior-painting" },
  { from: "/insurance-claims", to: "/services/insurance-claims" },
  { from: "/monthly-payment-options", to: "/financing" },
  { from: "/about-us", to: "/about" },
  { from: "/contact-us", to: "/contact" },
  { from: "/portfolio", to: "/testimonials" },
  { from: "/blog", to: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
