/**
 * Service definitions. Each service gets its own landing page at /services/[slug]
 * and combines with every city to produce /[city]/[service] pages.
 */

export type ServiceSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  navLabel: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  highlights: string[];
  sections: ServiceSection[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "residential-roofing",
    name: "Residential Roofing",
    shortName: "Residential Roofing",
    navLabel: "Residential Roofing",
    icon: "roof",
    metaTitle: "Residential Roofing Services",
    metaDescription:
      "Expert residential roofing services across Arizona. We ensure that every home is protected and beautiful with our premium roofing solutions.",
    tagline:
      "Ensuring that every home is protected and beautiful.",
    intro:
      "At JJ Roofing Group, we understand that your home is your sanctuary. Our residential roofing services ensure that every home is protected and beautiful. Whether it’s urgent roof repairs, a new roof installation, routine maintenance, or a complete roof replacement, we handle it all with precision.",
    highlights: [
      "Expert roof installations and replacements",
      "Routine maintenance and swift repairs",
      "Premium materials suited for the Arizona climate",
      "Licensed and experienced craftsmen",
    ],
    sections: [
      {
        heading: "Comprehensive Residential Care",
        body: "From the initial inspection to the final shingle, our team ensures your residential roof is built to last. We deal with the unique challenges of the Arizona sun and monsoon seasons to provide roofing that won't let you down.",
        bullets: [
          "Thorough pre-installation inspections",
          "High-grade underlayment for UV and moisture protection",
          "Seamless cleanup and final walk-throughs",
        ],
      }
    ],
    faqs: [
      {
        q: "Do you offer free inspections?",
        a: "Yes! If you notice signs of roof damage, call us for a free inspection.",
      }
    ],
    related: ["roof-replacement", "roof-repair", "roof-installation"],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Roof Replacement",
    navLabel: "Roof Replacement",
    icon: "roof",
    metaTitle: "Roof Replacement Services",
    metaDescription:
      "Complete roof replacements by JJ Roofing Group. A testament to our unwavering commitment to quality and precision in Arizona.",
    tagline:
      "More than just a task—a testament to quality.",
    intro:
      "When it’s time for a roof replacement, remember, with JJ Roofing Group, you’re not just getting a service. You’re embracing an Arizona legacy. We tear off old, failing systems and install state-of-the-art roofing designed to endure decades of extreme weather.",
    highlights: [
      "Full tear-off and deck inspections",
      "Top-tier materials and underlayment",
      "Insurance claim assistance",
      "Swift turnaround times to minimize disruption",
    ],
    sections: [
      {
        heading: "The Replacement Process",
        body: "Our process is driven by quality. 1. Notice signs of roof damage. 2. Call for a free inspection. 3. We assist in the insurance claim if applicable. 4. Your new roof is installed by our expert team.",
        bullets: [
          "Detailed scope of work",
          "Assistance with insurance adjusters",
          "Expert installation and cleanup",
        ],
      }
    ],
    faqs: [
      {
        q: "How do I know if I need a replacement vs a repair?",
        a: "We provide a thorough free inspection to determine the exact condition of your roof. If repairs are sufficient, we'll tell you. If a replacement is necessary for long-term safety, we'll walk you through your options.",
      }
    ],
    related: ["residential-roofing", "commercial-roofing"],
  },
  {
    slug: "roof-installation",
    name: "Roof Installation",
    shortName: "Roof Installation",
    navLabel: "Roof Installation",
    icon: "roof",
    metaTitle: "New Roof Installation",
    metaDescription:
      "New roof installations in Arizona by JJ Roofing Group. We utilize the latest state-of-the-art roofing techniques.",
    tagline:
      "Craftsmen in the latest state-of-the-art roofing techniques.",
    intro:
      "Building a new home or adding an extension? Our expert teams are always ready to provide new roof installations tailored specifically to the AZ landscape. We use premium materials and flawless installation techniques to give your property the perfect crown.",
    highlights: [
      "Installations for new builds and extensions",
      "Wide variety of material choices (tile, shingle, metal, flat)",
      "Strict adherence to local building codes",
      "Collaborative scheduling with builders and contractors",
    ],
    sections: [
      {
        heading: "Tailored to the Arizona Landscape",
        body: "Arizona’s sun can be relentless. We install roofing systems specifically designed with high UV resistance and thermal efficiency in mind, ensuring your new property stays protected and cool.",
      }
    ],
    faqs: [
      {
        q: "What types of roofs do you install?",
        a: "We install a variety of systems including asphalt shingles, concrete/clay tile, metal roofing, and flat roofing systems (TPO/EPDM) tailored for our climate.",
      }
    ],
    related: ["roof-replacement", "residential-roofing"],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Roof Repair",
    navLabel: "Roof Repair",
    icon: "repair",
    metaTitle: "Roof Repair & Restoration",
    metaDescription:
      "Expert and swift roof repairs in Arizona. JJ Roofing Group responds quickly after disaster strikes to fix leaks and storm damage.",
    tagline:
      "Swiftly responding to your calls after disaster strikes.",
    intro:
      "Whether it’s a minor leak or significant storm damage, our response team is agile and ready to help. We provide expert and swift roofing repairs to get you back to living comfortably quickly.",
    highlights: [
      "Rapid response times",
      "Leak detection and patching",
      "Storm and wind damage repair",
      "Tile replacement and shingle repairs",
    ],
    sections: [
      {
        heading: "Emergency Roofing Response",
        body: "We know that a damaged roof can disrupt your life. We mobilize quickly to secure your property, prevent further water intrusion, and perform long-lasting repairs.",
      }
    ],
    faqs: [
      {
        q: "Do you help with insurance claims for repairs?",
        a: "Yes, we collectively work with you and your insurance company to file a claim. Talk to our professional team today to see how we can help.",
      }
    ],
    related: ["roof-replacement", "residential-roofing"],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    shortName: "Commercial Roofing",
    navLabel: "Commercial Roofing",
    icon: "commercial",
    metaTitle: "Commercial Roofing Contractors",
    metaDescription:
      "Commercial roofing in Arizona. JJ Roofing Group ensures that businesses face minimal downtime with our expert installations.",
    tagline:
      "Ensuring that businesses face minimal downtime.",
    intro:
      "As a leader in commercial roofing systems, our primary goal is ensuring that businesses face minimal downtime. From small-scale commercial roofs to massive industrial properties, choose a roofing contractor with an unmatched blend of quality and efficiency.",
    highlights: [
      "Flat roofing systems (TPO, EPDM)",
      "Metal roofing for commercial facilities",
      "Minimal disruption to your business operations",
      "Long-term maintenance plans",
    ],
    sections: [
      {
        heading: "Built for Business",
        body: "We understand that commercial roofing requires strict adherence to safety protocols, timelines, and budgets. Our team is experienced in handling large-scale commercial projects with precision.",
      }
    ],
    faqs: [
      {
        q: "What commercial systems do you install?",
        a: "We specialize in single-ply membranes like TPO and EPDM, as well as commercial metal roofing and built-up roofing systems.",
      }
    ],
    related: ["commercial-roof-repair", "roof-replacement"],
  },
  {
    slug: "commercial-roof-repair",
    name: "Commercial Roof Repair",
    shortName: "Commercial Repair",
    navLabel: "Commercial Repair",
    icon: "repair",
    metaTitle: "Commercial Roof Repair",
    metaDescription:
      "Swift commercial roof repairs. JJ Roofing Group fixes leaks, ponding water, and storm damage to keep your business running.",
    tagline:
      "Expert repairs to keep your operations running smoothly.",
    intro:
      "A leak in a commercial building can halt operations and damage inventory. Our commercial repair teams respond quickly to diagnose and fix flat roof leaks, flashing failures, and storm damage.",
    highlights: [
      "Rapid leak detection and patching",
      "Solutions for ponding water on flat roofs",
      "Preventative maintenance programs",
      "Warranty-compliant repairs",
    ],
    sections: [
      {
        heading: "Minimizing Downtime",
        body: "Our priority is getting your commercial roof watertight as quickly as possible so you can get back to making a living. We work efficiently and safely to ensure zero interruption to your daily operations.",
      }
    ],
    faqs: [
      {
        q: "Do you offer emergency commercial repair?",
        a: "Yes, our agile response team is ready to deploy when severe weather impacts your commercial facility.",
      }
    ],
    related: ["commercial-roofing", "roof-repair"],
  }
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
