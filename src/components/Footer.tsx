import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

/**
 * The footer doubles as the site's internal-link hub: every city page is one
 * click from every other page, which is what gets 100+ location pages crawled
 * and indexed instead of orphaned.
 */
export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label={`${business.name} home`} className="inline-block">
              <Image
                src="/logo.jpg"
                alt={`${business.name} logo`}
                width={765}
                height={510}
                className="h-20 w-auto rounded-lg"
              />
            </Link>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-brand-400">
              {business.motto}
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Locally owned roofing and exterior restoration contractor serving the Phoenix Metro
              area and the Valley of the Sun foothills since {business.founded}.
            </p>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-white">Licensed &amp; Insured</span>
              <br />
              License #{business.license}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.social.instagram}
                className="rounded-lg border border-ink-800 p-2.5 hover:border-brand-500 hover:text-brand-400"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.6-7.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
              </a>
              <a
                href={business.social.pinterest}
                className="rounded-lg border border-ink-800 p-2.5 hover:border-brand-500 hover:text-brand-400"
                aria-label="Pinterest"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.5 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3-3 0-4.7 2.2-4.7 4.5 0 .9.3 1.9.8 2.4l.1.3-.3 1c0 .2-.1.3-.3.2-1.2-.6-2-2.4-2-3.9 0-3.1 2.3-6 6.6-6 3.4 0 6.1 2.5 6.1 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6A10 10 0 1 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-brand-400 hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/roofing-contractor/${c.slug}`}
                    className="hover:text-brand-400 hover:underline"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <p>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="text-lg font-bold text-white hover:text-brand-400"
                >
                  {business.phone}
                </a>
                <br />
                <a
                  href={`tel:${business.altPhoneHref}`}
                  className="hover:text-brand-400"
                >
                  {business.altPhone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="hover:text-brand-400 hover:underline">
                  {business.email}
                </a>
              </p>
              <p className="text-white">{business.hours}</p>
            </address>

            <ul className="mt-6 space-y-2.5 border-t border-ink-800 pt-6 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-400 hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-brand-400 hover:underline">Testimonials</Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-brand-400 hover:underline">Financing Options</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-400 hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All Rights Reserved.
          </p>
          <p>Roofing · Siding · Windows · Gutters · Painting · Insurance Claims</p>
        </div>
      </div>
    </footer>
  );
}
