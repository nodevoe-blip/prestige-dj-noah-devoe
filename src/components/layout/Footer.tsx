import Link from "next/link";
import Image from "next/image";
import { prestige, serviceAreas, services } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <Image
              src="/images/brand/logo-white.png"
              alt="Prestige Weddings & Events"
              width={2640}
              height={1397}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-smoke">{prestige.description}</p>

            <address className="mt-6 space-y-1 font-mono text-xs not-italic uppercase tracking-wider text-smoke">
              <p>{prestige.address.streetAddress}</p>
              <p>
                {prestige.address.addressLocality}, {prestige.address.addressRegion}{" "}
                {prestige.address.postalCode}
              </p>
              <p>
                <a href={`tel:${prestige.telephone}`} className="hover:text-paper">
                  {prestige.telephone}
                </a>
              </p>
              <p>
                <a href={`mailto:${prestige.email}`} className="hover:text-paper">
                  {prestige.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-navy">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className="text-sm text-smoke hover:text-paper">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-navy">Service Areas</h2>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-area/${a.slug}`} className="text-sm text-smoke hover:text-paper">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-espresso-bright">Noah DeVoe</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/noah-devoe" className="text-sm text-smoke hover:text-paper">
                  Bio &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/noah-devoe/mixes" className="text-sm text-smoke hover:text-paper">
                  Mixes
                </Link>
              </li>
              <li>
                <Link href="/venues" className="text-sm text-smoke hover:text-paper">
                  Venue Guide
                </Link>
              </li>
              <li>
                <Link href="/noah-devoe/pricing" className="text-sm text-smoke hover:text-paper">
                  Book Noah
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-smoke hover:text-paper">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-smoke hover:text-paper">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-6 font-mono text-[11px] uppercase tracking-wider text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {prestige.legalName}. Noah DeVoe, Co-Owner.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-2">
            <a href={prestige.sameAs[0]} className="hover:text-paper">
              WeddingWire
            </a>
            <a href={prestige.sameAs[1]} className="hover:text-paper">
              The Knot
            </a>
            <a href={prestige.sameAs[2]} className="hover:text-paper">
              Zola
            </a>
            <a href={prestige.sameAs[3]} className="hover:text-paper">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
