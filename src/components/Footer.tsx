import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/data/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-[#94A3B8]">
      {/* Main footer grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0B5563] flex items-center justify-center text-white font-bold text-sm">
                AL
              </div>
              <div className="text-white font-bold text-sm leading-tight">
                AL Air Duct Cleaning<br />
                <span className="font-normal text-[#94A3B8] text-xs">Dallas, Texas</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Professional air duct, dryer vent, and HVAC cleaning across Dallas–Fort Worth. Available 24/7 with same-day scheduling.
            </p>
            <div className="flex items-center gap-3">
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
              )}
              {BUSINESS.social.googleMaps && (
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#F26522] hover:text-[#F5834A] transition-colors font-medium">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About us" },
                { href: "/services", label: "All services" },
                { href: "/reviews", label: "Customer reviews" },
                { href: "/faq", label: "FAQ" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/sitemap.xml", label: "Sitemap" },
                { href: "/privacy-policy", label: "Privacy policy" },
                { href: "/terms", label: "Terms of service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                Dallas–Fort Worth, Texas
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock size={15} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Service area city links */}
        <div className="mt-12 pt-8 border-t border-[#1E293B]">
          <p className="text-xs uppercase tracking-wider text-[#475569] mb-3">
            Service areas
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="text-xs hover:text-white transition-colors"
              >
                {a.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#1E293B] py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
