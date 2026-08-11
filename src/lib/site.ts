/**
 * Single source of truth for business NAP (Name/Address/Phone) data.
 * Every value here is taken from the live site — keep them identical to
 * the Google Business Profile, or local rankings suffer.
 */

export const SITE_URL = "https://jjroofinggroup.com";

export const business = {
  name: "JJ Roofing Group",
  shortName: "JJ Roofing",
  legalName: "JJ Roofing Group LLC",
  tagline: "Reliable Roofing Solutions",
  description:
    "JJ Roofing Group is a roofing company based in Gilbert, serving residential, commercial, and industrial properties throughout Arizona. We provide expert and swift roofing and restoration solutions to get you back to living and making a living quickly.",

  phone: "(480) 534-9027",
  phoneHref: "+14805349027",
  altPhone: "(480) 534-9027",
  altPhoneHref: "+14805349027",
  address: {
    street: "1715 W Sunrise Blvd.",
    city: "Gilbert",
    state: "AZ",
    stateFull: "Arizona",
    zip: "85233",
    country: "US",
  },
  geo: { lat: 33.3644, lng: -111.8213 },
  hours: "Mon - Sun: 7:00 AM - 9:00 PM",
  openingHoursSpec: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
  founded: "2009",
  motto: "Process Driven, Quality Assured, Incredible Results",
  social: {
    instagram: "https://www.instagram.com/jjroofinggroup/",
    pinterest: "https://www.pinterest.com/jjroofinggroup/",
  },
} as const;

export const team = [
  {
    name: "Our Team",
    role: "Roofing Specialists",
    bio: "JJ Roofing Group is a licensed contractor with over 15 years of experience on the front lines of damage control and roofing renovations in Arizona. Our professional teams are craftsmen in the latest state-of-the-art roofing techniques in restoration and remodeling solutions.",
  },
  {
    name: "Our Response Team",
    role: "Emergency & Insurance Specialists",
    bio: "The JJ Roofing Group response team is as agile in the office as it is in the field. We’ll swiftly respond to your calls after disaster strikes. We have collectively worked with hundreds of insurance companies on thousands of roof-damage insurance claims.",
  }
] as const;

export const testimonials = [
  {
    quote:
      "Super happy with the process and final product! Josh was great... he helped us navigate the process each step of the way and oversaw the work to make sure it was done well.",
    author: "Bill J.",
    location: "Arizona",
  },
  {
    quote:
      "Quality work and service. We highly recommend! JJ Roofing Group were an excellent choice for our storm damage/re-roofing, and they arranged gutter install.",
    author: "Joseph M.",
    location: "Phoenix Metro",
  },
  {
    quote:
      "They are the very BEST you guys get a big 5 star from us. Oh ya these guys are the very best. I have had used others in the past and not even close to JJ Roofing Group...",
    author: "Sarah D.",
    location: "Arizona",
  }
] as const;

export const trustPoints = [
  {
    title: "Over 15 Years Experience",
    body: "Licensed contractors with over 15 years of experience on the front lines of damage control and roofing renovations in Arizona.",
  },
  {
    title: "Process Driven",
    body: "Our work process is designed to ensure quality and precision, from the initial consultation to the final inspection.",
  },
  {
    title: "Insurance Experts",
    body: "We have collectively worked with hundreds of insurance companies on thousands of roof-damage claims.",
  },
  {
    title: "Arizona Legacy",
    body: "A tradition of excellence that has been serving the Arizona community for years. Quality Assured, Incredible Results.",
  },
] as const;

export const insuranceCarriers = [
  { name: "Allstate Insurance", phone: "(800) 547-8676" },
  { name: "American Family", phone: "(800) 692-6326" },
  { name: "Farmers Insurance", phone: "(800) 435-7764" },
  { name: "GEICO", phone: "(866) 324-6516" },
  { name: "The Hartford", phone: "(800) 243-5860" },
  { name: "Liberty Mutual", phone: "(800) 225-2467" },
  { name: "Nationwide Insurance", phone: "(800) 421-3535" },
  { name: "Progressive Insurance", phone: "(800) 776-4737" },
  { name: "State Farm Insurance", phone: "(877) 859-1847" },
  { name: "Travelers Insurance", phone: "(800) 252-4633" },
  { name: "USAA", phone: "(800) 531-8722" },
] as const;
