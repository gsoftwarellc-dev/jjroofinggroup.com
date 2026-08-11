/**
 * Service-area cities. Each generates /roofing-contractor/[city] plus a
 * /roofing-contractor/[city]/[service] page for every service.
 */

export type City = {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  population: string;
  proximity: string;
  lat: number;
  lng: number;
  intro: string;
  localContext: string;
  neighborhoods: string[];
  angle: string;
  featured?: boolean;
};

export const cities: City[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    county: "Maricopa County",
    zips: ["85001", "85002", "85003", "85004", "85005", "85006", "85007"],
    population: "1,600,000",
    proximity: "Central Valley",
    lat: 33.4484,
    lng: -112.0740,
    intro:
      "Phoenix is the heart of the Valley, where we bring top-quality roofing to residential and commercial properties. From historic homes to newer builds, we've covered the Valley of the Sun.",
    localContext:
      "Phoenix experiences intense summer heat and monsoon storms, which put extreme stress on roofing systems. Sun damage degrades underlayment over time, while microbursts can cause immediate wind uplift damage.",
    neighborhoods: [
      "Downtown Phoenix",
      "Arcadia",
      "Biltmore Area",
      "Desert Ridge",
      "Ahwatukee Foothills",
    ],
    angle: "Extreme heat and monsoon exposure—handled by a team that knows desert roofing inside out.",
    featured: true,
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    county: "Maricopa County",
    zips: ["85233", "85234", "85295", "85296", "85297", "85298"],
    population: "275,000",
    proximity: "Our home base",
    lat: 33.3528,
    lng: -111.7890,
    intro:
      "Gilbert is our home base. We know that every job here is about someone’s home or livelihood, and we provide expert, swift roofing solutions.",
    localContext:
      "Gilbert features many fast-growing subdivisions and master-planned communities. Our deep understanding of HOA requirements means your roofing repairs or replacements will go smoothly.",
    neighborhoods: [
      "Agritopia",
      "Val Vista Lakes",
      "Power Ranch",
      "Seville",
      "Finley Farms",
    ],
    angle: "Our home base! We offer fast response times and expert HOA-approved roofing solutions in Gilbert.",
    featured: true,
  },
  {
    slug: "tucson",
    name: "Tucson",
    county: "Pima County",
    zips: ["85701", "85705", "85710", "85719", "85741"],
    population: "542,000",
    proximity: "Southern Arizona",
    lat: 32.2226,
    lng: -110.9747,
    intro:
      "We proudly serve Tucson with reliable residential and commercial roofing solutions tailored to Southern Arizona's unique climate.",
    localContext:
      "Tucson's high desert environment presents unique UV and thermal challenges. We use specialized materials and techniques to ensure your roof withstands the harsh sun and occasional intense summer monsoons.",
    neighborhoods: [
      "Downtown Tucson",
      "Sam Hughes",
      "Catalina Foothills",
      "Oro Valley",
    ],
    angle: "Expert roofing designed specifically for the extreme UV and thermal dynamics of the high desert.",
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    county: "Maricopa County",
    zips: ["85250", "85251", "85254", "85255", "85257", "85258"],
    population: "240,000",
    proximity: "East Valley",
    lat: 33.4942,
    lng: -111.9261,
    intro:
      "Scottsdale demands high aesthetic standards and durable roofing materials. We handle luxury residential roofing, tile roof restorations, and complete storm restoration.",
    localContext:
      "Many Scottsdale homes feature concrete or clay tile roofs, which are durable but rely on high-quality underlayment. HOA regulations in master-planned communities require precise color matching for replacements.",
    neighborhoods: [
      "Old Town Scottsdale",
      "DC Ranch",
      "McCormick Ranch",
      "Gainey Ranch",
    ],
    angle: "Tile roof experts familiar with Scottsdale HOA requirements and luxury property standards.",
    featured: true,
  },
  {
    slug: "mesa",
    name: "Mesa",
    county: "Maricopa County",
    zips: ["85201", "85202", "85203", "85204", "85205", "85206"],
    population: "504,000",
    proximity: "East Valley",
    lat: 33.4152,
    lng: -111.8315,
    intro:
      "Mesa's diverse neighborhoods require versatile roofing solutions. We provide comprehensive roofing repairs, replacements, and maintenance across the city.",
    localContext:
      "Mesa has a mix of older historic homes near downtown and sprawling suburban developments to the east. Older properties often need complete tear-offs and decking inspections.",
    neighborhoods: [
      "Downtown Mesa",
      "Eastmark",
      "Dobson Ranch",
      "Las Sendas",
    ],
    angle: "Versatile roofing solutions for Mesa's mix of historic and new properties.",
  },
  {
    slug: "chandler",
    name: "Chandler",
    county: "Maricopa County",
    zips: ["85224", "85225", "85226", "85248", "85249", "85286"],
    population: "275,000",
    proximity: "East Valley",
    lat: 33.3062,
    lng: -111.8413,
    intro:
      "Chandler's rapidly growing tech hub and family-friendly neighborhoods trust JJ Roofing Group for reliable and aesthetic roofing installations.",
    localContext:
      "Homes in Chandler range from mid-century builds to brand-new subdivisions. With flat roofs and tile roofs being common, proper drainage and high-grade underlayment are essential.",
    neighborhoods: [
      "Ocotillo",
      "Fulton Ranch",
      "Downtown Chandler",
      "Sun Lakes",
    ],
    angle: "Expert drainage and underlayment solutions for Chandler's flat and tile roofs.",
  },
  {
    slug: "tempe",
    name: "Tempe",
    county: "Maricopa County",
    zips: ["85281", "85282", "85283", "85284"],
    population: "185,000",
    proximity: "East Valley",
    lat: 33.4255,
    lng: -111.9400,
    intro:
      "Tempe boasts a dynamic mix of historic neighborhoods and modern developments. We provide the tailored roofing services needed to protect them all.",
    localContext:
      "From university housing to suburban enclaves, Tempe's roofs face extreme summer heat. We offer specialized reflective coatings and energy-efficient roofing materials to help keep cooling costs down.",
    neighborhoods: [
      "Downtown Tempe",
      "Maple-Ash",
      "Kyrene",
      "Broadmor",
    ],
    angle: "Energy-efficient roofing solutions designed to keep your home cool and your bills low in Tempe.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    county: "Maricopa County",
    zips: ["85301", "85302", "85303", "85304", "85305", "85306"],
    population: "250,000",
    proximity: "West Valley",
    lat: 33.5386,
    lng: -112.1860,
    intro:
      "We serve Glendale homeowners and businesses with top-tier roofing installations and swift repair services after West Valley monsoon storms.",
    localContext:
      "Glendale sees its fair share of microbursts and intense rain during monsoon season. Ensuring that your roof's underlayment and flashings are secure is vital to preventing sudden leaks.",
    neighborhoods: [
      "Historic Downtown",
      "Arrowhead Ranch",
      "Westgate",
      "Deer Valley",
    ],
    angle: "Monsoon-ready roof inspections and repairs for Glendale properties.",
  },
  {
    slug: "apache-junction",
    name: "Apache Junction",
    county: "Pinal & Maricopa County",
    zips: ["85119", "85120"],
    population: "42,000",
    proximity: "East Valley",
    lat: 33.4150,
    lng: -111.5496,
    intro:
      "Nestled against the Superstition Mountains, Apache Junction properties face intense sun and wind. We provide rugged, dependable roofing solutions here.",
    localContext:
      "The open desert landscape around Apache Junction means less wind break, exposing roofs to higher wind loads. We focus on secure fastening techniques and durable materials to withstand the elements.",
    neighborhoods: [
      "Superstition Foothills",
      "Ironwood",
      "Lost Dutchman",
    ],
    angle: "Rugged roofing installations built to handle the wind and sun of the Superstition foothills.",
  },
  {
    slug: "flagstaff",
    name: "Flagstaff",
    county: "Coconino County",
    zips: ["86001", "86004", "86005"],
    population: "76,000",
    proximity: "Northern Arizona",
    lat: 35.1983,
    lng: -111.6513,
    intro:
      "Unlike the Valley, Flagstaff roofs must handle heavy snow loads and freeze-thaw cycles. We are fully equipped for high-altitude roofing.",
    localContext:
      "Flagstaff's alpine climate requires entirely different roofing strategies than Phoenix. We specialize in steep-slope applications, snow guards, and ice-and-water shields designed to prevent winter ice dams.",
    neighborhoods: [
      "Downtown Flagstaff",
      "Cheshire",
      "Kachina Village",
      "Continental Country Club",
    ],
    angle: "High-altitude roofing experts specializing in heavy snow loads and ice dam prevention.",
  }
];

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const featuredCities = cities.filter((c) => c.featured);
